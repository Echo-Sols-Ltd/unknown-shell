# Vercel Deployment Guide

## Quick Deploy to Vercel

Your repository now has 1000 professional commits and is ready for deployment!

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Go to Vercel Dashboard**
   - Visit: https://vercel.com/leandre000s-projects
   - Or go to: https://vercel.com/new

2. **Import Repository**
   - Click "Add New..." → "Project"
   - Select "Import Git Repository"
   - Choose `Echo-Sols-Ltd/unknown-shell` or paste: `https://github.com/Echo-Sols-Ltd/unknown-shell`

3. **Configure Project**
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `./` (default)
   - **Build Command**: `npm run build` (default)
   - **Output Directory**: `.next` (default)

4. **Environment Variables**
   Add these in Vercel dashboard:
   ```
   MONGODB_URI=your-mongodb-connection-string
   JWT_SECRET=your-secret-key-min-32-characters
   API_URL=https://your-api-url.vercel.app
   NODE_ENV=production
   ```

5. **Deploy**
   - Click "Deploy"
   - Wait for build to complete
   - Your app will be live at: `https://unknown-shell.vercel.app`

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
cd "C:\Users\Shema Leandre\Documents\GITHUB\shell"
vercel

# Follow prompts:
# - Set up and deploy? Yes
# - Which scope? leandre000s-projects
# - Link to existing project? No (first time) or Yes (if exists)
# - Project name: unknown-shell
# - Directory: ./
# - Override settings? No
```

### Option 3: Automatic Deployments

Once connected to GitHub, Vercel will automatically deploy:
- Every push to `main` branch → Production
- Every pull request → Preview deployment

## Post-Deployment

1. **Update API URLs**
   - Update `API_URL` in environment variables to point to your backend
   - Or deploy backend separately (Railway, Render, etc.)

2. **Set up MongoDB**
   - Use MongoDB Atlas (free tier available)
   - Get connection string
   - Add to Vercel environment variables

3. **Custom Domain (Optional)**
   - Go to Project Settings → Domains
   - Add your custom domain
   - Configure DNS records

## Troubleshooting

### Build Fails
- Check build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Verify Node.js version (should be 20+)

### Environment Variables Not Working
- Redeploy after adding variables
- Check variable names match exactly
- Restart deployment

### API Connection Issues
- Verify `API_URL` is correct
- Check CORS settings on backend
- Ensure backend is deployed and accessible

## Next Steps

1. Push to GitHub (if not already):
   ```bash
   git push -u origin main
   ```

2. Deploy to Vercel using one of the methods above

3. Deploy backend separately:
   - Railway: https://railway.app
   - Render: https://render.com
   - Or use Vercel Serverless Functions

4. Test the deployment:
   - Visit your Vercel URL
   - Test authentication
   - Test terminal functionality
   - Check dashboard

## Support

If you encounter issues:
- Check Vercel documentation: https://vercel.com/docs
- Review build logs in Vercel dashboard
- Check GitHub Actions (if configured)

---

**Your app is ready with 1000 professional commits! 🚀**

