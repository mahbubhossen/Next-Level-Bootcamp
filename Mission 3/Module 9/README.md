# Module 9: Fundamentals of web application with NodeJS

---

```md
# 🌐 Web Basics, Networking & JavaScript Fundamentals

This module covers the **core concepts of web communication, networking, and JavaScript internals** that every backend or full-stack developer should understand.

---

## 🔹 Client–Server Architecture

- **Client** ⇒ Web Browser  
- **Client sends request** to the server  
- **Server sends response** back to the client  

This flow is called the **Request–Response Model**.

In **Software Engineering**, this is known as **Client–Server Architecture**.

---

## 🔹 URL Structure Explained

Example URL:
```

[https://next.programming-hero.com/success](https://next.programming-hero.com/success)

```

| Part | Description |
|----|----|
| `https` | Protocol |
| `next.programming-hero.com` | Domain Name |
| `success` | Resource |

> ⚠️ This is just an example URL (not a real search address)

---

## 🔹 Protocol

- **HTTP / HTTPS** are protocols  
- **Protocol** means 👉 *rules & regulations* for communication

---

## 🔹 DNS (Domain Name System)

When you enter a URL in the browser:

1. The request first goes to the **DNS server**
2. DNS converts the **domain name** into an **IP address**

Example:
```

139.59.192.134:443

```

| Part | Meaning |
|----|----|
| `139.59.192.134` | IP Address |
| `443` | Port Number (HTTPS) |

Final resolved address:
```

[https://139.59.192.134:443](https://139.59.192.134:443)

```

---

## 🔹 Networking Basics

- **TCP** ⇒ Transmission Control Protocol  
- **IP** ⇒ Internet Protocol  

---

## 🔹 HTTP Request Methods

Common HTTP methods used in APIs:

- `GET`
- `POST`
- `PUT`
- `PATCH`
- `DELETE`

---

## 🔹 API

**API** ⇒ Application Programming Interface  
It allows different software systems to communicate with each other.

---

## 🔹 JavaScript Fundamentals

### JavaScript Nature
- JavaScript is a **Single-Threaded Language**

---

### JavaScript Engines

| Browser | Engine |
|----|----|
| Google Chrome | V8 Engine |
| Firefox | SpiderMonkey |
| Safari | JavaScriptCore |

---

## 🔹 Event-Driven Architecture

Flow:
```

Event Emitter → Event Listener → Callback Function

```

---

## 🔹 Event Loop

- **Event Loop** is the **heart of Node.js**
- It manages asynchronous operations

---

## 🔹 Global Functions in JavaScript

Some important global APIs:

- `setTimeout()`
- `clearTimeout()`
- `setInterval()`
- `clearInterval()`
- `fetch()`

---

## 🔹 IIFE

**IIFE** ⇒ Immediately Invoked Function Expression  
A function that runs **immediately after it is defined**.

---

## 🔹 CDN

**CDN** ⇒ Content Delivery Network  
Used to deliver static assets faster from the nearest server.

---

## 🔹 How to Import and Export (JavaScript Modules)

### CommonJS Example
📄 **file1.js**  
🔗 https://github.com/mahbubhossen/Next-Level-Bootcamp/blob/main/Mission%203/Module%209/file1.js

---

### ES Module Example
📄 **file_es1.js**  
🔗 https://github.com/mahbubhossen/Next-Level-Bootcamp/blob/main/Mission%203/Module%209/file_es1.js

---
