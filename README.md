# TodoList
📝 Full Stack To-Do List App (Angular + Node.js + MongoDB)

A simple and efficient To-Do List web application built using Angular (frontend) and Node.js/Express with MongoDB (backend). Users can add, view, edit, and delete their tasks with data persisted to a MongoDB database.

🌐 Live Stack Overview:
Layer	Technology
Frontend	Angular, Bootstrap, Axios
Backend	Node.js, Express.js
Database	MongoDB (via Mongoose)
📦 Features:

✅ Add tasks

📋 View all tasks

📝 Edit task details

❌ Delete completed/unwanted tasks

💾 Data is saved to MongoDB

📱 Responsive UI using Bootstrap

🔁 Dynamic routing & data binding with Angular

🗂️ Project Structure:
/ToDoListApp
├── frontend/               # Angular App
│   ├── src/
│   │   ├── app/
│   │   │   ├── add-task/
│   │   │   ├── delete-task/
│   │   │   ├── edit-task/
│   │   │   ├── tasks/
│   │   │   ├── app-routing.module.ts
│   │   │   └── app.module.ts
│   │   └── index.html
│   └── angular.json
│
├── backend/                # Node + Express API
│   ├── index.js            # Main server file
│   ├── model.js            # Mongoose model
│   └── package.json

⚙️ Getting Started
Prerequisites:

Node.js (v14+ recommended)

Angular CLI (npm install -g @angular/cli)

MongoDB Atlas or local MongoDB

🧩 Backend Setup (Node.js + MongoDB):
1. Navigate to the backend folder:
cd backend

2. Install dependencies:
npm install

3. Start the backend server:
node index.js


✅ Server will start at http://localhost:5000
✅ Connected to MongoDB Atlas (update URI if needed in index.js)

🧩 Frontend Setup (Angular):
1. Navigate to the frontend folder:
cd frontend

2. Install Angular project dependencies:
npm install

3. Run the Angular development server:
ng serve


✅ Frontend will run at http://localhost:4200

🔗 API Endpoints (Backend)
Method	Endpoint	Description:
GET	/tasks	Fetch all tasks
POST	/add-task	Add a new task
POST	/edit	Get task by ID (for edit)
PUT	/update	Update a task
DELETE	/delete	Delete a task
🧠 MongoDB Model (Task)
{
  _id: ObjectId,
  Work: String
}

🛡️ CORS & Middleware

Backend uses cors to allow requests from Angular frontend.

JSON parsing is enabled using express.json().

🎨 UI Overview

Uses Bootstrap 5 for styling.

Navigation bar for Add Tasks and View Tasks.

Alerts for success actions (task added, updated, deleted).

Form inputs for editing and adding tasks.

❗ Notes

MongoDB URI is currently hardcoded in index.js.
🔐 For production, use .env to store sensitive config.
