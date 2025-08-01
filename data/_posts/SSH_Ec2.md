---
id: "SSH_Ec2"
title: "How to SSH your remote Ec2 Server"
description: "Step-by-step guide for ssh remote ec2 server using and configure your remote system"
date: "2025-05-16"
tags: ["aws", "ec2"]
---

# How to Remotely Connect to Your EC2 Instance

This guide provides steps to configure the AWS CLI and perform operations like connecting to, starting, stopping, and terminating an Amazon EC2 instance. The instructions are tailored for Windows users with a Unix-based command-line interface and include general steps for other platforms where applicable.

---

## Prerequisites

### For Windows

- [[Setup AWS cli for SSH]](https://sujay.is-a.dev/blog/Setup_AWS_cli)
- [[Power on my ec2 machine]](https://sujay.is-a.dev/blog/How_to_power_EC2)

### Ensure SSH Key Pair:

- Open bash in the location of .pem key
- Verify you have the `.pem` key file associated with your EC2 instance (downloaded during instance creation).
- Set appropriate permissions for the key file:

## Hide the use of your to key to the network

- **chmod** helps check if the key is exposed to my public network

```bash
chmod 400 <your-key-file>.pem
```

### Login to ec2 via SSH for OS level usage:

**Only if the \***ip**\* **of EC2 doesn't change on stop/start then only ssh connection can be made ,so inorder to make the ip of ec2 to static we have to configure security and network settings\*\*

### Allocate a static ip to your ec2 ❌ (**PAID SERVICE**)

Dashboard --> search **_elastic ip_** --> click "Allocate Elastic IP address"

```bash
ssh -i <your-key-file>.pem ec2-ubuntu@<public-dns-or-ip>

```

> Replace `ec2-user` with the appropriate user for your AMI (e.g., `ubuntu` for Ubuntu AMIs).

OR

Dashboard --> instance ---> connect ---> below there is **ssh command** for connection. (copy and paste in bash)

---

### Get Instance Public DNS/IP:

```bash
aws ec2 describe-instances --query "Reservations[*].Instances[*].[InstanceId,PublicDnsName,PublicIpAddress]" --output table
```

## EC2 Instance Operations

[[Power on my ec2 machine]](https://sujay.is-a.dev/blog/How_to_power_EC2)

                            OR

### List Instances:

```bash
aws ec2 describe-instances --query "Reservations[*].Instances[*].InstanceId" --output table
```

### Start an Instance:

```bash
aws ec2 start-instances --instance-ids <instance-id>
```

### Stop an Instance:

```bash
aws ec2 stop-instances --instance-ids <instance-id>
```

### Terminate an Instance:

```bash
aws ec2 terminate-instances --instance-ids <instance-id>
```

### Check Instance Status:

```bash
aws ec2 describe-instance-status --instance-ids <instance-id> --query "InstanceStatuses[*].[InstanceId,InstanceState.Name]" --output table
```

---

## Troubleshooting

- **AWS CLI Not Found**: Ensure the AWS CLI is installed and added to your system’s PATH.
- **Permission Denied (SSH)**: Verify the `.pem` file permissions (`chmod 400`) and ensure the correct user and public DNS/IP are used.
- **Invalid Credentials**: Recheck your Access Key ID and Secret Access Key in the AWS Management Console and re-run `aws configure`.
- **Region Issues**: Ensure the region specified in `aws configure` matches the region of your EC2 instance.

---

## Security Best Practices

- **Restrict Access Keys**: Use IAM roles or temporary credentials where possible instead of long-term access keys.
- **Secure Key File**: Store your `.pem` file in a secure location and never share it.
- **Limit Security Group Rules**: Ensure your EC2 instance’s security group only allows SSH (port 22) from trusted IP addresses.

# Now You Can Deploy Your APP

[[Deploying Nodejs application to EC2]](https://sujay.is-a.dev/blog/Deploying_Node_to_Ec2)
