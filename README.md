# Unknown Shell - Professional Shell SaaS Platform

A modern, powerful shell system with dashboard and insights built for Rwanda. This platform provides a comprehensive terminal interface with real-time analytics, session management, and advanced monitoring capabilities.

## 🚀 Features

- **Modern Terminal Interface**: Full-featured web-based terminal with xterm.js
- **Real-time Dashboard**: Comprehensive analytics and insights
- **Session Management**: Track and manage shell sessions
- **Command History**: Complete command execution history
- **System Metrics**: Real-time CPU, memory, disk, and network monitoring
- **User Authentication**: Secure JWT-based authentication
- **Responsive Design**: Beautiful, modern UI that works on all devices
- **Rwanda-focused**: Built specifically for the Rwandan market

## 🛠️ Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Modern utility-first CSS
- **xterm.js** - Terminal emulator
- **Recharts** - Data visualization
- **Framer Motion** - Smooth animations
- **React Hook Form** - Form management
- **Zod** - Schema validation

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **JWT** - Authentication
- **bcryptjs** - Password hashing
- **Socket.io** - Real-time communication

## 📦 Installation

### Prerequisites
- Node.js 20 or higher
- MongoDB (local or cloud)
- npm or yarn

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Echo-Sols-Ltd/unknown-shell.git
   cd unknown-shell
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   Create a `.env.local` file:
   ```env
   MONGODB_URI=mongodb://localhost:27017/unknown-shell
   JWT_SECRET=your-secret-key-change-in-production
   API_URL=http://localhost:3001
   NODE_ENV=development
   ```

4. **Start the development server**
   ```bash
   # Terminal 1: Start Next.js frontend
   npm run dev

   # Terminal 2: Start Express backend
   npm run server:dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🐳 Docker Deployment

### Using Docker Compose

```bash
docker-compose up -d
```

This will start:
- Frontend (Next.js) on port 3000
- Backend API on port 3001
- MongoDB on port 27017

### Using Docker

```bash
# Build the image
docker build -t unknown-shell .

# Run the container
docker run -p 3000:3000 \
  -e MONGODB_URI=mongodb://your-mongo-uri \
  -e JWT_SECRET=your-secret \
  unknown-shell
```

## 🌐 Deployment

### Vercel (Recommended for Frontend)

1. Push your code to GitHub
2. Import your repository in Vercel
3. Configure environment variables
4. Deploy!

### Railway / Render (Backend API)

1. Connect your GitHub repository
2. Set environment variables:
   - `MONGODB_URI`
   - `JWT_SECRET`
   - `PORT=3001`
3. Deploy!

### MongoDB Atlas (Database)

1. Create a free cluster on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Get your connection string
3. Update `MONGODB_URI` in your environment variables

## 📁 Project Structure

```
unknown-shell/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── auth/              # Authentication pages
│   ├── dashboard/         # Dashboard pages
│   └── layout.tsx         # Root layout
├── components/            # React components
│   ├── dashboard/         # Dashboard components
│   └── shell/             # Shell components
├── server/                # Express backend
│   ├── models/            # MongoDB models
│   ├── routes/            # API routes
│   └── middleware/        # Middleware
├── hooks/                 # React hooks
├── public/                # Static assets
└── package.json           # Dependencies
```

## 🔐 Security

- JWT-based authentication
- Password hashing with bcrypt
- Command whitelist for security
- Input validation and sanitization
- CORS protection
- Environment variable protection

## 📊 API Endpoints

### Authentication
- `POST /api/auth/signup` - Create new account
- `POST /api/auth/login` - Login
- `GET /api/auth/me` - Get current user

### Shell
- `POST /api/shell/execute` - Execute command
- `GET /api/shell/sessions` - Get sessions
- `GET /api/shell/history` - Get command history

### Analytics
- `GET /api/stats` - Get statistics
- `GET /api/insights/trends` - Get usage trends
- `GET /api/insights/top-commands` - Get top commands

## 🧪 Development

```bash
# Run frontend in development mode
npm run dev

# Run backend in development mode
npm run server:dev

# Build for production
npm run build

# Start production server
npm start
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is licensed under the MIT License.

## 🇷🇼 Built for Rwanda

This platform is specifically designed for the Rwandan market, with features and optimizations tailored for local needs.

## 📧 Support

For support, email support@echosols.com or open an issue in the repository.

---

Made with ❤️ by Echo Solutions Ltd.

