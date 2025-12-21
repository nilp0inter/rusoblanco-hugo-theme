# rusoblanco Hugo Theme

A Hugo theme based on the personal www.rusoblanco.com blog from the 2000s, which itself was a customized version of the classic NanoBlogger theme.

## About

This theme recreates the distinctive look of www.rusoblanco.com:
- **Dark banner** with white text (#111111 background)
- **Gray background** (#F3F3F3) for the entire page
- **Bold black links** with gray hover states
- **Uppercase post titles** (text-transform: uppercase)
- **Red calendar day headers** (#FF0000)
- **Dotted borders** (#999) throughout
- **Centered menus** and sidebar elements
- **Lowercase sidebar titles** (text-transform: lowercase)

## Original Blog

The original www.rusoblanco.com was a personal blog from the 2000s built with NanoBlogger. This Hugo theme faithfully recreates its customized aesthetic while adding modern features like syntax highlighting and math rendering.

## Installation

### As a Hugo Module

1. Initialize your Hugo site as a module:

```bash
hugo mod init github.com/nilp0inter/yoursite
```

2. Add the theme to your `config.toml`:

```toml
[module]
  [[module.imports]]
    path = "github.com/nilp0inter/rusoblanco-hugo-theme"
```

### As a Git Submodule

```bash
cd your-hugo-site
git submodule add https://github.com/nilp0inter/rusoblanco-hugo-theme.git themes/rusoblanco-hugo-theme
```

Then add to your `config.toml`:

```toml
theme = "rusoblanco-hugo-theme"
```

## Configuration

Example `config.toml`:

```toml
baseURL = "https://www.rusoblanco.com/"
languageCode = "en-us"
title = "rusoblanco"
theme = "rusoblanco-hugo-theme"

[params]
  description = "My personal blog"
  author = "Your Name"
  intro = """
**Welcome!**

This is my blog.
"""
  footer_text = "powered by [Hugo](https://gohugo.io) and [NanoBlogger](https://nanoblogger.sourceforge.net/) theme"
  contact = "you@example.com"
  mainSections = ["post"]

# Enable year-based archives taxonomy
[taxonomies]
  category = "categories"
  tag = "tags"
  year = "years"

# Enable syntax highlighting with line numbers
[markup]
  [markup.highlight]
    style = "monokailight"
    lineNos = true
    lineNumbersInTable = true
    noClasses = true

# Enable RSS
[outputs]
  home = ["HTML", "RSS"]
  section = ["HTML", "RSS"]

# Configure permalinks
[permalinks]
  post = "/archives/:year/:month/:day/:slug/"
```

## Creating Content

### Your First Post

```bash
hugo new post/my-first-post.md
```

The archetype automatically adds the year taxonomy:

```yaml
---
title: "My First Post"
date: 2025-12-21T10:00:00Z
categories: ["general"]
years: ["2025"]
draft: false
---

Your content here...
```

### Archives Page

Create `content/archives/_index.md`:

```yaml
---
title: "Archives"
type: "archives"
layout: "archives"
---
```

## Features

- ✅ **Calendar Widget** - Shows current month with post links
- ✅ **Year Archives** - Browse posts by year (e.g., /years/2024/)
- ✅ **Category Archives** - Organize by topics
- ✅ **Syntax Highlighting** - With line numbers and copy buttons
- ✅ **Math Rendering** - KaTeX support for mathematical notation
- ✅ **RSS Feeds** - Multiple feed formats
- ✅ **Clean URLs** - /archives/YYYY/MM/DD/slug/ format
- ✅ **Responsive** - Two-column layout
- ✅ **Minimal JavaScript** - Only for copy buttons and math

## Visual Differences from Base NanoBlogger Theme

The rusoblanco theme differs from the base NanoBlogger theme in these ways:

| Feature | Base NanoBlogger | rusoblanco |
|---------|------------------|------------|
| Background | White (#FFF) | Gray (#F3F3F3) |
| Banner | Light/default | Black (#111111) |
| Links | Blue, normal weight | Black, bold |
| Post Titles | Normal case | UPPERCASE |
| Calendar Days | Black | Red (#FF0000) |
| Borders | Solid lines | Dotted lines |
| Sidebar Titles | Normal case | lowercase |
| Menu Alignment | Left | Centered |

## Credits and Attribution

This theme is based on:

1. **www.rusoblanco.com** - The original personal blog from the 2000s
2. **NanoBlogger** by n1xt3r - The static site generator: [https://nanoblogger.sourceforge.net/](https://nanoblogger.sourceforge.net/)
3. **Hugo** - The modern static site generator: [https://gohugo.io](https://gohugo.io)

## License

MIT License - feel free to use and modify as needed.

The theme is inspired by the original NanoBlogger which was released under the GNU General Public License.
