# Mark-do

> *"Mark it. Do it. Done."*

I'm Hemanathan 😁
I developed a full stack Kanban-style task management app built from scratch with React, Node.js, Express, and MongoDB.

![Mark-do](https://img.shields.io/badge/React-18-blue) ![Node](https://img.shields.io/badge/Node.js-18-green) ![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-brightgreen) ![JWT](https://img.shields.io/badge/Auth-JWT-orange)

---

## About

I built Mark-do because I wanted a clean, distraction-free way to track tasks without the bloat of tools like Jira or Trello. It's a simple Kanban board where you can create tasks, set priorities and due dates, and move them across columns as you make progress.

---

## Features

- JWT-based authentication (register, login, logout)
- Personal Kanban board — To Do, In Progress, Done
- Create tasks with title, description, priority, and due date
- Move tasks between columns instantly
- Priority badges (High / Medium / Low) with color coding
- Fully responsive — works on mobile and desktop
- Protected routes — each user only sees their own tasks

---

## Tech Stack

**Frontend** — React 18, React Router v6, Axios, Vite

**Backend** — Node.js, Express.js, MongoDB + Mongoose, JWT, bcryptjs

**Deployment** — Vercel (frontend), Render (backend), MongoDB Atlas (database)

---

## Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/Hemanathan1/mark-do.git
cd mark-do
```

### 2. Backend setup
```bash
cd backend
npm install
cp .env.example .env
# Fill in MONGO_URI and JWT_SECRET
npm run dev
```

### 3. Frontend setup
```bash
cd frontend
npm install
npm run dev
```

Open `http://localhost:5173`

---

## API Endpoints

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| POST | /api/auth/register | No | Create account |
| POST | /api/auth/login | No | Login, returns JWT |
| GET | /api/tasks | Yes | Get all your tasks |
| POST | /api/tasks | Yes | Create a task |
| PUT | /api/tasks/:id | Yes | Update a task |
| DELETE | /api/tasks/:id | Yes | Delete a task |

---

## What I learned

- How to design and build a REST API from scratch
- JWT authentication flow (signing, verifying, protecting routes)
- Password hashing with bcrypt
- React Context for global state management
- Custom hooks for clean separation of concerns
- Deploying a full stack app to production

---

## Live Demo

🔗 **[mark-do.vercel.app](https://mark-do.vercel.app)**

---

## Invented By

**Hemanathan** — [github.com/Hemanathan1](https://github.com/Hemanathan1)
