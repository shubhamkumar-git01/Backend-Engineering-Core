# Topic: Monolithic vs Microservices Architecture

## Monolithic Architecture
- All application logic (Auth, Payments, Inventory) is bundled into a single codebase and deployed as a single unit.
- **Pros:** Easy to develop, test, and deploy initially. Simple to trace errors.
- **Cons:** Difficult to scale specific features, a bug in one module can crash the entire app, long deployment times for large apps.

## Microservices Architecture
- The application is broken down into small, independent services based on business domains (e.g., Auth Service, Payment Service).
- They communicate over network protocols (HTTP REST, gRPC, or message brokers like RabbitMQ/Kafka).
- **Pros:** Independent deployments, technology agnostic (Auth can be Node.js, Data processing can be Python), resilient.
- **Cons:** Complex infrastructure (requires Docker/Kubernetes), difficult to debug across services, network latency.
