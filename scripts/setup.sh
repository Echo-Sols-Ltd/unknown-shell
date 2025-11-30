#!/bin/bash

echo "🚀 Setting up Unknown Shell..."

# Check Node.js version
node_version=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$node_version" -lt 20 ]; then
    echo "❌ Node.js 20 or higher is required"
    exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Create .env file if it doesn't exist
if [ ! -f .env.local ]; then
    echo "📝 Creating .env.local file..."
    cp .env.example .env.local
    echo "⚠️  Please update .env.local with your configuration"
fi

# Check MongoDB connection
echo "🔍 Checking MongoDB..."
if command -v mongod &> /dev/null; then
    echo "✅ MongoDB found locally"
else
    echo "⚠️  MongoDB not found locally. Please use MongoDB Atlas or install MongoDB."
fi

echo ""
echo "✅ Setup complete!"
echo ""
echo "Next steps:"
echo "1. Update .env.local with your configuration"
echo "2. Start MongoDB (if using local)"
echo "3. Run 'npm run dev' to start the frontend"
echo "4. Run 'npm run server:dev' to start the backend"
echo ""
echo "🇷🇼 Built for Rwanda!"

