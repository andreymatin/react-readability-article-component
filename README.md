# React readability article component

React component Article and Readability with wide web-typography features

## Features

- firefox read view
- CSS typography settings (app/style.js)
- deintegrated external HTML template ( 'html' folder below project for other frameworks)
- prefers-color-scheme
- CSS3 ligature
- microformats, schema support
- full screen
- enlarged text and layout by REM
- night theme


## Components

- Article
- Readability

### Article Component
HTML template SEO optimized by shema and microformats

### Readability Component
Readability Configuration Parameters by Popup


## Basic CSS Variables

| Variable          | Default | Description                  |
|-------------------|---------|------------------------------|
| --golden-ratio    | 1.618   | Golden Ratio                 |
| --cpl             | 25      | Character Per Line (25 - 90) |
| --basic-font-size | 62.5%   | For REM calculations         |


## Web Typography Formulas

Line Height = Font Size * Golden Ratio
Container Width = CPL * Line Height


## CSS Classes Scope

| Browser Readers (+ Firefox) | entry-content, entry-header, entry-title, entry-data |
| Microformats "h-entry"      | e-content                                            |
| Shema                       | name, description, articleBody                       |


## Preferences

http://microformats.org/wiki/h-entry
https://schema.org/Article
https://www.readability.com/index.html
https://www.flaticon.com/packs/essential-set-2
https://github.com/sindresorhus/screenfull.js
