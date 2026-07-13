# Backend Engineering Core

Welcome to **Volume 3**, the final pillar of my Full Stack Web Development journey. After mastering the Frontend ([Volume 1](https://github.com/shubhamkumar-git01/Frontend-Foundations)) and the Modern React Ecosystem ([Volume 2](https://github.com/shubhamkumar-git01/Modern-Frontend-Ecosystem)), this repository is dedicated entirely to the server-side architecture.

## Introduction

Building a robust backend requires a completely different mindset than building a frontend. It's no longer just about user interfaces and state management; it's about system design, security, database optimization, and handling thousands of requests concurrently.

In this repository, I didn't rely on magic frameworks out of the box. I started from the absolute basics of Node.js core modules (`fs`, `streams`, `http`) before moving to Express.js. I deep-dived into both **NoSQL (MongoDB)** and **Relational Databases (PostgreSQL)** to understand when to use which.

This is a structured, deeply-nested record of my daily practice, covering APIs, Authentication, WebSockets, and Caching.

---

## 📂 Repository Structure

The practice files are organized into 8 highly focused modules. Every folder isolates a specific backend concept with working, documented code.

### [01-NodeJS-Fundamentals](./01-NodeJS-Fundamentals)
Understanding what happens under the hood before using Express.
- **CommonJS vs ES6 Modules:** How Node shares code.
- **FS & Path Modules:** Manipulating the file system non-blockingly.
- **Streams & Buffers:** Processing massive files without crashing the RAM.
- **Vanilla HTTP Server:** Building a basic routing server from scratch.

### [02-ExpressJS-Architecture](./02-ExpressJS-Architecture)
Building robust and scalable web servers.
- **Basic Routing & Middleware:** The core of the Express request-response cycle.
- **Req/Res Objects:** Handling query params, URL params, and body payloads.
- **MVC Pattern:** Properly structuring Controllers, Routes, and Models.
- **Global Error Handling:** Catching asynchronous errors elegantly.

### [03-REST-API-Design](./03-REST-API-Design)
Standardizing communication between client and server.
- **CRUD Operations:** Mapping HTTP verbs to actions.
- **Status Codes & JSend:** Returning consistent, predictable JSON responses.
- **Advanced Querying:** Implementing Pagination, Filtering, and Sorting logic.

### [04-MongoDB-Mongoose-NoSQL](./04-MongoDB-Mongoose-NoSQL)
Working with highly flexible, document-based data.
- **Schemas & Models:** Enforcing structure with Mongoose.
- **Data Modeling:** Knowing when to Embed vs when to Reference documents.
- **Aggregation Pipeline:** Utilizing MongoDB's powerful data processing framework.

### [05-SQL-Postgres-Prisma](./05-SQL-Postgres-Prisma)
Working with strict, relational data using modern ORMs.
- **Relational DB Basics:** Primary Keys, Foreign Keys, and Table Design.
- **Prisma Schema & Migrations:** Type-safe database access.
- **Relationships:** Handling 1:1, 1:N, and N:M relationships effortlessly.

### [06-Authentication-Security](./06-Authentication-Security)
Locking down the server against attacks.
- **Bcrypt Hashing:** Securing passwords at rest.
- **JWT Authentication:** Implementing stateless user sessions.
- **HttpOnly Cookies:** Protecting tokens from Cross-Site Scripting (XSS).
- **Web Security:** Rate Limiting, Helmet.js, and CORS configuration.

### [07-Advanced-Backend-Concepts](./07-Advanced-Backend-Concepts)
Scaling up and handling complex features.
- **Multer:** Handling multipart/form-data for file and image uploads.
- **Socket.io:** Real-time, bidirectional WebSocket communication.
- **Redis Caching:** Storing frequent data in-memory to reduce database load.

### [08-Backend-Ecosystem-Projects](./08-Backend-Ecosystem-Projects)
Real-world architectures bringing all concepts together.
1. **Task Management API:** Full CRUD with JWT Auth and MongoDB.
2. **Real-time Chat Server:** Built with Express, Socket.io, and Redis.

### [09-PHP-MySQL-Architecture](./09-PHP-MySQL-Architecture)
The traditional web foundation. Understanding how the web worked before Node.js.
- **PHP Basics:** Strict typing, arrays, and core syntax.
- **Superglobals:** Managing `$_GET`, `$_POST`, and Sessions safely.
- **MySQL & PDO:** Connecting to relational databases securely using Prepared Statements.
- **Raw MVC:** Building a custom Model-View-Controller framework from scratch.

### [10-Python-Django-Fullstack](./10-Python-Django-Fullstack)
A robust, "batteries-included" polyglot backend approach.
- **Python Web Basics:** Refresher on Python syntax, OOP, and data structures.
- **Django MTV:** Understanding Django's Model-Template-View architecture.
- **Django ORM:** Managing database schemas without writing raw SQL.
- **Django REST Framework (DRF):** Rapidly building robust JSON APIs.

### [11-System-Design-Architecture](./11-System-Design-Architecture)
Bridging the gap between junior and senior engineering.
- **Load Balancing:** Horizontal vs Vertical scaling strategies.
- **Microservices:** Decoupling massive monoliths into domain-driven services.
- **Docker:** Containerizing applications to eliminate the "works on my machine" problem.

---

## 📚 Learning Resources

The resources that fundamentally shifted how I think about the backend:

- **[Node.js Official Documentation](https://nodejs.org/en/docs/)**: The ultimate source of truth for core modules.
- **[Express.js Guide](https://expressjs.com/)**: For understanding routing and middleware concepts.
- **[Prisma Documentation](https://www.prisma.io/docs)**: The cleanest ORM documentation available today.
- **[MongoDB University](https://learn.mongodb.com/)**: For mastering the Aggregation Pipeline and schema design.

---
*Architected and coded by **Shubham Kumar***  
*Always learning, always building.*
