# TaskFlow

TaskFlow is a Trello-inspired Kanban board built with Next.js 14 and TypeScript.
It allows you to manage projects in real time with boards, lists and cards.

## Features

- **User authentication** using NextAuth with OAuth and email/password
- **Boards** to organise tasks with custom backgrounds
- **Lists and cards** with drag and drop support
- **Real-time updates** via Socket.io
- **Comments and activity log** on each card

## Installation

1. Clone the repository
2. Copy `.env.example` to `.env` and adjust the values
3. Start PostgreSQL using `docker-compose up -d`
4. Install dependencies:
   ```bash
   npm install
   ```
5. Run database migrations:
   ```bash
   npx prisma migrate dev --name init
   ```
6. Start the development server:
   ```bash
   npm run dev
   ```

The app will be available at `http://localhost:3000`.
