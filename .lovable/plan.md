
# Video Upload and Preview for Lobby Page

## Overview
Add full video upload functionality to the Lobby page with file browsing, drag-and-drop, and a seamless local video preview player.

## Features to Implement

### 1. File Browse Button
- Connect "Browse Files" button to a hidden file input
- Accept only video formats: `.mp4, .mov, .avi, .webm, .mkv`
- Trigger file picker on button click

### 2. Drag and Drop Enhancement
- Validate dropped files are video format
- Show error toast if non-video file is dropped
- Extract the video file from the drop event

### 3. Local Video Playback (No Buffering)
- Use `URL.createObjectURL()` to create a local blob URL
- This plays the video directly from memory - no network streaming
- Video loads instantly and scrubs smoothly without buffering

### 4. Video Preview UI
When a video is selected, the drop zone transforms into a video player with:
- Video element with the local blob URL
- Play/Pause button (centered, large)
- Progress/seek bar (draggable to scrub)
- Current time / Duration display
- Close/Remove button to clear the video and return to drop zone

### 5. Clean Design Integration
- Smooth transition from drop zone to video preview
- Match the existing design language (rounded corners, gradients, animations)
- Keep the same aspect ratio container

## Technical Implementation

### State Management
```typescript
const [selectedVideo, setSelectedVideo] = useState<File | null>(null);
const [videoUrl, setVideoUrl] = useState<string | null>(null);
const [isPlaying, setIsPlaying] = useState(false);
const [currentTime, setCurrentTime] = useState(0);
const [duration, setDuration] = useState(0);
const videoRef = useRef<HTMLVideoElement>(null);
const fileInputRef = useRef<HTMLInputElement>(null);
```

### Key Functions
1. `handleFileSelect(file: File)` - Validates and sets the video file
2. `handleBrowseClick()` - Triggers the hidden file input
3. `handleDrop(e)` - Processes dropped files
4. `togglePlayPause()` - Controls video playback
5. `handleSeek(value)` - Updates video currentTime for scrubbing
6. `clearVideo()` - Removes video and revokes blob URL

### Video Format Validation
```typescript
const ACCEPTED_VIDEO_TYPES = ['video/mp4', 'video/quicktime', 'video/x-msvideo', 'video/webm', 'video/x-matroska'];
```

### Blob URL Management
- Create blob URL when video is selected: `URL.createObjectURL(file)`
- Revoke blob URL when video is cleared to free memory: `URL.revokeObjectURL(url)`
- Use `useEffect` cleanup to handle component unmount

### Video Player Controls
- Slider component for seek bar (already have `@radix-ui/react-slider`)
- `onTimeUpdate` event to sync progress bar with video
- `onLoadedMetadata` to get video duration
- Click on seek bar updates `videoRef.current.currentTime`

## File Changes

### `src/components/LobbyTab.tsx`
- Add refs for video element and file input
- Add state for video file, URL, playback status, time tracking
- Add hidden `<input type="file" accept="video/*" />` element
- Update `handleDrop` to extract and validate video files
- Add `handleBrowseClick` to trigger file input
- Create conditional render: drop zone OR video preview
- Add video player UI with controls when video is selected

## UI Flow

```
[Drop Zone / Browse Button]
         |
         v (file selected)
[Video Preview Player]
  - Video display
  - Play/Pause button
  - Seek bar (draggable)
  - Time display
  - Close button
```

## Performance Considerations
- Blob URLs load instantly from local memory
- No network requests = no buffering
- Seeking is instantaneous since the entire file is in memory
- Clean up blob URLs to prevent memory leaks
