# Year-Based Archives Feature

The NanoBlogger Hugo theme implements year-based archives using Hugo's taxonomy system, replicating the original NanoBlogger functionality.

## How It Works

The theme uses a custom `years` taxonomy to organize posts by year. Each post automatically gets tagged with its publication year, allowing Hugo to generate year archive pages.

## Setup Required

### 1. Enable the Years Taxonomy

In your `config.toml`:

```toml
[taxonomies]
  category = "categories"
  tag = "tags"
  year = "years"
```

### 2. Add Year to Post Front Matter

When creating posts, include the year in the front matter:

```yaml
---
title: "My Post"
date: 2024-12-15T10:30:00Z
categories: ["blog"]
years: ["2024"]
---
```

The archetype automatically adds the current year, so new posts will include this by default.

### 3. Create Archives Index Page

Create `content/archives/_index.md`:

```yaml
---
title: "Archives"
type: "archives"
layout: "archives"
---
```

## Features

### Archive Index Page (`/archives/`)
- Lists all years with post counts
- Browse by category
- Browse all entries chronologically

### Year Archive Pages (`/years/YYYY/`)
- Shows all posts from a specific year
- Navigation to previous/next year (if they exist)
- Date formatted as YYYY/MM
- Links to categories for each post

### Sidebar Integration
- "Archive Index" link
- Year links with post counts (e.g., "2024 (5)")
- Sorted in reverse chronological order

## URL Structure

- Archive Index: `/archives/`
- Year Archives: `/years/2024/`, `/years/2023/`, etc.
- Individual Posts: `/archives/2024/12/15/post-title/` (via permalink configuration)

This matches the NanoBlogger convention where individual posts use `/archives/` but year listings use `/years/`.

## Example

If you have posts from 2023 and 2024:

**Sidebar shows:**
```
Archives
Archive Index
2024 (12)
2023 (45)
```

**Click "2024" → `/years/2024/`:**
```
2024 Archives

Main > Archives >
< 2023  2024

Browse by entry
2024/12 - My December Post - tech, blog
2024/11 - Another Post - personal
...
```

## Automatic Year Assignment

The theme's archetype (`archetypes/default.md`) automatically assigns the current year:

```yaml
years: ["{{ now.Format "2006" }}"]
```

So when you run `hugo new post/my-post.md`, the year is added automatically.

## Notes

- Years are determined by the `years` front matter, not dynamically from the date
- This allows manual override if needed (though rare)
- The approach ensures Hugo can pre-generate all archive pages at build time
- Matches NanoBlogger's static generation philosophy
