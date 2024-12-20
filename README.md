# SkyPods API

SkyPods API is the backend for the SkyPods project, enabling decentralized micro-communities on Bluesky. It uses **Express.js**, **TypeScript**, and **Postgres** to provide endpoints for managing users, communities (SkyPods), memberships, posts, and moderation.

> **🚧 This project is currently in development.**  
> Features and functionality are subject to change as the API evolves.

---

## Features

- **User Management**: Register and read users linked to ATProto accounts.
- **SkyPods**: Register and read topic-based communities.
- **Memberships**: Register and read roles (e.g., admin, moderator) and community memberships.
- **Posts**: Register and read posts within SkyPods.
- **Moderation Logs**: Track moderation actions for transparency and control.

---

## Prerequisites

Ensure you have the following installed:

- **Node.js** (v16+)
- **Docker** (for database setup)
- **npm** or **yarn**

---

## Setup Instructions

1. **Clone the Repository**
   ``` 
   git clone https://github.com/AceyAdapter/skypods-api.git
   cd skypods-api
2. **Compose Docker**
   ```
   docker-compose up
3. **Test Locally**
- Visit `localhost:8080`
- If it returns `SkyPods API is running!`, you're now running your own skypods instance

---

## Contributing
Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m "Add feature"`.
4. Push to your branch: `git push origin feature-name`.
5. Open a pull request.

---

## License

This project is licensed under the MIT License.
