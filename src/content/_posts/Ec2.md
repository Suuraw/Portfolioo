---
id: "Ec2"
title: "ATS-backend Deployment Guide on AWS EC2 using PM2"
description: "Step-by-step guide for deploying and managing a Node.js server on AWS EC2 using PM2 process manager"
date: "2025-05-16"
tags: ["aws", "ec2", "nodejs", "pm2", "deployment"]
---

# ATS-backend Deployment Guide on AWS EC2 using PM2

This guide documents the steps taken to run and manage a Node.js server (`ATS-backend`) on an Ubuntu EC2 instance, along with explanations for each tool used.

## ✅ 1. Project Setup

```bash
cd ATS-backend
```

Navigates into your backend project directory on the server.

## ✅ 2. Installing and Using `nodemon` (Optional for Dev)

```bash
npm install -g nodemon
```

**What it does:**  
Installs `nodemon` globally so it can restart your server automatically on file changes during development.

> 🔧 Not recommended for production use — only for development!

## ✅ 3. Starting the Server Manually (Dev Only)

```bash
npm run dev
```

Runs the `dev` script from your `package.json`, which starts your server using `nodemon`.

## ❌ Problem: Server Stops When Terminal Closes

When using `nodemon` or `node server.js`, the server **stops** if the terminal or SSH session is closed.

## ✅ 4. Solution: Use `PM2` for Production

### 📦 Install PM2 Globally

```bash
npm install -g pm2
```

**What it does:**  
`PM2` is a production process manager for Node.js apps that keeps your app running **in the background**, restarts it on crashes, and supports automatic startup on reboot.

### ▶️ Start Your Server with PM2

```bash
pm2 start server.js --name ats-backend
```

**What it does:**  
Starts `server.js` with PM2 under the name `ats-backend`. The process will continue running even if you close the terminal.

## 🔍 Useful PM2 Commands

| Task | Command |
|------|---------|
| View all running processes | `pm2 list` |
| View logs | `pm2 logs ats-backend` |
| Stop your app | `pm2 stop ats-backend` |
| Restart your app | `pm2 restart ats-backend` |
| Delete the app from pm2 | `pm2 delete ats-backend` |
| Monitor in real-time (dashboard) | `pm2 monit` |

## 🔄 Optional: Start Server on Reboot

```bash
pm2 startup
pm2 save
```

**What it does:**
- `pm2 startup`: Generates system init script to launch PM2 and your apps at server startup.
- `pm2 save`: Saves the currently running processes so they are auto-started on reboot.

## 🧼 To Stop the Server

```bash
pm2 stop ats-backend
```

Stops the backend server managed by PM2.

## 📌 Summary

| Tool | Purpose |
|------|---------|
| `nodemon` | Restarts server on file changes (development only) |
| `pm2` | Keeps server running in background, manages logs, auto-restarts |

## ✅ Your Server is Now Production-Ready 🎉

You can now safely close the terminal — your server will stay up!

Access your server at: `http://<your-ec2-ip>:5000/`

**If using HTTPS or reverse proxy (e.g. Nginx), make sure ports and SSL are configured properly.**
