# Deployment Guide

This guide covers deploying Unknown Shell to various platforms.

## Prerequisites

- Node.js 20+
- MongoDB database (local or Atlas)
- Environment variables configured

## Environment Variables

Create a `.env` file with:

```env
MONGODB_URI=your-mongodb-connection-string
JWT_SECRET=your-secret-key-min-32-characters
API_URL=your-api-url
NODE_ENV=production
```

## Vercel Deployment (Frontend)

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts
4. Set environment variables in Vercel dashboard

## Railway Deployment (Backend)

1. Create a new project on Railway
2. Connect your GitHub repository
3. Add MongoDB service
4. Set environment variables
5. Deploy!

## Docker Deployment

### Build and Run

```bash
docker-compose up -d
```

### Update

```bash
docker-compose pull
docker-compose up -d
```

## MongoDB Atlas Setup

1. Create account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free cluster
3. Create database user
4. Whitelist IP addresses (0.0.0.0/0 for development)
5. Get connection string
6. Update `MONGODB_URI` in environment variables

## Production Checklist

- [ ] Change JWT_SECRET to a strong random string
- [ ] Set NODE_ENV=production
- [ ] Configure CORS properly
- [ ] Set up SSL/TLS certificates
- [ ] Configure rate limiting
- [ ] Set up monitoring and logging
- [ ] Backup database regularly
- [ ] Set up CI/CD pipeline

## Monitoring

Consider setting up:
- Application monitoring (Sentry, LogRocket)
- Uptime monitoring (UptimeRobot, Pingdom)
- Error tracking
- Performance monitoring

