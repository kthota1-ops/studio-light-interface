
# Add Developer Credits Section to Studio Tab

## Overview
Add a team/credits section below the export controls (Download, Share, Quality buttons) showcasing the 4 developers who built the product with avatars and name tags.

## Design Approach
- Place the section directly below the export controls panel
- Use a subtle, cohesive design that matches the existing card styling
- Display 4 circular avatar placeholders with names underneath
- Include a small header like "Built by" or "Made with love by"

## Technical Implementation

### File to Modify
`src/components/GalleryTab.tsx`

### Changes
1. **Add Developer Data Array** - Create a constant array with placeholder data for 4 developers:
   ```text
   const developers = [
     { name: "Developer 1", avatar: "/placeholder.svg" },
     { name: "Developer 2", avatar: "/placeholder.svg" },
     { name: "Developer 3", avatar: "/placeholder.svg" },
     { name: "Developer 4", avatar: "/placeholder.svg" },
   ];
   ```

2. **Add Credits Section** - Insert a new card below the export controls panel with:
   - A subtle header ("Built by" or "Made with love by")
   - 4 avatar circles using the existing `Avatar` component from shadcn/ui
   - Name labels below each avatar
   - Horizontal layout with even spacing

### Component Structure
```text
<div className="p-4 rounded-2xl bg-secondary/30 border border-border/50">
  <p className="text-xs text-muted-foreground text-center mb-3">Built by</p>
  <div className="flex items-center justify-center gap-4">
    {developers.map((dev) => (
      <div className="flex flex-col items-center gap-1.5">
        <Avatar>
          <AvatarImage src={dev.avatar} />
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
        <span className="text-xs font-medium">{dev.name}</span>
      </div>
    ))}
  </div>
</div>
```

### Location in Layout
The section will be added after line ~218 (after the export controls div closes), within the `lg:col-span-3` video section column.

## Visual Result
- Matches the existing secondary/30 card styling
- Avatars will show placeholder images initially (easy to swap with real photos later)
- Names displayed in small, readable text below each avatar
- Centered layout with comfortable spacing between developers
