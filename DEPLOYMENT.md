# 🚀 Deployment Guide

## Quick Deploy Options

### Option 1: Vercel + Render (Recommended)

#### Frontend (Vercel)
1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub
   - Click "New Project"
   - Import your repository
   - Vercel auto-detects React app
   - Click "Deploy"

#### Backend (Render)
1. **Deploy to Render**:
   - Go to [render.com](https://render.com)
   - Sign up with GitHub
   - Click "New Web Service"
   - Connect your repository
   - Configure:
     - **Build Command**: `cd backend && npm install`
     - **Start Command**: `cd backend && node server.js`
     - **Environment**: Node
   - Click "Create Web Service"

2. **Update Frontend API URL**:
   - Get your Render backend URL (e.g., `https://your-app.onrender.com`)
   - Update all API calls in frontend components to use this URL
   - Redeploy frontend

### Option 2: Netlify + Railway

#### Frontend (Netlify)
1. **Deploy to Netlify**:
   - Go to [netlify.com](https://netlify.com)
   - Connect GitHub repository
   - Build settings:
     - **Build command**: `cd frontend && npm run build`
     - **Publish directory**: `frontend/build`
   - Click "Deploy site"

#### Backend (Railway)
1. **Deploy to Railway**:
   - Go to [railway.app](https://railway.app)
   - Connect GitHub repository
   - Select backend folder
   - Railway auto-detects Node.js
   - Deploy

### Option 3: Heroku (Both)

1. **Install Heroku CLI**:
   ```bash
   # Download from https://devcenter.heroku.com/articles/heroku-cli
   ```

2. **Deploy**:
   ```bash
   # Login to Heroku
   heroku login
   
   # Create app
   heroku create your-app-name
   
   # Deploy
   git push heroku main
   ```

## 🔧 Environment Variables

For production, set these environment variables:

### Backend
- `NODE_ENV=production`
- `SESSION_SECRET=your-super-secret-key-here`
- `PORT=5000` (or let platform assign)

### Frontend
- `REACT_APP_API_URL=https://your-backend-url.com`

## 📝 Post-Deployment Steps

1. **Test the deployed application**
2. **Update CORS settings** in backend if needed
3. **Set up custom domain** (optional)
4. **Configure SSL** (usually automatic)
5. **Monitor logs** for any issues

## 🐛 Troubleshooting

### Common Issues:
- **CORS errors**: Update CORS origin in backend
- **API not found**: Check API URL in frontend
- **Database issues**: Ensure SQLite file is included in deployment
- **Build failures**: Check Node.js version compatibility

### Debug Commands:
```bash
# Check backend logs
heroku logs --tail

# Check if backend is running
curl https://your-backend-url.com/api/health

# Test frontend locally with production backend
REACT_APP_API_URL=https://your-backend-url.com npm start
```

## 🎯 Production Checklist

- [ ] Backend deployed and accessible
- [ ] Frontend deployed and accessible
- [ ] API URLs updated in frontend
- [ ] CORS configured correctly
- [ ] Environment variables set
- [ ] SSL certificates working
- [ ] Database accessible
- [ ] All features tested
- [ ] Performance optimized
- [ ] Error monitoring set up

## 📊 Monitoring

Consider setting up:
- **Uptime monitoring** (UptimeRobot, Pingdom)
- **Error tracking** (Sentry, LogRocket)
- **Analytics** (Google Analytics, Mixpanel)
- **Performance monitoring** (New Relic, DataDog)

---

**Happy Deploying! 🚀**
