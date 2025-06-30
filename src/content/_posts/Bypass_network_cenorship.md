# 🛡️ Bypassing Network Censorship Using DNS over HTTPS (DoH) in Firefox

## 📖 Overview

In some institutions like colleges, access to certain websites (e.g., anime streaming sites) is restricted at the **network level** using **DNS filtering**. This document explains how DNS-based blocking works and how I **bypassed** it using **Firefox's DNS over HTTPS (DoH)** feature.

---

## 🧠 What is DNS Filtering?

When you type a website like `hianimez.to`, your browser asks a **DNS server** to translate the domain name to an IP address (e.g., `62.0.58.94`). If your network’s DNS server is controlled by the institution, it can:

- Classify Websites Ip and domain like "anime sites" if yes then,
- Return a fake IP address (redirect or block)
- Return no IP at all (DNS failure)
- Log what sites you're trying to visit
- eg:
  ![[Pasted image 20250601003747.png]]

---

## 🔐 What is DNS over HTTPS (DoH)?

**DNS over HTTPS** is a security protocol that encrypts your DNS requests and sends them over **HTTPS (port 443)**, just like your normal web traffic. This prevents anyone on the network (like your college) from seeing or interfering with your DNS traffic.

Benefits:

- Your DNS requests are **encrypted**
- The college network **can't block domains via DNS**
- Requests go to **trusted third-party resolvers** (e.g., Cloudflare)

---

## 🧩 Symptoms of DNS Blocking (My Tests)

Before the fix:

- Firefox and Chrome showed "Connection timed out"
  ![[Pasted image 20250601004018.png]]
- Ping to the anime site failed with 100% packet loss
  ![[Pasted image 20250601004008.png]]
- `curl` timed out trying to reach the website
  ![[Pasted image 20250601004049.png]]
- The domain resolved to an IP address, but no response from the server
  ![[Pasted image 20250601004139.png]]

---

## ✅ Solution: Enabling DNS over HTTPS in Firefox

### 🧭 Step-by-Step Instructions

1. **Open Firefox**

2. **Go to Settings**

   - Click the **☰ menu** (top right)
   - Select **Settings**

3. **Scroll down to "Network Settings"**

   - It's at the bottom of the **General** tab

4. **Click "Settings..." next to Network Settings**

5. **Enable DNS over HTTPS**

   - Check ✅ the box **"Enable DNS over HTTPS"**

6. **Choose "Max Protection"**

   - This forces Firefox to **always use secure DNS**
   - It will never fall back to your system’s DNS

7. **Select a DNS Provider**

   - From the dropdown, select **Cloudflare (Default)**

8. **Click OK** to save

---

## 🧪 What Happens After Enabling DoH?

- Firefox bypasses your college’s DNS server.
- All DNS queries go securely to Cloudflare.
- Your network firewall **cannot see or block** the domain requests.
- The site loads normally if there’s no IP or SNI blocking.

---

## 📸 Screenshot Reference

![[Pasted image 20250601003851.png]]
