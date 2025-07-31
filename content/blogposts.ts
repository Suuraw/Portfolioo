export interface BlogPost {
  id: string
  title: string
  date: string
  description: string
  tags: string[]
  content: string
  slug: string
}

export const blogPosts: BlogPost[] = [
  {
    id: "automate-adding-projects-to-portfolio-sites",
    title: "Automate Adding Projects to Portfolio Sites",
    date: "2024-01-20",
    description:
      "Learn how to automatically add new projects to your portfolio website using GitHub Actions and automated workflows.",
    tags: ["automation", "github-actions", "portfolio", "ci-cd"],
    slug: "automate-adding-projects-to-portfolio-sites",
    content: `# Automate Adding Projects to Portfolio Sites

Keeping your portfolio updated with new projects can be tedious. Let's automate this process using GitHub Actions and smart workflows.

## The Problem

Manually updating portfolio sites every time you create a new project is:
- Time-consuming
- Error-prone  
- Easy to forget

## The Solution

\`\`\`yaml
name: Update Portfolio
on:
  repository_dispatch:
    types: [new-project]
  
jobs:
  update-portfolio:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout portfolio
        uses: actions/checkout@v3
      - name: Update projects
        run: |
          echo "Updating portfolio with new project"
          npm run update-projects
\`\`\`

## Implementation Steps

1. **Set up GitHub Actions workflow**
2. **Create project detection script**
3. **Automate portfolio updates**
4. **Deploy changes automatically**

This automation saves hours of manual work and ensures your portfolio stays current.`,
  },
  {
    id: "automate-file-upload",
    title: "Automate File Upload Processes",
    date: "2024-01-18",
    description:
      "Streamline file upload workflows with automated processing, validation, and cloud storage integration.",
    tags: ["automation", "file-upload", "cloud-storage", "nodejs"],
    slug: "automate-file-upload",
    content: `# Automate File Upload Processes

File uploads are a common requirement in web applications. Let's build an automated system that handles uploads efficiently.

## Key Features

- **Automatic file validation**
- **Cloud storage integration**
- **Progress tracking**
- **Error handling**

## Implementation

\`\`\`javascript
const multer = require('multer');
const AWS = require('aws-sdk');

const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB
  },
});

app.post('/upload', upload.single('file'), async (req, res) => {
  try {
    const result = await uploadToS3(req.file);
    res.json({ success: true, url: result.Location });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
\`\`\`

## Benefits

- Reduced manual intervention
- Consistent file processing
- Better error handling
- Scalable architecture`,
  },
  {
    id: "deploying-node-to-ec2",
    title: "Deploying Node.js Applications to EC2",
    date: "2024-01-15",
    description:
      "Complete guide to deploying Node.js applications on AWS EC2 instances with best practices and security considerations.",
    tags: ["nodejs", "aws", "ec2", "deployment", "devops"],
    slug: "deploying-node-to-ec2",
    content: `# Deploying Node.js Applications to EC2

Learn how to deploy your Node.js applications to AWS EC2 instances with proper configuration and security.

## Prerequisites

- AWS Account
- Node.js application
- Basic Linux knowledge

## Step 1: Launch EC2 Instance

\`\`\`bash
# Connect to your instance
ssh -i your-key.pem ec2-user@your-instance-ip
\`\`\`

## Step 2: Install Node.js

\`\`\`bash
# Update system
sudo yum update -y

# Install Node.js
curl -fsSL https://rpm.nodesource.com/setup_18.x | sudo bash -
sudo yum install -y nodejs
\`\`\`

## Step 3: Deploy Application

\`\`\`bash
# Clone your repository
git clone https://github.com/yourusername/your-app.git
cd your-app

# Install dependencies
npm install

# Start application with PM2
npm install -g pm2
pm2 start app.js --name "my-app"
pm2 startup
pm2 save
\`\`\`

## Security Best Practices

- Use security groups properly
- Keep system updated
- Use environment variables for secrets
- Enable SSL/TLS`,
  },
  {
    id: "ec2-fundamentals",
    title: "EC2 Fundamentals: Getting Started with AWS",
    date: "2024-01-12",
    description:
      "Understanding AWS EC2 basics, instance types, pricing models, and when to use different configurations.",
    tags: ["aws", "ec2", "cloud", "infrastructure"],
    slug: "ec2-fundamentals",
    content: `# EC2 Fundamentals: Getting Started with AWS

Amazon EC2 (Elastic Compute Cloud) is a cornerstone service of AWS. Let's explore its fundamentals.

## What is EC2?

EC2 provides scalable computing capacity in the cloud. You can launch virtual servers (instances) on demand.

## Instance Types

### General Purpose
- **t3.micro**: 1 vCPU, 1 GB RAM - Great for testing
- **t3.small**: 1 vCPU, 2 GB RAM - Light workloads
- **m5.large**: 2 vCPU, 8 GB RAM - Balanced performance

### Compute Optimized
- **c5.large**: 2 vCPU, 4 GB RAM - CPU-intensive tasks

## Pricing Models

1. **On-Demand**: Pay per hour/second
2. **Reserved**: 1-3 year commitments for discounts
3. **Spot**: Bid for unused capacity

## Best Practices

- Right-size your instances
- Use Auto Scaling
- Monitor with CloudWatch
- Regular backups with snapshots

\`\`\`bash
# Launch instance with AWS CLI
aws ec2 run-instances \\
  --image-id ami-0abcdef1234567890 \\
  --count 1 \\
  --instance-type t3.micro \\
  --key-name MyKeyPair
\`\`\``,
  },
  {
    id: "how-to-power-ec2",
    title: "How to Power Up Your EC2 Performance",
    date: "2024-01-10",
    description:
      "Optimization techniques and best practices to maximize your EC2 instance performance and cost efficiency.",
    tags: ["aws", "ec2", "performance", "optimization"],
    slug: "how-to-power-ec2",
    content: `# How to Power Up Your EC2 Performance

Maximize your EC2 instance performance with these proven optimization techniques.

## Performance Optimization Strategies

### 1. Choose the Right Instance Type

\`\`\`bash
# Check current instance type
curl http://169.254.169.254/latest/meta-data/instance-type
\`\`\`

### 2. Optimize Storage

- Use **GP3 volumes** for better price/performance
- Enable **EBS optimization**
- Consider **instance store** for temporary data

### 3. Network Optimization

\`\`\`bash
# Enable enhanced networking
aws ec2 modify-instance-attribute \\
  --instance-id i-1234567890abcdef0 \\
  --ena-support
\`\`\`

## Monitoring and Metrics

### CloudWatch Metrics to Watch
- CPU Utilization
- Network In/Out
- Disk Read/Write Operations

### Custom Monitoring Script

\`\`\`bash
#!/bin/bash
# Monitor system resources
echo "CPU Usage: $(top -bn1 | grep "Cpu(s)" | awk '{print $2}' | awk -F'%' '{print $1}')"
echo "Memory Usage: $(free | grep Mem | awk '{printf("%.2f%%", $3/$2 * 100.0)}')"
echo "Disk Usage: $(df -h / | awk 'NR==2{printf "%s", $5}')"
\`\`\`

## Cost Optimization

- Use **Spot Instances** for fault-tolerant workloads
- Implement **Auto Scaling**
- Schedule instances for predictable workloads
- Regular **right-sizing** reviews`,
  },
  {
    id: "project-section-automation",
    title: "Project Section Automation for Developers",
    date: "2024-01-08",
    description:
      "Automate the creation and maintenance of project sections in your portfolio using modern development tools.",
    tags: ["automation", "portfolio", "development", "productivity"],
    slug: "project-section-automation",
    content: `# Project Section Automation for Developers

Streamline your portfolio management by automating project section updates and maintenance.

## The Challenge

Keeping project sections updated across multiple platforms:
- Personal website
- GitHub README
- LinkedIn profile
- Resume

## Automation Solution

### 1. Central Project Database

\`\`\`json
{
  "projects": [
    {
      "name": "Project Name",
      "description": "Project description",
      "technologies": ["React", "Node.js"],
      "github": "https://github.com/user/repo",
      "demo": "https://demo.com",
      "featured": true
    }
  ]
}
\`\`\`

### 2. Template Generation

\`\`\`javascript
const generateProjectSection = (projects) => {
  return projects
    .filter(p => p.featured)
    .map(project => \`
## \${project.name}
\${project.description}

**Tech Stack:** \${project.technologies.join(', ')}
- [Live Demo](\${project.demo})
- [Source Code](\${project.github})
    \`).join('\\n\\n');
};
\`\`\`

### 3. GitHub Actions Workflow

\`\`\`yaml
name: Update Portfolio
on:
  push:
    paths: ['projects.json']

jobs:
  update:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Generate sections
        run: node scripts/generate-portfolio.js
      - name: Commit changes
        run: |
          git config --local user.email "action@github.com"
          git add .
          git commit -m "Auto-update portfolio sections"
          git push
\`\`\`

## Benefits

- **Consistency** across all platforms
- **Time savings** on manual updates
- **Version control** for project data
- **Easy maintenance** and updates`,
  },
  {
    id: "setup-aws-cli",
    title: "Setup AWS CLI for Development",
    date: "2024-01-05",
    description:
      "Complete guide to installing, configuring, and using AWS CLI for efficient cloud development workflows.",
    tags: ["aws", "cli", "development", "setup"],
    slug: "setup-aws-cli",
    content: `# Setup AWS CLI for Development

The AWS CLI is essential for cloud development. Here's how to set it up properly.

## Installation

### macOS
\`\`\`bash
# Using Homebrew
brew install awscli

# Or using pip
pip3 install awscli
\`\`\`

### Linux
\`\`\`bash
# Ubuntu/Debian
sudo apt update
sudo apt install awscli

# Or using pip
pip3 install awscli --user
\`\`\`

### Windows
\`\`\`powershell
# Using Chocolatey
choco install awscli

# Or download MSI installer from AWS
\`\`\`

## Configuration

### Basic Setup
\`\`\`bash
aws configure
# AWS Access Key ID: YOUR_ACCESS_KEY
# AWS Secret Access Key: YOUR_SECRET_KEY
# Default region name: us-east-1
# Default output format: json
\`\`\`

### Multiple Profiles
\`\`\`bash
# Create named profile
aws configure --profile development
aws configure --profile production

# Use specific profile
aws s3 ls --profile development
\`\`\`

## Essential Commands

### S3 Operations
\`\`\`bash
# List buckets
aws s3 ls

# Upload file
aws s3 cp file.txt s3://my-bucket/

# Sync directory
aws s3 sync ./local-folder s3://my-bucket/folder/
\`\`\`

### EC2 Operations
\`\`\`bash
# List instances
aws ec2 describe-instances

# Start instance
aws ec2 start-instances --instance-ids i-1234567890abcdef0

# Create security group
aws ec2 create-security-group --group-name MySecurityGroup --description "My security group"
\`\`\`

## Best Practices

- Use **IAM roles** instead of access keys when possible
- Set up **MFA** for sensitive operations
- Use **profiles** for different environments
- Keep credentials secure and rotate regularly`,
  },
  {
    id: "ssh-ec2-guide",
    title: "SSH into EC2: Complete Connection Guide",
    date: "2024-01-03",
    description:
      "Master SSH connections to EC2 instances with security best practices, troubleshooting tips, and advanced configurations.",
    tags: ["aws", "ec2", "ssh", "security", "linux"],
    slug: "ssh-ec2-guide",
    content: `# SSH into EC2: Complete Connection Guide

Learn how to securely connect to your EC2 instances using SSH with best practices and troubleshooting.

## Prerequisites

- EC2 instance running
- Key pair (.pem file)
- Security group allowing SSH (port 22)

## Basic SSH Connection

\`\`\`bash
# Standard connection
ssh -i /path/to/your-key.pem ec2-user@your-instance-public-ip

# For Ubuntu instances
ssh -i /path/to/your-key.pem ubuntu@your-instance-public-ip
\`\`\`

## Key Management

### Set Proper Permissions
\`\`\`bash
# Key file must have restricted permissions
chmod 400 your-key.pem
\`\`\`

### SSH Config File
Create \`~/.ssh/config\` for easier connections:

\`\`\`
Host my-ec2
    HostName your-instance-public-ip
    User ec2-user
    IdentityFile /path/to/your-key.pem
    Port 22
\`\`\`

Now connect with: \`ssh my-ec2\`

## Security Best Practices

### 1. Change Default SSH Port
\`\`\`bash
# Edit SSH config
sudo nano /etc/ssh/sshd_config

# Change port
Port 2222

# Restart SSH service
sudo systemctl restart sshd
\`\`\`

### 2. Disable Password Authentication
\`\`\`bash
# In /etc/ssh/sshd_config
PasswordAuthentication no
PubkeyAuthentication yes
\`\`\`

### 3. Use SSH Agent
\`\`\`bash
# Start SSH agent
eval \$(ssh-agent -s)

# Add key to agent
ssh-add /path/to/your-key.pem

# Now connect without specifying key
ssh ec2-user@your-instance-ip
\`\`\`

## Troubleshooting Common Issues

### Connection Timeout
- Check security group rules
- Verify instance is running
- Confirm public IP/DNS

### Permission Denied
- Check key file permissions (400)
- Verify correct username
- Ensure key matches instance

### Host Key Verification Failed
\`\`\`bash
# Remove old host key
ssh-keygen -R your-instance-ip
\`\`\`

## Advanced SSH Features

### Port Forwarding
\`\`\`bash
# Local port forwarding
ssh -L 8080:localhost:80 -i your-key.pem ec2-user@instance-ip
\`\`\`

### SCP File Transfer
\`\`\`bash
# Copy file to instance
scp -i your-key.pem file.txt ec2-user@instance-ip:~/

# Copy from instance
scp -i your-key.pem ec2-user@instance-ip:~/file.txt ./
\`\`\``,
  },
]
