# Topic: Horizontal vs Vertical Scaling & Load Balancing
# Notes: Crucial for Senior/Architect level interviews.

## 1. Vertical Scaling (Scaling Up)
- Upgrading the server hardware (More RAM, better CPU).
- Pros: Simple, no code changes needed.
- Cons: Expensive, has a hard physical limit, single point of failure.

## 2. Horizontal Scaling (Scaling Out)
- Adding MORE servers to the network to distribute the load.
- Pros: Infinite scaling, fault-tolerant (if one server dies, others take over).
- Cons: Complex architecture, requires Load Balancers and distributed state.

## 3. Load Balancer (e.g., NGINX, AWS ALB)
- Sits in front of your horizontally scaled servers.
- Distributes incoming client traffic across multiple servers using algorithms like:
  - Round Robin (Sequential)
  - Least Connections (Sends to least busy server)
  - IP Hash (Sticky sessions)

## 4. Stateless Architecture
- To scale horizontally, your servers MUST be stateless.
- Never store session data in server RAM. Use Redis or JWTs instead.
