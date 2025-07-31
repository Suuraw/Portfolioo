---
id: "automate_file_upload"
title: "Sync Blog Posts to Portfolio Repository"
description: "Step-by-step guide for setting up a GitHub Actions workflow to synchronize Markdown blog posts from a Blogs repository to a Portfolio repository"
date: "2025-05-16"
tags:
  ["github-actions", "automation", "markdown", "repository-sync", "workflow"]
---

# GitHub Actions Workflow: Sync Blog Posts to Portfolio Repository

This document outlines a GitHub Actions workflow that automatically synchronizes Markdown blog posts from a Blogs repository to a Portfolio repository whenever a push event occurs involving `.md` files.

## Workflow Overview

- **Name**: Sync to Portfolio
- **Trigger**: Push event on any `.md` files in the Blogs repository
- **Purpose**: Copies Markdown files from the Blogs repository to the Portfolio repository, commits, and pushes changes
- **Runner**: Ubuntu-latest
- **Portfolio Repository**: `Suuraw/Portfolioo`
- **Target Directory in Portfolio**: `src/content/_posts/`

## Workflow Steps

1. **Checkout Blogs Repository**:
   - Uses `actions/checkout@v3` to clone the Blogs repository.
2. **Clone Portfolio Repository**:
   - Uses `actions/checkout@v3` to clone the `Suuraw/Portfolioo` repository into a `portfolio` directory.
   - Requires a GitHub secret `BLOG_REPO_KEY` for authentication.
3. **Copy Markdown Files**:
   - Creates the target directory `portfolio/src/content/_posts/` if it doesn't exist.
   - Copies all `.md` files from the Blogs repository to the Portfolio repository's target directory.
4. **Commit and Push Changes**:
   - Configures git with the bot user `github-actions[bot]`.
   - Adds all copied `.md` files to the git index.
   - Checks for changes; if none, outputs "No changes to commit."
   - If changes exist, commits with the message "Sync new blog post(s) from Blogs repo" and pushes to the `main` branch of the Portfolio repository.

## Workflow Code

```yaml
name: Sync to Portfolio

on:
  push:
    paths:
      - "**.md"

jobs:
  sync-blog:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout blog repo
        uses: actions/checkout@v3

      - name: Clone portfolio repo
        uses: actions/checkout@v3
        with:
          repository: Suuraw/Portfolioo
          token: ${{ secrets.BLOG_REPO_KEY }}
          path: portfolio

      - name: Copy Markdown files
        run: |
          mkdir -p portfolio/src/content/_posts/
          cp *.md portfolio/src/content/_posts/

      - name: Commit and Push to Portfolio Repo
        run: |
          cd portfolio
          git config user.name "github-actions[bot]"
          git config user.email "github-actions[bot]@users.noreply.github.com"
          git add src/content/_posts/*.md
          if git diff --cached --quiet; then
            echo "No changes to commit."
          else
            git commit -m "Sync new blog post(s) from Blogs repo"
            git push origin main
          fi
```

## Prerequisites

- **GitHub Secret**: A personal access token stored as `BLOG_REPO_KEY` in the Blogs repository's secrets, with write access to the Portfolio repository.
- **Repository Access**: The bot user (`github-actions[bot]`) must have permissions to push to the `main` branch of `Suuraw/Portfolioo`.
- **Directory Structure**: The Portfolio repository must have or support the creation of the `src/content/_posts/` directory.

## Notes

- The workflow only triggers on pushes involving `.md` files, ensuring efficiency.
- The conditional check (`git diff --cached --quiet`) prevents empty commits.
- Ensure the `BLOG_REPO_KEY` secret is correctly configured to avoid authentication issues.
- The workflow assumes the `main` branch in the Portfolio repository; adjust the branch name if necessary.
