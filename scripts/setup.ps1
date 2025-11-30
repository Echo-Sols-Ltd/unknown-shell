# PowerShell setup script for Windows

Write-Host "🚀 Setting up Unknown Shell..." -ForegroundColor Cyan

# Check Node.js version
$nodeVersion = (node -v).Substring(1).Split('.')[0]
if ([int]$nodeVersion -lt 20) {
    Write-Host "❌ Node.js 20 or higher is required" -ForegroundColor Red
    exit 1
}

# Install dependencies
Write-Host "📦 Installing dependencies..." -ForegroundColor Yellow
npm install

# Create .env file if it doesn't exist
if (-not (Test-Path .env.local)) {
    Write-Host "📝 Creating .env.local file..." -ForegroundColor Yellow
    Copy-Item .env.example .env.local
    Write-Host "⚠️  Please update .env.local with your configuration" -ForegroundColor Yellow
}

Write-Host ""
Write-Host "✅ Setup complete!" -ForegroundColor Green
Write-Host ""
Write-Host "Next steps:"
Write-Host "1. Update .env.local with your configuration"
Write-Host "2. Start MongoDB (if using local)"
Write-Host "3. Run 'npm run dev' to start the frontend"
Write-Host "4. Run 'npm run server:dev' to start the backend"
Write-Host ""
Write-Host "🇷🇼 Built for Rwanda!" -ForegroundColor Cyan

