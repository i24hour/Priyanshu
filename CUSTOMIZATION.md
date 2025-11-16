# Portfolio Customization Guide

## 🎨 Customizing Your Portfolio

### Personal Information

#### 1. Update Contact Information
Edit `components/Contact.tsx` (lines 28-44):
```typescript
const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    value: 'your-email@example.com',  // Change this
    link: 'mailto:your-email@example.com',  // Change this
  },
  {
    icon: Phone,
    title: 'Phone',
    value: '+1 (XXX) XXX-XXXX',  // Change this
    link: 'tel:+1XXXXXXXXXX',  // Change this
  },
  {
    icon: MapPin,
    title: 'Location',
    value: 'Your City, Country',  // Change this
    link: '#',
  },
];
```

#### 2. Update Hero Section
Edit `components/Hero.tsx` (lines 31-38):
```typescript
<h1>
  <span className="text-gradient">Your Name</span>  // Change this
</h1>

<p>
  Your tagline or description here  // Change this
</p>
```

#### 3. Update Projects
Edit `components/Projects.tsx` (lines 7-48) to add/modify your projects:
```typescript
const projects = [
  {
    id: 1,
    title: 'Your Project Name',
    description: 'Your project description',
    tags: ['Tech1', 'Tech2', 'Tech3'],
    gradient: 'from-cyan-500 to-blue-500',
  },
  // Add more projects...
];
```

#### 4. Update About Section
Edit `components/About.tsx` (lines 73-88) to update your bio and stats:
```typescript
<p className="text-gray-300 mb-4">
  Your personal bio here...
</p>

// Update stats (lines 93-135)
<div className="text-4xl font-bold text-gradient mb-2">5+</div>
<div className="text-gray-300">Years of Experience</div>
```

### 🎨 Color Customization

#### Water Theme Colors
Edit `tailwind.config.ts` to change the water color palette:
```typescript
colors: {
  water: {
    50: '#f0f9ff',   // Lightest
    100: '#e0f2fe',
    200: '#bae6fd',
    300: '#7dd3fc',
    400: '#38bdf8',
    500: '#0ea5e9',  // Main color
    600: '#0284c7',
    700: '#0369a1',
    800: '#075985',
    900: '#0c4a6e',  // Darkest
  },
},
```

#### Gradient Colors
Edit `app/globals.css` to change gradient colors:
```css
.text-gradient {
  background: linear-gradient(to right, #06b6d4, #3b82f6, #8b5cf6);
  /* Change these colors: cyan, blue, purple */
}
```

### 🌊 Animation Customization

#### Wave Animation Speed
Edit `components/WaveBackground.tsx` (line 23):
```typescript
transition={{
  repeat: Infinity,
  duration: 10,  // Change this (seconds)
  ease: "easeInOut",
}}
```

#### Water Droplets
Edit `components/WaterDroplets.tsx` (line 6):
```typescript
const droplets = Array.from({ length: 20 }, (_, i) => ({
  // Change 20 to adjust number of droplets
  ...
  duration: 3 + Math.random() * 4,  // Adjust fall speed
  size: 4 + Math.random() * 8,  // Adjust droplet size
}));
```

### 📱 Social Media Links

#### Update Social Links
Edit `components/Contact.tsx` (lines 189-202):
```typescript
{['LinkedIn', 'Twitter', 'GitHub', 'Dribbble'].map((social, index) => (
  <motion.a
    key={social}
    href="#"  // Add your social media URLs here
    ...
  >
```

#### Footer Social Links
Edit `components/Footer.tsx` to add social media links in the footer.

### 🖼️ Adding Images

#### Project Images
1. Create a `public/images` folder
2. Add your project images
3. Update `components/Projects.tsx`:
```typescript
const projects = [
  {
    id: 1,
    title: 'Project Name',
    image: '/images/project1.jpg',  // Add this
    ...
  },
];
```

4. Display the image in the project card:
```typescript
<img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-lg mb-4" />
```

### ⚡ Performance Optimization

#### 1. Reduce Animations on Mobile
Add this to your components:
```typescript
const isMobile = window.innerWidth < 768;
const animationDuration = isMobile ? 0.3 : 0.6;
```

#### 2. Lazy Load Components
```typescript
import dynamic from 'next/dynamic';

const Projects = dynamic(() => import('@/components/Projects'), {
  loading: () => <p>Loading...</p>,
});
```

### 🔧 SEO Optimization

#### Update Metadata
Edit `app/layout.tsx` (lines 4-16):
```typescript
export const metadata: Metadata = {
  title: "Your Name - Product Designer",
  description: "Your custom description",
  keywords: ["your", "keywords", "here"],
  authors: [{ name: "Your Name" }],
  ...
};
```

### 🎯 Adding New Sections

#### Create a New Section Component
1. Create `components/YourSection.tsx`
2. Follow the pattern of existing components
3. Import and add to `app/page.tsx`:
```typescript
import YourSection from '@/components/YourSection';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <YourSection />  // Add here
      <Projects />
      ...
    </main>
  );
}
```

### 📝 Form Functionality

#### Connect Contact Form
Edit `components/Contact.tsx` (line 14):
```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  // Add your form submission logic here
  // Example: Send to API endpoint
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  });
  
  // Handle response
};
```

### 🚀 Deployment

#### Deploy to Vercel
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy!

#### Deploy to Netlify
1. Build the project: `npm run build`
2. Deploy the `.next` folder to Netlify

### 💡 Tips

1. **Test Responsiveness**: Always test on mobile, tablet, and desktop
2. **Performance**: Use Chrome DevTools Lighthouse to check performance
3. **Accessibility**: Ensure proper contrast ratios and keyboard navigation
4. **Browser Testing**: Test on Chrome, Firefox, Safari, and Edge
5. **Loading States**: Add loading states for better UX

### 🐛 Common Issues

#### Issue: Animations not smooth
**Solution**: Reduce the number of animated elements or use `will-change` CSS property

#### Issue: Slow page load
**Solution**: 
- Optimize images (use WebP format)
- Lazy load components
- Reduce animation complexity

#### Issue: Layout shifts
**Solution**: Set explicit width/height for images and containers

### 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)

---

Need help? Check the README.md or create an issue on GitHub!
