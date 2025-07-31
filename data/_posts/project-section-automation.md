---
id: "project-section-automation"
title: "Automating Portfolio Project Updates"
description: "A guide to setting up GitHub Actions pipelines for syncing blog posts and generating project descriptions for a portfolio website"
date: "2025-07-02"
tags:
  [
    "github-actions",
    "generative-ai",
    "ci-cd",
    "content-automation",
    "portfolio-sync",
  ]
---

# GitHub Actions Workflow: Generate and Save Project Descriptions

This document details a GitHub Actions workflow that generates project descriptions for repositories owned by a specified GitHub user using the GitHub API and Google Generative AI, saves them in a JSON file, and commits the changes to the repository. The workflow is manually triggered and uses a bot to handle commits and pushes.

## Workflow Overview

- **Name**: Generate Repo Description
- **Trigger**: Manual (`workflow_dispatch`)
- **Purpose**: Fetches repository data, generates descriptions using Google Generative AI, saves them to `src/data/project.json`, and commits changes
- **Runner**: Ubuntu-latest
- **Output File**: `src/data/project.json`
- **Dependencies**: Node.js, Octokit, GoogleGenAI
- **GitHub User**: `Suuraw`

## Workflow Steps

1. **Checkout Repository**:
   - Uses `actions/checkout@v3` to clone the repository, automatically providing a token for admin-level operations.
2. **Set Up Node.js**:
   - Uses `actions/setup-node@v4` to set up Node.js version 18.
3. **Install Dependencies**:
   - Runs `npm install` to install required Node.js packages (e.g., `@octokit/core`, `@google/genai`).
4. **Run `loadProjects.js`**:
   - Executes the `loadProjects.js` script, passing `ACCESS_TOKEN` (GitHub personal access token) and `GEMINI_API_KEY` (Google Generative AI API key) as environment variables.
   - The script fetches repository data, generates descriptions, and saves them to `src/data/project.json`.
5. **Commit and Push Changes**:
   - Configures git with the bot user `github-actions[bot]`.
   - Adds all changed files (`git add .`).
   - Checks for changes using `git diff --cached --quiet`; if changes exist, commits with the message "update projects.json" and pushes to the repository.

## Workflow Code

```yaml
name: Generate Repo description

on:
  workflow_dispatch:

permissions:
  contents: write

jobs:
  load-projects:
    runs-on: ubuntu-latest

    steps:
      - name: Load Repo Code
        uses: actions/checkout@v3

      - name: Setup node js
        uses: actions/setup-node@v4
        with:
          node-version: "18"

      - name: Install Dependencies
        run: npm install

      - name: Run loadProjects.js
        env:
          ACCESS_TOKEN: ${{ secrets.ACCESS_TOKEN }}
          GEMINI_API_KEY: ${{ secrets.GEMINI_API_KEY }}
        run: node loadProjects.js

      - name: Commit and Push projects.json
        run: |
          git config user.name "github-actions[bot]"
          git config user.email "41898282+github-actions[bot]@users.noreply.github.com"
          git add .
          git diff --cached --quiet || git commit -m "update projects.json"
          git push
```

## Script Details

### `loadProjects.js`

This script fetches repository data for the GitHub user `Suuraw`, generates descriptions using Google Generative AI, and saves the results to `src/data/project.json`.

#### Dependencies

- **Octokit**: For interacting with the GitHub API.
- **GoogleGenAI**: For generating repository descriptions.
- **fs/promises**: For file operations in Node.js.

#### Code

```javascript
import fs from "fs/promises";
import { Octokit } from "octokit";
import model from "./genAI.js";

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const githubToken = process.env.ACCESS_TOKEN;
const geminiApiKey = process.env.GEMINI_API_KEY;
if (!geminiApiKey) {
  console.error("Missing Gemini API Key!");
  process.exit(1);
}

const output_path = "src/data/project.json";
const myModel = new model();
const octokit = new Octokit({
  auth: githubToken,
});
const headers = {
  owner: "Suuraw",
  headers: {
    "X-GitHub-Api-Version": "2022-11-28",
  },
};
const response = await octokit.request("GET /users/Suuraw/repos", headers);
let projects_details = [];
const repo_data = response.data;
let count = 1;
for (const obj of repo_data) {
  const { name, html_url, languages_url } = obj;
  const languages = await octokit.request(`GET ${languages_url}`, headers);
  const prompt = `Generate a concise one-para description for a Github repository
  name of the repo:${name} , repo_link:${html_url} , languages_used:${Object.keys(
    languages.data
  )}`;
  const projectDescrption = await myModel.generateContent(prompt, geminiApiKey);
  await delay(5000);
  const project = {
    repo_name: name,
    description: projectDescrption,
    languages: Object.keys(languages.data),
  };
  console.log(`Project ${count} :`, project);
  projects_details.push(project);
  await fs.writeFile(output_path, JSON.stringify(projects_details, null, 2));
  count++;
}
```

