# Design sources

- `reference.png` — the 722×1024 design the home page is a 1:1 copy of. Every
  dimension in `src/pages/HomePage.css` is expressed in `--u` (1/722 of the page
  width) and was measured from this image.
- `segments/` — the artwork cut from a higher-resolution version of the same
  design (hero robot, specs robot pieces, wire-frame head/body, hats, logo,
  search icon). `segments.zip` is the untouched original archive.

Most segments are at 1.65× the reference scale; the NPU card's hat/head are at
2.0×. The page-ready composites in `public/seg-*.png` were built from these:

| public asset            | source segments                                                    |
| ----------------------- | ------------------------------------------------------------------ |
| `seg-hero-robot.png`    | `full-body-robot/full-body-robot-3.png`                            |
| `seg-specs-robot.png`   | `straw-hat-2`, `full-body-robot-1`, `red-plaid-shirt-2`, `blue-overalls-1` |
| `seg-npu-head.png`      | `straw-hat-3`, `robot-head-3` + neck cut from `reference.png`      |
| `seg-sw-body.png`       | `full-body-robot/full-body-robot-4.png`                            |
| `seg-logo.png`          | `logo/logo-1.png`                                                  |
| `seg-search.png`        | `search-icon.png`                                                  |
| `seg-hand.png`          | cut directly from `reference.png` (no segment exists)              |
