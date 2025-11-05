# 📹 Video Background Setup Guide

## ✅ Completed Green Theme Updates
All components have been successfully converted from maroon to **White + Emerald Green + Gold** theme:

- ✅ `globals.css` - CSS variables updated
- ✅ `Hero.tsx` - Video background structure ready
- ✅ `Services.tsx` - Emerald green theme
- ✅ `About.tsx` - Emerald green theme  
- ✅ `Contact.tsx` - Emerald green theme
- ✅ `Footer.tsx` - Emerald green theme

---

## 🎬 How to Add Video Background to Homepage

### Step 1: Prepare Your Video File
1. **Get a hospital/ICU video** (suggested: 4K resolution, 30-60 seconds)
2. **Optimize the file:**
   - Format: `.mp4` (H.264 codec recommended)
   - Size: Keep under 10MB for web performance
   - Resolution: 1920x1080 (Full HD) or 3840x2160 (4K)
   - Tools: Use HandBrake or Adobe Media Encoder to compress

### Step 2: Add Video to Project
```bash
# Place your video file in the public folder:
/Applications/projects/ar-hospital/public/videos/hospital-hero.mp4
```

### Step 3: Update Hero.tsx
Open `/Applications/projects/ar-hospital/components/Hero.tsx` and find this comment:

```tsx
{/* TODO: Add your video file to /public/videos/ folder and uncomment below */}
{/* <video ... /> */}
```

**Uncomment the video tag** (remove the `{/* */}` wrapper) to enable it:

```tsx
<video
  autoPlay
  loop
  muted
  playsInline
  className="absolute inset-0 w-full h-full object-cover"
>
  <source src="/videos/hospital-hero.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
```

### Step 4: Test Performance
- **Mobile:** Video should autoplay (muted) on scroll
- **Desktop:** Full-screen background loop
- **Fallback:** White background shows if video fails

---

## 🚀 Next Steps

### 1. Video Sources (Free Stock Videos)
- **Pexels:** https://www.pexels.com/search/videos/hospital/
- **Pixabay:** https://pixabay.com/videos/search/hospital/
- **Videvo:** https://www.videvo.net/

### 2. Recommended Keywords
Search for:
- "hospital corridor"
- "ICU medical equipment"
- "doctors walking"
- "modern hospital interior"
- "medical technology"

### 3. Alternative: Use Image Placeholder
If you don't have a video yet, use a high-quality image instead:

```tsx
<Image
  src="/images/hospital-hero.jpg"
  alt="AR Hospital"
  fill
  priority
  className="object-cover"
  sizes="100vw"
/>
```

---

## 📱 Mobile Optimization Tips

1. **Lazy Load:** Video loads only when visible
2. **Poster Image:** Add a poster attribute for initial display
   ```tsx
   <video poster="/images/video-poster.jpg" ... >
   ```
3. **Conditional Loading:** Optionally disable video on slow connections:
   ```tsx
   {!isMobile && <video ... />}
   ```

---

## 🎨 Current Theme Colors

| Color | Hex Code | Usage |
|-------|----------|-------|
| **Primary Green** | `#10b981` | Buttons, icons, accents |
| **Emerald Green** | `#059669` | Headings, borders |
| **Teal Green** | `#14b8a6` | Gradients, hover states |
| **Accent Gold** | `#f59e0b` | Highlights, CTAs |
| **White** | `#FFFFFF` | Background, text on dark |

---

## 🔥 What's Working Now
- ✅ Server running on `localhost:3000`
- ✅ Green theme applied across all sections
- ✅ Video placeholder structure ready
- ✅ Mobile-responsive design (320px - 768px)
- ✅ Two CTA buttons (Book Appointment + Emergency)

## 🚧 Pending Tasks
1. **Add actual video file** (you provide)
2. **Navbar redesign** with ambulance integration
3. **Mobile toggle menu** (hamburger navigation)
4. **Test on real mobile devices**

---

**Need help?** Check the console for any errors after adding the video file.
