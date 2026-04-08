# 🎓 CS Desk – Online Teaching Platform

A full-stack online teaching web application built using **Node.js, Express, MongoDB, and React**.
This platform allows students to watch video lectures, access PDF notes, and learn efficiently — similar to platforms like Physics Wallah.

---

## 🚀 Features

### 👨‍🎓 Student Features

* 📚 View all courses
* 🎥 Watch video lectures (embedded YouTube player)
* 📄 View/Download PDF notes
* 📱 Fully mobile responsive
* 🎬 Fullscreen video mode

### 👨‍🏫 Admin Features

* 🔐 Secure login system (JWT + Cookies)
* 📤 Upload courses (title, description, video, PDF)
* 🛡️ Role-based access (Admin only upload)

---

## 🛠️ Tech Stack

### 🔹 Frontend

* React.js
* Axios
* React Router
* Raw CSS (Custom UI)

### 🔹 Backend

* Node.js
* Express.js
* MongoDB (Mongoose)
* JWT Authentication
* Multer (File Upload)

---

## 📁 Project Structure

cs-desk/
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── middleware/
│   └── server.js
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
└── README.md

---

## ⚙️ Installation & Setup

### 🔹 1. Clone Repository

git clone https://github.com/Padmalochan-812/online-teaching-app-CS-DESK.git
cd cs-desk

---

### 🔹 2. Backend Setup

cd backend
npm install

Create `.env` file:

PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key

Run backend:

npm start

---

### 🔹 3. Frontend Setup

cd frontend
npm install
npm start

---

## 🌐 API Endpoints

### 🔐 Auth Routes

* POST /api/auth/register
* POST /api/auth/login
* POST /api/auth/logout

### 📚 Course Routes

* GET /api/course → Get all courses
* POST /api/course/add → Add course (Admin only)

---

## 🎬 Screenshots

(Add your project screenshots here)

---

## 🔐 Authentication

* JWT-based authentication
* Token stored in cookies
* Protected routes using middleware

---

## 📦 Future Improvements

* 💰 Payment integration (Razorpay)
* ⏱️ Watch progress tracking
* 📚 Course playlist system
* 📱 Convert to Android App
* 🌍 Deployment (Vercel + Render)

---

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first.

---

## 📧 Contact

Created by **CS Desk**
For any queries or collaboration.

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!
