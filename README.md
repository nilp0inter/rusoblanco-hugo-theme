# NanoBlogger Hugo Theme

A Hugo theme inspired by the classic NanoBlogger static site generator. This theme replicates the clean, minimalist two-column design of the original NanoBlogger.

## Features

- Clean, minimalist two-column layout
- Sidebar with:
  - **Calendar widget** showing current month with post links
  - Recent entries
  - Categories
  - Archives by year
  - RSS feed link
  - Custom links
  - Contact information
- Responsive typography using classic web-safe fonts (Palatino, Georgia, Verdana)
- Support for categories/tags
- Archive pages
- RSS feed support
- Pagination on home page

## Installation

### As a Hugo Module (recommended)

1. Initialize your Hugo site as a module:

```bash
hugo mod init github.com/yourusername/yoursite
```

2. Add the theme to your `config.toml`:

```toml
[module]
  [[module.imports]]
    path = "github.com/yourusername/nanoblogger-hugo-theme"
```

### As a Git Submodule

```bash
cd your-hugo-site
git submodule add https://github.com/yourusername/nanoblogger-hugo-theme.git themes/nanoblogger-hugo-theme
```

Then add to your `config.toml`:

```toml
theme = "nanoblogger-hugo-theme"
```

### Manual Installation

Download the theme and place it in your `themes/` directory, then reference it in your config.

## Configuration

Here's a complete example `config.toml`:

```toml
baseURL = "https://example.org/"
languageCode = "en-us"
title = "My Blog"
theme = "nanoblogger-hugo-theme"

[params]
  description = "A simple blog powered by Hugo"
  author = "Your Name"
  intro = """
**Introduction**

This is my blog where I write about various topics.
"""
  footer_text = "powered by [Hugo](https://gohugo.io)"
  contact = "you@example.com"
  
# Sidebar links (optional)
[[params.sidebar_links]]
  name = "Main"
  url = "/"

[[params.sidebar_links]]
  name = "About"
  url = "/about/"

# Configure main sections (for recent entries)
[params]
  mainSections = ["post"]

# Enable RSS
[outputs]
  home = ["HTML", "RSS"]
  section = ["HTML", "RSS"]

# Configure permalinks to match NanoBlogger style
[permalinks]
  post = "/archives/:year/:month/:day/:slug/"
```

## Content

### Creating a new post

```bash
hugo new post/my-first-post.md
```

### Post front matter

```yaml
---
title: "My First Post"
date: 2024-01-15T10:30:00Z
categories: ["blog", "tech"]
draft: false
---

Your content here...
```

## Directory Structure

```
.
├── archetypes/
├── layouts/
│   ├── _default/
│   │   ├── baseof.html
│   │   ├── list.html
│   │   └── single.html
│   ├── partials/
│   │   └── sidebar.html
│   └── index.html
├── static/
│   └── css/
│       └── nb_clean.css
└── theme.toml
```

## Customization

### Calendar Widget

The calendar widget is enabled by default and shows the current month with days that have posts linked. To disable it, add this to your `config.toml`:

```toml
[params]
  disable_calendar = true
```

The calendar:
- Displays the current month automatically
- Links days that have published posts
- Uses the same styling as the original NanoBlogger calendar
- Updates dynamically when you add new posts

### Styling

The main stylesheet is located at `static/css/nb_clean.css`. You can override styles by creating your own `assets/css/custom.css` in your site directory and linking it in the config or by copying and modifying the theme's CSS file.

### Colors

The default color scheme uses:
- Text: `#333` (dark gray)
- Links: `#003366` (dark blue)
- Hover: `#999999` (gray)
- Accents: `#666600` (olive)
- Borders: `#999` (gray)

### Fonts

The theme uses a classic web font stack:
- Headings: Palatino, Georgia, Verdana, Arial, sans-serif
- Body: Verdana, Arial, sans-serif

## Credits

This theme is inspired by the original NanoBlogger static site generator created by n1xt3r. NanoBlogger was a bash-based weblog engine that generated static HTML content using common UNIX tools.

## Credits and Attribution

This theme is a faithful recreation of the classic **NanoBlogger** static site generator theme, adapted for Hugo.

**NanoBlogger** was created by n1xt3r and released under the GNU General Public License. The original project can be found at [https://nanoblogger.sourceforge.net/](https://nanoblogger.sourceforge.net/)

This Hugo theme recreates the NanoBlogger aesthetic and functionality while leveraging Hugo's modern features. If you use this theme, please include attribution to both:
- **Hugo** - The static site generator: [https://gohugo.io](https://gohugo.io)
- **NanoBlogger** - The original inspiration: [https://nanoblogger.sourceforge.net/](https://nanoblogger.sourceforge.net/)

Example footer text in your `config.toml`:
```toml
[params]
  footer_text = "powered by [Hugo](https://gohugo.io) and [NanoBlogger](https://nanoblogger.sourceforge.net/) theme"
```

## License

MIT License - feel free to use and modify as needed.
