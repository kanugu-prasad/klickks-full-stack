# React.js & Node.js Login/Logout Flow (SQLite)

A complete authentication system built with React.js frontend and Node.js backend, featuring user registration, login, session management, and a protected dashboard.

## 🚀 Features

- **User Registration** - Create account with email & password
- **Secure Login** - Authenticate with registered credentials
- **Session Management** - Stay logged in with secure cookies
- **Protected Routes** - Dashboard only accessible when authenticated
- **Password Security** - bcrypt hashing for password protection
- **SQLite Database** - Lightweight, file-based database
- **Modern UI** - Beautiful, responsive design with gradient backgrounds
- **Error Handling** - Comprehensive error messages and validation

## 🛠 Tech Stack

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **SQLite3** - Database
- **bcrypt** - Password hashing
- **express-session** - Session management
- **cookie-parser** - Cookie handling
- **cors** - Cross-origin resource sharing

### Frontend
- **React.js** - UI library
- **Axios** - HTTP client
- **CSS3** - Styling with modern features

## 📂 Project Structure

```
klickks-assignemt/
├── backend/
│   ├── server.js          # Main server file
│   ├── db.js             # Database configuration
│   ├── package.json      # Backend dependencies
│   └── routes/
│       └── auth.js       # Authentication routes
├── frontend/
│   ├── src/
│   │   ├── App.js        # Main React component
│   │   ├── App.css       # Global styles
│   │   └── components/
│   │       ├── Login.js      # Login component
│   │       ├── Register.js   # Registration component
│   │       └── Dashboard.js  # Protected dashboard
│   └── package.json      # Frontend dependencies
└── README.md
```

## 🚀 Setup & Installation

### Prerequisites
- Node.js (v14 or higher)
- npm (comes with Node.js)

### 1. Clone the Repository
```bash
git clone <your-repo-url>
cd klickks-assignemt
```

### 2. Backend Setup
```bash
cd backend
npm install
node server.js
```

The backend server will start on `http://localhost:5000`

### 3. Frontend Setup
Open a new terminal window:
```bash
cd frontend
npm install
npm start
```

The React app will start on `http://localhost:3000`

## 🗄️ Database

The SQLite database (`users.db`) is created automatically when you first run the backend server. It includes:

- **users table** with columns:
  - `id` (Primary Key)
  - `email` (Unique)
  - `password` (Hashed with bcrypt)
  - `created_at` (Timestamp)

## 🔐 API Endpoints

### Authentication Routes (`/api/auth`)

| Method | Endpoint | Description | Body |
|--------|----------|-------------|------|
| POST | `/register` | Register new user | `{email, password}` |
| POST | `/login` | Login user | `{email, password}` |
| POST | `/logout` | Logout user | - |
| GET | `/me` | Check auth status | - |

### Example API Usage

```javascript
// Register
const response = await fetch('http://localhost:5000/api/auth/register', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ email: 'user@example.com', password: 'password123' })
});

// Login
const response = await fetch('http://localhost:5000/api/auth/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  credentials: 'include',
  body: JSON.stringify({ email: 'user@example.com', password: 'password123' })
});
```

## 🎨 UI Features

- **Responsive Design** - Works on desktop, tablet, and mobile
- **Modern Gradient Backgrounds** - Beautiful purple-blue gradients
- **Smooth Animations** - Hover effects and transitions
- **Form Validation** - Client-side and server-side validation
- **Error Handling** - Clear error messages for users
- **Loading States** - Visual feedback during API calls

## 🔒 Security Features

- **Password Hashing** - bcrypt with salt rounds
- **Session Management** - Secure cookie-based sessions
- **CORS Protection** - Configured for specific origins
- **Input Validation** - Server-side validation for all inputs
- **SQL Injection Protection** - Parameterized queries

## 🚀 Deployment

### Backend Deployment (Render/Heroku)
1. Create a new web service
2. Connect your GitHub repository
3. Set build command: `cd backend && npm install`
4. Set start command: `cd backend && node server.js`
5. Add environment variables if needed

### Frontend Deployment (Vercel/Netlify)
1. Connect your GitHub repository
2. Set build command: `cd frontend && npm run build`
3. Set publish directory: `frontend/build`
4. Update API URLs in components to point to your deployed backend

### Environment Variables
For production, consider setting:
- `NODE_ENV=production`
- `SESSION_SECRET` (strong random string)
- `PORT` (if not using default)

## 🧪 Testing the Application

1. **Start both servers** (backend on :5000, frontend on :3000)
2. **Register a new user** with email and password
3. **Login** with the registered credentials
4. **Access the dashboard** (protected route)
5. **Logout** and verify you're redirected to login

## 📱 Screenshots

The application features:
- Clean login/register forms with validation
- Beautiful gradient backgrounds
- Responsive design for all devices
- Secure dashboard with user information
- Smooth animations and transitions

## 🛠 Development

### Adding New Features
1. Backend: Add routes in `backend/routes/auth.js`
2. Frontend: Create components in `frontend/src/components/`
3. Update `App.js` to include new routes

### Database Modifications
Edit `backend/db.js` to add new tables or modify existing ones.

## 📝 License

This project is created for the Klickks assignment and is for educational purposes.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For questions or issues, please create an issue in the GitHub repository.

---

**Happy Coding! 🚀**
