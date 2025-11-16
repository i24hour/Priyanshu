# 🚀 Deployment Guide

## Quick Deploy Options

### Option 1: Vercel (Recommended) ⚡

Vercel is the company behind Next.js and offers the best integration.

#### Steps:
1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Water-themed portfolio"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your GitHub repository
   - Vercel will auto-detect Next.js
   - Click "Deploy"
   - Done! Your site is live in ~2 minutes

#### Custom Domain (Optional)
1. Go to your project settings in Vercel
2. Click "Domains"
3. Add your custom domain
4. Update DNS records as instructed

**Deployment URL**: `your-project.vercel.app`

---

### Option 2: Netlify 🌐

#### Steps:
1. **Build the Project**
   ```bash
   npm run build
   ```

2. **Deploy via Netlify CLI**
   ```bash
   npm install -g netlify-cli
   netlify login
   netlify init
   netlify deploy --prod
   ```

3. **Or Deploy via Netlify UI**
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop your project folder
   - Or connect your GitHub repository

#### Build Settings:
- **Build command**: `npm run build`
- **Publish directory**: `.next`
- **Node version**: 18.x or higher

**Deployment URL**: `your-project.netlify.app`

---

### Option 3: GitHub Pages (Static Export) 📄

For static hosting on GitHub Pages:

1. **Update next.config.mjs**
   ```javascript
   const nextConfig = {
     output: 'export',
     images: {
       unoptimized: true,
     },
   };
   ```

2. **Build and Export**
   ```bash
   npm run build
   ```

3. **Deploy to GitHub Pages**
   ```bash
   # Install gh-pages
   npm install -D gh-pages
   
   # Add to package.json scripts:
   "deploy": "gh-pages -d out"
   
   # Deploy
   npm run deploy
   ```

**Deployment URL**: `username.github.io/repository-name`

---

### Option 4: Docker 🐳

#### Dockerfile
Create a `Dockerfile`:
```dockerfile
FROM node:18-alpine AS base

# Install dependencies
FROM base AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

# Build the app
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app
ENV NODE_ENV production

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000
ENV PORT 3000

CMD ["node", "server.js"]
```

#### Build and Run
```bash
# Build the image
docker build -t portfolio-water .

# Run the container
docker run -p 3000:3000 portfolio-water
```

---

### Option 5: AWS Amplify ☁️

1. **Install Amplify CLI**
   ```bash
   npm install -g @aws-amplify/cli
   amplify configure
   ```

2. **Initialize Amplify**
   ```bash
   amplify init
   amplify add hosting
   ```

3. **Deploy**
   ```bash
   amplify publish
   ```

---

### Option 6: Railway 🚂

