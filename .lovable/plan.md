

# Add Social Login Buttons (Google & GitHub)

## Overview
Add visually consistent social login buttons for Google and GitHub as placeholders in the AuthModal. These buttons will match the existing premium design theme and show a "Coming soon" toast when clicked.

## Design Approach

### Button Placement
- Add social buttons between the mode switcher and the email form
- Include an "or" divider to separate social login from email/password login
- Only show on login and signup modes (not on forgot/reset)

### Visual Design
- Match existing button styling with `bg-secondary/50` background
- Use `rounded-xl` border radius consistent with other elements
- Add hover states with `hover:bg-secondary/70`
- Include brand-appropriate icons (Google "G" colors, GitHub dark icon)
- Height `h-11` to match other form elements

### User Interaction
- Clicking either button shows a toast: "Coming soon! This feature will be available shortly."
- Buttons are not disabled (to feel interactive) but don't perform actual auth

## Technical Implementation

### File to Modify
`src/components/AuthModal.tsx`

### Changes

1. **Add click handler for social buttons**
```typescript
const handleSocialLogin = (provider: string) => {
  toast({
    title: `${provider} login coming soon!`,
    description: "This feature will be available shortly.",
  });
};
```

2. **Add social buttons section** (after mode switcher, before form)
- Two buttons side by side in a flex container
- Google button with colored "G" icon
- GitHub button with GitHub icon from lucide-react
- "or continue with email" divider below

3. **Divider styling**
```tsx
<div className="flex items-center gap-3">
  <div className="flex-1 h-px bg-border/50" />
  <span className="text-xs text-muted-foreground">or</span>
  <div className="flex-1 h-px bg-border/50" />
</div>
```

### UI Layout (Login/Signup modes only)
```
[Header]
[Mode Switcher]
[Google Button] [GitHub Button]  <-- NEW
[------ or ------]               <-- NEW
[Email Form Fields]
[Submit Button]
[Footer Links]
```

### Icons
- Google: Custom SVG with brand colors (blue, red, yellow, green "G")
- GitHub: `Github` icon from lucide-react

## Visual Preview

The social buttons will appear as:
- Two equal-width buttons side by side
- Subtle background with border
- Icon on the left, provider name on the right
- Smooth hover transition matching other interactive elements

