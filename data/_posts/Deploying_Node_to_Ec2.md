---
id: "Deploying_Node_to_Ec2"
title: "Deploy Your NodeJs application on your Ec2"
description: "Step-by-step guide for deploying and managing a Node.js server on AWS EC2 using PM2 process manager"
date: "2025-05-16"
tags: ["aws", "ec2", "nodejs", "pm2", "deployment"]
---

## Prerequisites

- [[Setup AWS cli first]](Setup_AWS_cli.md)
- [[Power on Ec2 Server]](How_to_power_EC2.md)
- [[SSH your Ec2]](SSH_Ec2.md)

### Update the system

```bash
sudo su -
sudo apt update && sudo apt upgrade -y
```

## Step 1: Install NodeJS and NPM using nvm

- Install node version manager (nvm) by typing the following at the command line.

```shell

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
```

- Activate nvm by typing the following at the command line.

```shell
. ~/.nvm/nvm.sh
```

- Use nvm to install the latest version of Node.js by typing the following at the command line.

```shell
nvm install node
```

- Test that node and npm are installed and running correctly by typing the following at the terminal:

```shell
node -v
npm -v
```

## Step 2: Install Git and clone repository from GitHub

- To install git, run below commands in the terminal window:

```shell
apt-get update -y
apt-get install git -y
```

- Just to verify if system has git installed or not, please run below command in terminal:

```shell
git —-version
```

- This command will print the git version in the terminal.
- Run below command to clone the code repository from Github:

```shell
git clone https://github.com/<Username>/<Repo Name>.git
```

- Provide Username

```ts
<username>
```

- Provide Password **_password here refered to the accessToken which a temporary token for validating user_** **NEW POLICY BY GITHUB**
- Also config some setting what the user with accessToken can do such **_read,write_**
- Access token generation service - **Developer settings** --> **Personal Access Token**

```ts
GENERATE TOKEN FROM GITHUB
```

- Get inside the directory and Install Packages

```shell
cd <repo name>
npm install
```

Start the application To start the application, run the below command in the terminal:

```shell
npm start
```

## Simon You Can Go Back

[[SSH ec2]](SSH_Ec2.md)
