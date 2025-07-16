---
id: "How_to_power_EC2"
title: "Power On Your Ec2 Remote Server using aws cli"
description: "Step-by-step guide for powering on your remote ec2 server using your terminal along with aws cli"
date: "2025-05-16"
tags: ["aws-cli", "ec2"]
---

## Prerequisites

[[Setup AWS cli for SSH]](Setup_AWS_cli.md)

---

### Commands (Hardware layer)

- Power On 🍥

```bash
aws ec2 start-instances --instance-ids i-xxxxxxx
```

- To shut down the machine 🚫

```bash
aws ec2 stop-instances --instance-ids i-xxxxxxxxx
```
- ***Issues while shuting down

```txt
An error occurred (InvalidInstanceID.NotFound) when calling the StopInstances operation: The instance ID 'i-060819eedcfc9f3b1' does not exist
```

✅ FIX : SPECIFY THE REGION OF THE DATA CENTER
```bash
aws ec2 stop-instances --instance-ids i-060819eedcfc9f3b1 --region us-east-1
```

- Check status whether machine is **_One_** or **_Off_**

```bash
aws ec2 describe-instance-status --instance-ids i-xxxxxxxxx
```

# Now Go SSH your server

[[SSH ec2]](SSH_Ec2.md)
