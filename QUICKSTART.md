# Quick Start Guide for NanoBlogger Hugo Theme

## Setup

1. **Create a new Hugo site** (if you don't have one):
   ```bash
   hugo new site myblog
   cd myblog
   ```

2. **Add the theme**:
   ```bash
   git clone https://github.com/yourusername/nanoblogger-hugo-theme.git themes/nanoblogger-hugo-theme
   # or use the exampleSite config as a starting point
   cp themes/nanoblogger-hugo-theme/exampleSite/config.toml .
   ```

3. **Configure your site** - Edit `config.toml`:
   ```toml
   baseURL = "https://yourdomain.com/"
   languageCode = "en-us"
   title = "Your Blog Title"
   theme = "nanoblogger-hugo-theme"

   [params]
     description = "Your blog description"
     author = "Your Name"
     intro = """
   **Welcome to my blog**
   
   Write your introduction here using Markdown.
   """
     footer_text = "powered by Hugo and the NanoBlogger theme"
     contact = "your-email@example.com"
     mainSections = ["post"]
   ```

4. **Create your first post**:
   ```bash
   hugo new post/my-first-post.md
   ```

5. **Edit the post** - Open `content/post/my-first-post.md`:
   ```yaml
   ---
   title: "My First Post"
   date: 2024-01-15T10:30:00Z
   categories: ["blog"]
   draft: false
   ---

   Your content goes here!
   ```

6. **Run the development server**:
   ```bash
   hugo server -D
   ```

7. **View your site** at http://localhost:1313

## Customization Tips

### Adding Sidebar Links
```toml
[[params.sidebar_links]]
  name = "About"
  url = "/about/"

[[params.sidebar_links]]
  name = "Projects"
  url = "/projects/"
```

### NanoBlogger-style Permalinks
```toml
[permalinks]
  post = "/archives/:year/:month/:day/:slug/"
```

### RSS Feed
The RSS feed will be available at `/rss.xml` (matching NanoBlogger's convention).

## Building for Production

```bash
hugo --minify
```

Your site will be in the `public/` directory, ready to deploy!
