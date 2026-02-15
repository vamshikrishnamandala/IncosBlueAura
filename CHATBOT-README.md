# Chatbot Implementation Guide

## 📁 File Structure

The chatbot is implemented using three separate files for easy maintenance:

```
├── chatbot-data.js      # Q&A content and conversation flows
├── chatbot.js           # Core functionality and logic
├── chatbot.css          # All styles and animations
└── CHATBOT-README.md    # This documentation
```

## 🚀 How It Works

### 1. **chatbot-data.js** - Content Management

Contains all questions, answers, and navigation paths structured as a JSON object.

**Structure:**

```javascript
chatbotData = {
  category: {
    message: "Question or intro text",
    options: [{ id: "option1", label: "Button Text", icon: "🎨" }],
    answers: {
      option1: {
        message: "Answer text",
        options: [
          /* Next options */
        ],
      },
    },
  },
};
```

**To Add New Content:**

- Edit `chatbot-data.js`
- Add new category or expand existing ones
- Use markdown in messages: `**bold**`, `✓` checkmarks, `[Link](url)`
- Icons are optional but recommended for better UX

### 2. **chatbot.js** - Functionality

Handles:

- Automatic HTML injection (no manual HTML needed!)
- Message rendering
- Navigation flow
- User interactions
- Accessibility features

**Key Features:**

- Automatically creates chatbot button and widget
- Parses markdown formatting
- Manages conversation history
- Handles back navigation
- Smooth animations and typing indicators

**No editing needed unless:**

- Adding new special actions
- Changing animation timing
- Modifying core behavior

### 3. **chatbot.css** - Styling

All visual styles including:

- Widget appearance
- Button styles
- Animations
- Mobile responsiveness
- Dark mode support

**Customization:**

- Change colors: Look for gradient definitions (`#667eea`, `#764ba2`)
- Adjust sizing: Modify `.chatbot-widget` dimensions
- Animation speed: Update transition durations
- Mobile breakpoints: Edit `@media` queries

## 📝 Integration in HTML Files

Each HTML file includes these three lines before `</body>`:

```html
<!-- Chatbot Scripts -->
<script src="chatbot-data.js"></script>
<script src="chatbot.js"></script>
```

And in the `<head>`:

```html
<link rel="stylesheet" href="chatbot.css" />
```

**Files Updated:**

- ✅ index.html
- ✅ about.html
- ✅ contact.html
- ✅ portfolio.html
- ✅ services.html
- ✅ themes.html

## ✏️ Common Editing Tasks

### Adding a New Service Category

1. Open `chatbot-data.js`
2. Add to `services.options`:

```javascript
{ id: "new_service", label: "New Service Name" }
```

3. Add to `services.answers`:

```javascript
new_service: {
  message: "**Service Name** 🎨\n\nDescription here...",
  options: [
    { id: "contact_service", label: "Get Quote" },
    { id: "back", label: "← Back to Services" }
  ]
}
```

### Updating Contact Information

Edit the `contact` section in `chatbot-data.js`:

- `phone` - Phone numbers
- `email` - Email addresses
- `visit` - Physical address
- `hours` - Working hours

### Changing Color Scheme

In `chatbot.css`, find and replace:

- `#667eea` - Primary purple
- `#764ba2` - Secondary purple
- `#4ade80` - Online status green

### Adding New Theme

Add to `themes.options` and `themes.answers` in `chatbot-data.js`:

```javascript
{
  id: "new_theme",
  label: "Theme Name"
}
```

## 🎨 Styling Customization

### Widget Position

```css
.chatbot-widget {
  bottom: 110px; /* Distance from bottom */
  right: 30px; /* Distance from right */
}
```

### Button Colors

```css
.chatbot-btn {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

### Message Bubble Colors

```css
.bot-message .message-bubble {
  background: #fff;
  color: #333;
}

.user-message .message-bubble {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #fff;
}
```

## 🔧 Troubleshooting

### Chatbot Not Showing

1. Check browser console for errors
2. Verify all three files are loaded (Network tab)
3. Ensure `chatbot-data.js` loads before `chatbot.js`

### Conversation Flow Issues

1. Check `chatbot-data.js` for typos in option IDs
2. Verify all referenced IDs exist
3. Look for missing `options` arrays

### Styling Problems

1. Check `chatbot.css` is loaded
2. Verify no CSS conflicts with existing styles
3. Clear browser cache

## 🌐 Browser Compatibility

Tested and working on:

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## ♿ Accessibility Features

- ✅ Keyboard navigation (Tab, Enter, Space, Escape)
- ✅ ARIA labels and roles
- ✅ Screen reader announcements
- ✅ Focus indicators
- ✅ Reduced motion support

## 📱 Mobile Responsiveness

Automatically adapts to:

- Desktop (380px width)
- Tablet (calc(100vw - 30px))
- Mobile (calc(100vw - 20px))

Breakpoints at 768px and 480px.

## 🎯 Key Features

1. **No Manual HTML** - Widget is injected automatically
2. **Reusable** - Same code across all pages
3. **Easy to Update** - Edit content in one file
4. **Accessible** - Keyboard and screen reader friendly
5. **Responsive** - Works on all devices
6. **Modern UI** - Smooth animations and transitions
7. **Markdown Support** - Format text easily
8. **Reset Function** - Start conversation over anytime
9. **Back Navigation** - Go to previous step
10. **Typing Indicator** - Shows bot is "thinking"

## 📊 Content Structure

Current categories:

- **Services** - All service offerings
- **About Us** - Company information
- **Portfolio** - Project showcase
- **Themes** - Design styles
- **Contact** - Contact information
- **FAQ** - Common questions

## 🔄 Update Workflow

1. Update content → Edit `chatbot-data.js`
2. Change styles → Edit `chatbot.css`
3. Add features → Edit `chatbot.js`
4. No need to touch HTML files!

## 💡 Best Practices

- Keep messages concise (2-4 sentences)
- Use emojis sparingly for visual interest
- Provide clear back/exit options
- Test navigation paths thoroughly
- Use consistent tone and voice
- Include relevant links to pages

## 🆘 Support

For issues or questions:

1. Check this README first
2. Review browser console errors
3. Verify file paths are correct
4. Test in different browsers

---

**Version:** 1.0  
**Last Updated:** February 15, 2026  
**Maintainable:** Yes - All code is well-commented and modular
