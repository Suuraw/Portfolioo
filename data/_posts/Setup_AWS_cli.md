---
id: "Setup_AWS_cli"
title: "Setup AWS cli for remote SSH"
description: "Step-by-step guide how to install and setup aws cli for remote ssh"
date: "2025-05-20"
tags: ["aws-cli", "ec2"]
---

## 🧾 Prerequisites

- AWS CLI is already installed on your system.
- You can verify this in Command Prompt:

```cmd
where aws
```

Expected output:

```
C:\Program Files\Amazon\AWSCLIV2\aws.exe
```

If not found, [download and install AWS CLI for Windows](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2-windows.html).

---

### Verify Installation:

```bash
aws --version
```

Expected output: Version information like `aws-cli/2.x.x Python/3.x.x ...`.

---

## Configuring AWS CLI

### Run Configuration Command:

```bash
aws configure
```

### Enter Credentials:

Obtain your AWS Access Key ID and Secret Access Key from the AWS Management Console:

> IAM > Users > [Your User] > Security credentials > Create access key.

Input the credentials as prompted:

```text
AWS Access Key ID [****************NLAO]: <your-access-key-id>
AWS Secret Access Key [****************R4NW]: <your-secret-access-key>
Default region name [Asia Pacific(Mumbai)]: ap-south-1
Default output format [None]: <press Enter>
```

### Verify Configuration:

```bash
aws configure list
```

---

# ✅ How to Make AWS CLI Work in Git Bash on Windows

This guide explains how to resolve the issue where AWS CLI is installed on Windows but not accessible from Git Bash.

---

---

## 🧰 Step-by-Step Setup for Git Bash

### 🛠️ Step 1: Open Git Bash

Use the Git Bash application (not CMD or PowerShell).

---

### 📝 Step 2: Add AWS CLI Path to Git Bash Environment

Run one of the following commands in **Git Bash** to update your `~/.bashrc`:

#### Option A – If `aws.exe` is in the root install directory:

```bash
echo 'export PATH=$PATH:"/c/Program Files/Amazon/AWSCLIV2"' >> ~/.bashrc
```

#### Option B – If `aws.exe` is inside a `bin` folder:

```bash
echo 'export PATH=$PATH:"/c/Program Files/Amazon/AWSCLIV2/bin"' >> ~/.bashrc
```

> Note: `/c/` is how Git Bash refers to `C:\`.

---

### 🔄 Step 3: Reload Your Bash Configuration

Still in Git Bash, run:

```bash
source ~/.bashrc
```

This reloads your shell and applies the new path.

---

### ✅ Step 4: Verify AWS CLI

Run:

```bash
aws --version
```

Expected output (version may vary):

```
aws-cli/2.15.3 Python/3.11.5 Windows/10 exe/x86_64 prompt/off
```

---

## Configuring AWS CLI

### Run Configuration Command:

```bash
aws configure
```

### Enter Credentials:

Obtain your AWS Access Key ID and Secret Access Key from the AWS Management Console:

> IAM > Users > [Your User] > Security credentials > Create access key.

Input the credentials as prompted:

```text
AWS Access Key ID [****************NLAO]: <your-access-key-id>
AWS Secret Access Key [****************R4NW]: <your-secret-access-key>
Default region name [Asia Pacific(Mumbai)]: ap-south-1
Default output format [None]: <press Enter>
```

### Verify Configuration:

```bash
aws configure list
```

---

# NOW

[[Power on my ec2 machine]](https://sujay.is-a.dev/blog/How_to_power_EC2)
