# 🎬 Copy Your New Video

Your code has been updated to use: `hospital-background.mp4`

## Quick Copy Command

Open Finder and:
1. Find your downloaded video file
2. Drag it to: `/Applications/projects/ar-hospital/public/`
3. Rename it to: `hospital-background.mp4`

## Or use Terminal:

```bash
# Replace YOUR_VIDEO_NAME.mp4 with your actual filename
cp ~/Desktop/YOUR_VIDEO_NAME.mp4 /Applications/projects/ar-hospital/public/hospital-background.mp4

# OR if it's in Downloads (you'll need to grant terminal access):
cp ~/Downloads/YOUR_VIDEO_NAME.mp4 /Applications/projects/ar-hospital/public/hospital-background.mp4
```

## Check if it worked:

```bash
ls -lh /Applications/projects/ar-hospital/public/*.mp4
```

The website will automatically reload with your new video! 🎉