#### Functionality

- **Authentication**: Uses `ACCESS_TOKEN` for GitHub API and `GEMINI_API_KEY` for Google Generative AI.
- **API Requests**: Fetches repository data and languages used for each repository owned by `Suuraw`.
- **Description Generation**: Uses a prompt to generate a concise description for each repository via Google Generative AI.
- **Delay**: Includes a 5-second delay between API calls to avoid rate limiting.
- **Output**: Saves repository details (name, description, languages) to `src/data/project.json` in JSON format.

### `genAI.js`

This script defines a class to interact with the Google Generative AI API for generating content.

#### Code

```javascript
import { GoogleGenAI } from "@google/genai";

class model {
  async generateContent(context, apiKey) {
    const ai = new GoogleGenAI({ apiKey: apiKey });
    this.context = context;
    const response = await ai.models.generateContent({
      model: "gemini-1.5-flash",
      contents: context,
      config: {
        systemInstruction: `Response Format:
                Description Text
                `,
      },
    });
    return response.text;
  }
}
export default model;
```

#### Functionality

- **Initialization**: Creates a `GoogleGenAI` instance with the provided API key.
- **Content Generation**: Sends a prompt to the `gemini-1.5-flash` model and returns the generated text.
- **Configuration**: Specifies a response format for consistency.

## Generated Output

The `loadProjects.js` script generates a JSON file (`src/data/project.json`) containing details for each repository, including:

- `repo_name`: Name of the repository.
- `description`: AI-generated description.
- `languages`: List of programming languages used.

### Example Output

```json
[
  {
    "repo_name": "Affect-of-Covid-19-on-Job-Professional",
    "description": "This Jupyter Notebook repository, \"Affect-of-Covid-19-on-Job-Professional,\" analyzes the impact of the COVID-19 pandemic on job markets and professionals. It utilizes data analysis techniques to explore trends and potential consequences of the pandemic on employment.",
    "languages": ["Jupyter Notebook"]
  },
  {
    "repo_name": "AgroPredict",
    "description": "AgroPredict is a web application built with TypeScript, CSS, and JavaScript, designed to predict agricultural yields. The repository provides the source code and resources for this predictive model, offering insights into crop production and potentially assisting farmers in optimizing their yields.",
    "languages": ["TypeScript", "CSS", "JavaScript"]
  }
  // ... (additional repositories)
]
```

## Prerequisites

1. **GitHub Repository**:
   - A repository containing the workflow and scripts.
   - The repository must have `src/data/` directory or the script must have permissions to create it.
2. **GitHub Secrets**:
   - `ACCESS_TOKEN`: A GitHub personal access token with `repo` scope for accessing repository data and pushing changes.
   - `GEMINI_API_KEY`: A Google Generative AI API key for generating descriptions.
3. **Node.js Dependencies**:
   - Install `@octokit/core` and `@google/genai` via `npm install @octokit/core @google/genai`.
   - Ensure a `package.json` file exists with these dependencies.
4. **Permissions**:
   - Workflow permissions set to `contents: write` in the workflow file to allow committing and pushing.
   - The `github-actions[bot]` user must have write access to the repository.
5. **Node.js Environment**:
   - Node.js version 18 (configured in the workflow).
6. **Directory Structure**:
   - Ensure `loadProjects.js` and `genAI.js` are in the repository root or adjust paths accordingly.
   - The output file will be saved to `src/data/project.json`.

## Notes

- **Rate Limiting**: The 5-second delay in `loadProjects.js` helps avoid API rate limits for Google Generative AI and GitHub APIs.
- **Error Handling**: The script checks for the presence of `GEMINI_API_KEY` and exits if missing.
- **Scalability**: The script processes all repositories owned by `Suuraw`; for large numbers of repositories, consider pagination or additional rate limit handling.
- **Security**: Store sensitive data (`ACCESS_TOKEN`, `GEMINI_API_KEY`) in GitHub Secrets, not in the codebase.
- **Workflow Trigger**: The `workflow_dispatch` event allows manual triggering via the GitHub Actions interface.
- **Output Overwrite**: The script overwrites `src/data/project.json` on each run; ensure this is the desired behavior or modify to append/update selectively.

## Reference

- Repo: https://github.com/Suuraw/project_section_automation_test