1. Go to [railway.app](https://railway.app)
2. Click "New Project"
3. Select "Deploy from GitHub repo"
4. Choose your repository
5. Railway auto-detects Next.js
6. Click "Deploy"

**Deployment URL**: `your-project.railway.app`

---

## Environment Variables

If you add API keys or secrets, create a `.env.local` file:

```env
NEXT_PUBLIC_API_URL=your_api_url
EMAIL_SERVICE_API_KEY=your_key
```

### Add to Vercel:
1. Go to Project Settings
2. Click "Environment Variables"
3. Add your variables

### Add to Netlify:
1. Go to Site Settings
2. Click "Build & Deploy" → "Environment"
3. Add your variables

---

## Pre-Deployment Checklist ✅

Before deploying, make sure:

- [ ] All personal information is updated
- [ ] Contact form is connected (if using API)
- [ ] Images are optimized (WebP format)
- [ ] SEO metadata is customized
- [ ] Social media links are added
- [ ] Test on mobile, tablet, and desktop
- [ ] Run `npm run build` locally to check for errors
- [ ] Check Lighthouse score (aim for 90+)
- [ ] Remove any console.logs
- [ ] Update README with your info

---

## Performance Optimization

### 1. Image Optimization
```typescript
// Use Next.js Image component
import Image from 'next/image';

<Image
  src="/images/project.jpg"
  alt="Project"
  width={800}
  height={600}
  quality={85}
  loading="lazy"
/>
```

### 2. Font Optimization
Already configured in `app/layout.tsx` with system fonts for best performance.

### 3. Code Splitting
Next.js automatically code-splits. For manual control:
```typescript
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <p>Loading...</p>,
  ssr: false, // Disable server-side rendering if needed
});
```

### 4. Reduce Animation Complexity
For better mobile performance, reduce animations:
```typescript
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
```

---

## Custom Domain Setup

### For Vercel:
1. Add domain in Vercel dashboard
2. Update DNS records:
   ```
   Type: A
   Name: @
   Value: 76.76.21.21

   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

### For Netlify:
1. Add domain in Netlify dashboard
2. Update DNS records:
   ```
   Type: A
   Name: @
   Value: 75.2.60.5

   Type: CNAME
   Name: www
   Value: your-site.netlify.app
   ```

---

## SSL Certificate

All major platforms (Vercel, Netlify, Railway) provide **free SSL certificates** automatically via Let's Encrypt.

---

## Monitoring & Analytics

### Add Google Analytics
1. Create a GA4 property
2. Add to `app/layout.tsx`:
```typescript
import Script from 'next/script';

<Script
  src={`https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID`}
  strategy="afterInteractive"
/>
```

### Add Vercel Analytics
```bash
npm install @vercel/analytics
```

```typescript
// app/layout.tsx
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

---

## Continuous Deployment

### Auto-deploy on Git Push

**Vercel**: Automatically deploys on every push to `main` branch

**Netlify**: Automatically deploys on every push to `main` branch

**GitHub Actions**: Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      # Add your deployment steps here
```

---

## Troubleshooting Deployment

### Build Fails
```bash
# Check build locally first
npm run build

# Common fixes:
- Update Node version to 18+
- Clear cache: rm -rf .next node_modules
- Reinstall: npm install
```

### Environment Variables Not Working
- Ensure variables start with `NEXT_PUBLIC_` for client-side access
- Rebuild after adding new variables
- Check variable names (case-sensitive)

### Images Not Loading
- Use Next.js Image component
- Add domains to `next.config.mjs`
- Check image paths (use `/` for public folder)

### Slow Performance
- Enable compression
- Optimize images
- Reduce animation complexity
- Use lazy loading
- Check Lighthouse report

---

## Post-Deployment

### 1. Test Your Site
- [ ] Check all pages load correctly
- [ ] Test contact form
- [ ] Verify all links work
- [ ] Test on different devices
- [ ] Check loading speed

### 2. SEO Setup
- [ ] Submit sitemap to Google Search Console
- [ ] Add site to Google Analytics
- [ ] Create robots.txt
- [ ] Add meta descriptions
- [ ] Set up Open Graph images

### 3. Share Your Portfolio
- [ ] Add to LinkedIn
- [ ] Share on Twitter
- [ ] Add to portfolio directories
- [ ] Update resume with link

---

## Cost Comparison

| Platform | Free Tier | Paid Plans |
|----------|-----------|------------|
| Vercel | ✅ Unlimited (hobby) | $20/month (Pro) |
| Netlify | ✅ 100GB bandwidth | $19/month (Pro) |
| Railway | ✅ $5 credit/month | Pay as you go |
| GitHub Pages | ✅ Unlimited | Free |
| AWS Amplify | ❌ Pay as you go | ~$1-5/month |

**Recommendation**: Start with Vercel free tier - it's perfect for portfolios!

---

## Support

Need help deploying?
- [Vercel Docs](https://vercel.com/docs)
- [Netlify Docs](https://docs.netlify.com)
- [Next.js Deployment](https://nextjs.org/docs/deployment)

---

🎉 **Congratulations!** Your portfolio is now live and accessible to the world!

Share your creation and let it showcase your amazing work! ✨
