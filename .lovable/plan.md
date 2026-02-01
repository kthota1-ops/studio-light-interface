
# Improve Editor Tab Video Player Design

## Overview
Upgrade the video player in `VideoCanvas.tsx` to match the premium design of the Studio/Gallery tab video player, including glow effects, scanlines, better overlays, and refined controls.

## Key Design Elements to Add

### 1. Hover Glow Effect
Add a gradient glow that appears when hovering over the video player container, creating a premium interactive feel.

### 2. Scanlines Effect
Add subtle scanlines overlay for a polished video player aesthetic.

### 3. Enhanced Play Button
- Larger size (w-20 h-20 instead of w-16 h-16)
- Add ping animation effect behind the button
- Better backdrop blur styling

### 4. Improved Top Overlay
- Stronger gradient (from-black/60)
- Better badge styling matching Studio page
- Add "Recording" or status indicator similar to "Mastered" badge

### 5. Enhanced Bottom Controls
- Add animated progress bar with gradient
- Better control button styling
- Add video metadata (resolution, fps)
- Improve the AI Processing indicator placement

### 6. Overall Polish
- Change border radius to `rounded-2xl` for inner container
- Add `shadow-2xl` for depth
- Wrap in a `group` class for hover interactions

## Technical Implementation

### File to Modify
`src/components/editor/VideoCanvas.tsx`

### Changes Summary

1. **Container Structure** - Wrap video player in a relative container with glow effect div
2. **Scanlines Overlay** - Add repeating-linear-gradient background
3. **Play Button** - Increase size, add ping animation div
4. **Top Bar** - Use stronger gradient, improve badge styling, add status badge
5. **Bottom Bar** - Add progress bar, improve control layout, add metadata
6. **Styling Updates** - Apply `rounded-2xl`, `shadow-2xl`, `group` class

### Visual Comparison

**Before (Current Editor):**
- Simple dark background
- Basic overlays with `from-black/40`
- Small play button (w-16 h-16)
- No progress bar
- No glow effects

**After (Matching Studio):**
- Glow effect on hover
- Scanlines texture
- Large play button with animation (w-20 h-20)
- Animated gradient progress bar
- Premium overlays with `from-black/60`
- Video metadata display
- Overall more polished appearance

The timeline section below the video player will remain unchanged to maintain the editing workflow functionality.
