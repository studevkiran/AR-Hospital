#!/bin/bash
# Script to update background video

echo "🎬 AR Hospital - Background Video Updater"
echo "=========================================="
echo ""

# Find the most recent video file in common locations
echo "🔍 Searching for recent video files..."
RECENT_VIDEO=$(find ~/Desktop ~/Documents ~/Downloads -name "*.mp4" -type f -mtime -3 2>/dev/null | head -1)

if [ -z "$RECENT_VIDEO" ]; then
    echo "❌ No recent MP4 files found in Desktop, Documents, or Downloads"
    echo ""
    echo "📝 Manual steps:"
    echo "1. Copy your video file to: /Applications/projects/ar-hospital/public/"
    echo "2. Rename it to: hospital-background.mp4"
    echo ""
    echo "Or run: cp /path/to/your/video.mp4 public/hospital-background.mp4"
else
    echo "✅ Found: $RECENT_VIDEO"
    echo ""
    read -p "Copy this file as hospital-background.mp4? (y/n) " -n 1 -r
    echo ""
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        cp "$RECENT_VIDEO" public/hospital-background.mp4
        echo "✅ Video copied successfully!"
        echo "🔄 The website will auto-reload with the new video"
    else
        echo "❌ Cancelled"
    fi
fi
