# React readability and article components

React components Article and Readability
with flex configuration and wide range of the web-typography features

## Article Features

- Browsers: Firefox read view (@todo  SSR support)
- CSS3: Flexible typography settings
- CSS3: prefers-color-scheme support
- CSS3: ligature support
- Mobile: Dynamic reponsive view (depended of the container width calculations)
- Data: microformats support

## Readability Configuration Panel Features

- crossbrowser full screen support
- enlarged text and layout by REM
- night theme



## Components

- Article
- Readability


## Additional React Libraries

| Title             | Library                              |
|-------------------|--------------------------------------|
| ~~Pug support~~   | ~~babel-plugin-transform-react-pug~~ |
| Styled Components | styled-components                    |

- https://github.com/pugjs/babel-plugin-transform-react-pug
- https://www.styled-components.com/


### Article Component
HTML template SEO optimized by schema.org and microformats


### Readability Component
Readability Configuration Parameters by Popup


## Basic CSS Variables (app/style.js)

| Variable          | Default | Description                  |
|-------------------|---------|------------------------------|
| --golden-ratio    | 1.618   | Golden Ratio                 |
| --cpl             | 25      | Character Per Line (25 - 90) |
| --basic-font-size | 62.5%   | For REM calculations         |


## Web Typography Formulas

- Line Height = Font Size * Golden Ratio
- Container Width = CPL * Line Height


## CSS Classes Scope

| Scope                       | Classes                                              |
|-----------------------------|------------------------------------------------------|
| Browser Readers (+ Firefox) | entry-content, entry-header, entry-title, entry-data |
| Microformats "h-entry"      | e-content                                            |
| Shema                       | name, description, articleBody                       |


## Preferences

- http://microformats.org/wiki/h-entry
- https://schema.org/Article
- https://www.readability.com/index.html
- https://www.flaticon.com/packs/essential-set-2
- https://github.com/sindresorhus/screenfull.js


## Todo

- readability: themes (Light | Dark | Sepia)
- readability: line-height configuration
- readability: content-width configuration
- readability: font-size configuration
- readability: print view and print button
- readability: San-serif / Serif Fonts
- readability: no images
- readability: audio commands
- readability: pdf support (https://medium.com/@shivekkhurana/how-to-create-pdfs-from-react-components-client-side-solution-7f506d9dfa6d)
- CSS3 ligature on / off
- readability: Narrate button
- article: html5 video support ( + youtube )
- technical: server-side content generation
- technical: Pug support
- technical: PWA support
- technical: CSS3 / JS browsers compatibility configuration