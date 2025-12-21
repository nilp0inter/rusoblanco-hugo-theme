# Code Block Features

The NanoBlogger Hugo theme includes modern code block features while maintaining the classic aesthetic.

## Features

✅ **Line Numbers** - All code blocks show line numbers  
✅ **Copy Button** - One-click copy to clipboard  
✅ **Syntax Highlighting** - Using Hugo's built-in Chroma  

## Configuration

In your `config.toml`:

```toml
[markup]
  [markup.highlight]
    style = "monokailight"
    lineNos = true
    lineNumbersInTable = true
    noClasses = true
```

### Options

- `style`: Choose from Chroma styles (monokailight, monokai, github, etc.)
- `lineNos`: Enable/disable line numbers
- `lineNumbersInTable`: Use table format (better for copying)
- `noClasses`: Use inline styles (works without CSS)

## Usage in Markdown

Just use standard fenced code blocks:

````markdown
```python
def hello():
    print("Hello, world!")
```
````

## Copy Button

The copy button:
- Appears in the top-right of each code block
- Shows "Copied!" feedback when clicked
- Handles line numbers correctly (doesn't copy them)
- Uses minimal JavaScript
- Styled to match the NanoBlogger aesthetic

## Styling

The copy button CSS is in `static/css/nb_clean.css`:

```css
.copy-button {
  position: absolute;
  top: 5px;
  right: 5px;
  padding: 4px 8px;
  font-size: 10px;
  background: #f5f5f5;
  border: 1px solid #999;
  /* ... */
}
```

Customize as needed!

## Line Number Styling

Line numbers appear in a separate column with:
- Gray color (#666)
- Light gray background (#f5f5f5)
- Right border separating from code
- Non-selectable (won't be copied)

## JavaScript

The copy functionality uses vanilla JavaScript in `baseof.html`:
- No external dependencies
- Works with all modern browsers
- Graceful degradation (button won't show if clipboard API unavailable)
- ~50 lines of code

## Disabling Features

### Disable Copy Buttons

Remove the `<script>` block from `layouts/_default/baseof.html`.

### Disable Line Numbers

In `config.toml`:
```toml
[markup.highlight]
  lineNos = false
```

### Change Syntax Theme

Try different styles:
```toml
[markup.highlight]
  style = "github"      # Light GitHub style
  style = "monokai"     # Dark style
  style = "dracula"     # Dark purple theme
  style = "solarized-dark"
```

View all: https://xyproto.github.io/splash/docs/

## Browser Support

- Copy button: Chrome 63+, Firefox 53+, Safari 13.1+, Edge 79+
- Line numbers: All browsers
- Syntax highlighting: All browsers (rendered server-side)

## Accessibility

- Code blocks have `tabindex="0"` for keyboard navigation
- Copy button has descriptive text
- Line numbers use `user-select: none` to prevent selection
- High contrast colors for readability

## Performance

- Syntax highlighting: Done at build time (zero runtime cost)
- Copy button: Minimal JavaScript (~2KB)
- CSS: Adds ~1KB to stylesheet
- No external dependencies

The features are lightweight and follow the NanoBlogger philosophy of minimal, fast-loading pages!
