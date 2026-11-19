# Finish! Upload Your Resume

React + Vite page for the frontend exercise.

The frame comes from the public Figma file [前端工程师（实习）](https://www.figma.com/design/D0jjN7Twkq0DGm3ZJvQabz). Anonymous access only exposes the file thumbnail (`design/figma-thumbnail.webp`), so the layout, colors, and large labels were read from that thumbnail. The small gray lines were recovered from the same image. A reference copy of the thumbnail is in `design/`.

## What the frame contains

- Left column: heading **Finish!** / **Upload Your Resume**, a short gray explanation, and an illustration of a blue cat, a phone, two chat bubbles, and a leaf.
- Right card: title **Upload file**, a dashed drop zone, **Last step** (light blue) and **Finish** (solid `#005aff`), and a three-dot progress mark.
- Page background `#f7f8fa`, card white with a soft shadow, drop zone `#eff9ff`.

The illustration is redrawn as SVG so it stays sharp. It follows the thumbnail’s composition rather than embedding the blurry preview.

## Run

```text
npm install
npm run dev
```

`npm run build` writes the static site to `dist/`.

## Behavior

The empty state matches the frame. Choosing or dropping a PDF, DOC, or DOCX file replaces the hint with the file name. **Finish** confirms the selected file. **Last step** clears the selection, because the Figma file only contains this one frame. Other file types are rejected in place.
