# Calendar Widget

The NanoBlogger Hugo theme includes a fully functional calendar widget that replicates the original NanoBlogger calendar feature.

## Features

- **Automatic Current Month Display**: Shows the current month and year
- **Post Day Linking**: Days with published posts are automatically linked
- **Proper Week Layout**: Starts on Sunday, properly aligned
- **Leap Year Support**: Correctly handles February in leap years
- **Original Styling**: Uses the same CSS classes as NanoBlogger

## How It Works

The calendar is generated server-side by Hugo at build time using the `layouts/partials/calendar.html` template. It:

1. Gets the current month and year
2. Finds all posts published in the current month
3. Calculates the first day of the month (to align the calendar)
4. Generates a proper HTML table with 7 columns (Su-Sa)
5. Links days that have posts to the first post on that day

## Configuration

The calendar is enabled by default. To disable it:

```toml
[params]
  disable_calendar = true
```

## Example Output

```html
<div class="calendar">
  <table border="0" cellspacing="4" cellpadding="0" summary="Calendar">
    <caption class="calendarhead">December 2025</caption>
    <tr>
      <th><span class="calendarday">Su</span></th>
      <th><span class="calendarday">Mo</span></th>
      ...
    </tr>
    <tr>
      <td></td>
      <td><span class="calendar">1</span></td>
      <td><span class="calendar"><a href="/post/...">2</a></span></td>
      ...
    </tr>
  </table>
</div>
```

## Styling

The calendar uses these CSS classes from `nb_clean.css`:

- `.calendar` - Main container and cell styling
- `.calendarhead` - Month/year caption
- `.calendarday` - Day of week headers (Su, Mo, etc.)

All styling matches the original NanoBlogger design.

## Limitations

- **Shows current month only** (no previous/next navigation) - *This matches the original NanoBlogger behavior*
- Links to first post of the day if multiple posts exist
- Requires posts to be dated in the current month to show links
- Calendar is static and reflects the month when the site was built

These limitations match the original NanoBlogger implementation, which was a static site generator that rebuilt all pages on each update.

## Why No Navigation?

The original NanoBlogger was a static site generator that used bash scripts. When you rebuilt your site, it would:

1. Generate a calendar for the current month
2. Link days with posts from that month
3. Output static HTML

There was no JavaScript or dynamic navigation - the calendar was just an HTML table snapshot of the current month. This is exactly what this Hugo theme replicates.

If you want navigation (previous/next month), you would need to add JavaScript to make it dynamic, which would be a departure from the original NanoBlogger design philosophy of pure static HTML with no JavaScript dependencies.
