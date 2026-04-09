# Glenwood Fishing Site

Small static site for river monitoring around Glenwood Springs.

## Run Locally

From this folder:

```powershell
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Main Files

- [index.html](/c:/Users/andja/Mousetrap/glenwood-fishing-site/index.html): page structure
- [styles.css](/c:/Users/andja/Mousetrap/glenwood-fishing-site/styles.css): layout and visual styling
- [app.js](/c:/Users/andja/Mousetrap/glenwood-fishing-site/app.js): data loading, live fetches, map behavior, charts, and detail panel logic

## Data Files

- [access-points.csv](/c:/Users/andja/Mousetrap/glenwood-fishing-site/access-points.csv): live map points, currently focused on gauges and reservoir points
- [met-stations.csv](/c:/Users/andja/Mousetrap/glenwood-fishing-site/met-stations.csv): dedicated weather and air-temperature station list, kept separate from river truth sources
- [flow-thresholds.csv](/c:/Users/andja/Mousetrap/glenwood-fishing-site/flow-thresholds.csv): per-gauge flow category thresholds
- [camera-feeds.json](/c:/Users/andja/Mousetrap/glenwood-fishing-site/camera-feeds.json): buffered USGS and CoTrip camera feed definitions
- [access-points-model.csv](/c:/Users/andja/Mousetrap/glenwood-fishing-site/access-points-model.csv): prototype modeling metadata
- [fishing-locations.csv](/c:/Users/andja/Mousetrap/glenwood-fishing-site/fishing-locations.csv): future estimated fishing locations
- [fishing-location-model.csv](/c:/Users/andja/Mousetrap/glenwood-fishing-site/fishing-location-model.csv): prototype estimation rules for fishing spots
- [temp-methods.csv](/c:/Users/andja/Mousetrap/glenwood-fishing-site/temp-methods.csv): prototype temperature-method definitions

## Cache Folders

- [camera-cache](/c:/Users/andja/Mousetrap/glenwood-fishing-site/camera-cache): buffered stills, timelapses, and metadata used by the site
- [special-data-cache](/c:/Users/andja/Mousetrap/glenwood-fishing-site/special-data-cache): locally cached special datasets like Ruedi reservoir history and latest values

## Update Scripts

- [Update-All-USGS-Timelapses.cmd](/c:/Users/andja/Mousetrap/glenwood-fishing-site/Update-All-USGS-Timelapses.cmd): refresh buffered USGS camera feeds
- [Update-Ruedi-Reservoir-Data.cmd](/c:/Users/andja/Mousetrap/glenwood-fishing-site/Update-Ruedi-Reservoir-Data.cmd): refresh full official Ruedi history CSV and latest JSON cache
- [scripts](/c:/Users/andja/Mousetrap/glenwood-fishing-site/scripts): underlying PowerShell scripts used by the `.cmd` launchers

## Notes

- Live USGS flow, temperature, and turbidity are fetched in the browser.
- Camera feeds and Ruedi reservoir data are buffered locally first, then served by the site.
- One-off research and reverse-engineering files were moved into [docs/research](/c:/Users/andja/Mousetrap/glenwood-fishing-site/docs/research) to keep the project root tidy.
