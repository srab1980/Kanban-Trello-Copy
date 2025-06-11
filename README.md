# TaskFlow

TaskFlow is a Trello-inspired Kanban board built with **Next.js 14** and **TypeScript**.
It lets you collaborate on projects using boards, lists and cards while updates are
synced in real time via WebSockets.

## Features

- **User authentication** using NextAuth with OAuth and email/password
- **Boards** to organise tasks with custom backgrounds
- **Lists and cards** with drag and drop support
- **Real-time updates** via Socket.io
- **Comments and activity log** on each card
- **Invite teammates** to collaborate on boards
- **OAuth sign-in** with Google and GitHub

## Installation

1. Clone the repository
2. Copy `.env.example` to `.env` and fill in your OAuth credentials and database URL
3. Start PostgreSQL using `docker-compose up -d`
4. Install dependencies:
   ```bash
   npm install
   ```
   If you encounter TypeScript errors about missing Node types, verify that
   dev dependencies were installed correctly.
5. Run database migrations:
   ```bash
   npx prisma migrate dev --name init
   ```
6. Generate the Prisma client:
   ```bash
   npx prisma generate
   ```
7. Start the development server:
   ```bash
   npm run dev
   ```

The app will be available at `http://localhost:3000`.
