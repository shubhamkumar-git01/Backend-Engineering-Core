<div align="center">
  <h1>⚙️ Backend Engineering Core</h1>
  <p><b>Volume 3 of the Complete Full Stack Engineering Syllabus</b></p>

  <!-- Badges -->
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express&logoColor=white" alt="Express" />
  <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
  <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL" />
  <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" alt="Python" />
  <img src="https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white" alt="PHP" />
  <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker" />
</div>

<br />

## 📖 Introduction & Philosophy

Welcome to the **Final Volume**. Building a robust backend requires a completely different mindset than building a frontend. This repository represents the **complete Backend & System Design portion of a B.Tech Full Stack Syllabus**. 

It goes far beyond a single language. It covers modern MERN stacks, traditional polyglot environments (PHP, Python/Django), and senior-level architectural design (Docker, Microservices), making it the ultimate reference for server-side engineering.

---

## 🗺️ Complete Syllabus & Roadmap

This table outlines the exhaustive curriculum designed to mold a complete Backend Architect.

| Module No. | Core Subject Area | Key Concepts Covered (Deep Dive) | Status |
|:---:|:---|:---|:---:|
| **01** | **Node.js Core Fundamentals** | `fs`, `http`, Streams, Buffers, Event Emitters, CommonJS vs ES6 | ✅ |
| **02** | **Express.js Architecture** | Middlewares, Req/Res objects, MVC Pattern, Global Error Handling | ✅ |
| **03** | **REST API Design** | CRUD Operations, HTTP Status Codes, Pagination, Filtering | ✅ |
| **04** | **MongoDB & Mongoose (NoSQL)** | Schemas, Models, Data Modeling, Aggregation Pipeline | ✅ |
| **05** | **PostgreSQL & Prisma (SQL)** | Primary/Foreign Keys, Prisma ORM, Table Relationships (Joins) | ✅ |
| **06** | **Authentication & Security** | JWT, Bcrypt, HttpOnly Cookies, CORS, Rate Limiting, Helmet.js | ✅ |
| **07** | **Advanced Backend Concepts** | File Uploads (Multer), WebSockets (Socket.io), Redis Caching | ✅ |
| **08** | **Ecosystem Projects** | Task Management API, Real-time Chat Server Architecture | ✅ |
| **09** | **PHP & MySQL Architecture** | Superglobals, PDO Queries, XSS Prevention, Custom PHP MVC | ✅ |
| **10** | **Python & Django Fullstack** | Django MTV Architecture, Django ORM, Django REST Framework (DRF) | ✅ |
| **11** | **System Design & DevOps** | Load Balancing, Microservices vs Monolith, Docker Containerization | ✅ |

---

## 🔍 Module Deep-Dive & Short Notes

### 🟢 Module 01-08: The Modern JS Backend (MERN)
> *High-performance, non-blocking I/O architectures.*
- **Streams & Buffers:** Handling massive files (like video streaming) piece by piece instead of crashing the server RAM.
- **Security:** Never storing passwords in plain text (`bcrypt`). Never storing JWTs in LocalStorage (vulnerable to XSS); always use **HttpOnly Secure Cookies**.
- **Data Modeling:** Knowing when to embed data (NoSQL) vs when to reference it across normalized tables (SQL/Prisma).

### 🐘 Module 09: Traditional PHP Foundation
> *How the web originally worked.*
- **Superglobals:** Direct access to `$_SESSION` and `$_POST` variables for form processing.
- **PDO:** The secure, modern way to interact with MySQL databases, completely preventing SQL Injection via Prepared Statements.

### 🐍 Module 10: Python & Django 
> *The "Batteries-Included" Framework.*
- **Django ORM:** Abstracts SQL away. You write Python classes, and Django generates the database tables and relationships.
- **REST Framework:** Rapidly building secure JSON APIs with built-in serialization and authentication routing.

### 🏗️ Module 11: System Design Architecture
> *Bridging the gap to Senior Engineering.*
- **Horizontal Scaling:** Adding more servers and using a **Load Balancer** to distribute traffic (Round Robin / Least Connections).
- **Containerization:** Using **Docker** to package an application and its dependencies into a single image, ensuring it runs exactly the same on any machine.

---

## 🚀 Projects Included

| Project Name | Tech Stack | Purpose |
|:---|:---|:---|
| **Task Management API** | Node, Express, MongoDB, JWT | Robust Authentication & CRUD |
| **Real-time Chat Server** | Node, Socket.io, Redis | Bidirectional WebSockets & In-Memory Caching |

---

## 🔗 Repository Ecosystem

This completes the 3-part Full Stack Masterclass series:
- ⬅️ **[Volume 1: Frontend Foundations](https://github.com/shubhamkumar-git01/Frontend-Foundations)**
- ⬅️ **[Volume 2: Modern Frontend Ecosystem](https://github.com/shubhamkumar-git01/Modern-Frontend-Ecosystem)**

<br />

<div align="center">
  <i>Architected and coded by <b>Shubham Kumar</b> | Always learning, always building.</i>
</div>
