# React readability and article components

## Header with custom ID {: #custom_id }


React components Article and Readability
with flex configuration and wide range of the web-typography features

## Article Features

- Browsers: Firefox read view (@todo  SSR support)
- Devices: iPhone Reader View support

![iPhone Reader View](https://i.imgur.com/0gWdTLql.png)

- CSS3: Flexible typography settings
- CSS3: prefers-color-scheme support
- CSS3: ligature support
- Mobile: Dynamic reponsive view (depended of the container width calculations)
- SEO: microformats support
- Accessibility roles

## Readability Features

- crossbrowser full screen support
- enlarged text and layout by REM
- night theme
- speech API
- fetch API


## Components

- Article
- Readability
- ErrorHandler


## Additional React Libraries

| Title             | Library                              |
|-------------------|--------------------------------------|
| ~~Pug support~~   | ~~babel-plugin-transform-react-pug~~ |
| Styled Components | styled-components                    |

- https://www.styled-components.com/


## Article Component
HTML template SEO optimized by schema.org and microformats

- ./components/app/style.js

#### Basic CSS Variables

| Variable          | Default | Description                  |
|-------------------|---------|------------------------------|
| --golden-ratio    | 1.618   | Golden Ratio                 |
| --cpl             | 25      | Character Per Line (25 - 90) |
| --basic-font-size | 62.5%   | For REM calculations         |


#### Basic Typography Parameters

```css
:root {
  /* 	Miscellaneous Constants */
  --golden-ratio: ${goldenRatio};
  --cpl: ${cpl};

  /* Font */
  --basic-font-size: 62.5%;

  --header-font-family: Impact, Helvetica, sans-serif;
  --header-font-size: 5rem;
  /* --header-line-height: calc(var(--header-font-size) * var(--golden-ratio)); */

  --entry-font-family: Calibri, 'Times New Roman', serif;
  --entry-font-size: ${entryFontSize}rem;
  --entry-spacer: 2rem;
  --entry-line-height: ${entryLineHeigh}rem;

  --entry-meta-font-size: 1.8rem;

  --word-spacing: 0.05rem;
  --letter-spacing: -0.03rem;

  /* Container */
  --container-width: ${containerWidth}rem;

  /* Mobile */
  --screen-padding: 0 2rem;
}
```

#### Advanced Typography Parameters

```css
.typo-features {
  /* font metrics */
  --font: Calibri;
  --fm-emSquare: 1;
  --fm-capitalHeight: 0.68;
  --fm-descender: 0.54;
  --fm-ascender: 1.1;
  --fm-linegap: 0;

  /* compute needed values */
  --lineheightNormal: (var(--fm-ascender) + var(--fm-descender) + var(--fm-linegap));
  --distanceBottom: (var(--fm-descender));
  --distanceTop: (var(--fm-ascender) - var(--fm-capitalHeight));
  --contentArea: (var(--lineheightNormal) * var(--computedFontSize));
  --valign: ((var(--distanceBottom) - var(--distanceTop)) * var(--computedFontSize));
  --computedFontSize: (var(--capital-height) / var(--fm-capitalHeight));
  --computedLineheight: ((var(--line-height) * var(--capital-height)) - var(--valign));

  /* desired capital height and line-height */
  --capital-height: ${entryFontSize}rem;
  --line-height: var(--entry-line-height);

  /* set font family */
  font-family: var(--font);

  /* set capital height to equal font-size */
  font-size: calc(var(--computedFontSize) * 1rem / 10);

  /* set computed line-height */
  line-height: calc(var(--computedLineheight) * 1rem / 10);

  text-align: justify;
  -webkit-hyphens: auto;
  -moz-hyphens: auto;
  -ms-hyphens: auto;
  hyphens: auto;
}
```


## Readability Component
Configuration Parameters for content, layout and browser




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
- https://opentype.js.org/font-inspector.html
- http://iamvdo.me/en/blog/css-font-metrics-line-height-and-vertical-align
- http://westonthayer.com/writing/intro-to-font-metrics/


## Todo

- [ ] readability: color modes (Light | Dark | Sepia)
- [ ] readability: line-height configuration
- [ ] readability: content-width configuration
- [ ] readability: font-size configuration
- [ ] readability: print view and print button
- [ ] readability: San-serif / Serif Fonts
- [ ] readability: no images
- [ ] readability: audio commands
- [ ] readability: pdf support
- [ ] article: CSS3 ligature on / off
- [ ] readability: Narrate button
- [ ] article: html5 video support ( + youtube )
- [ ] SEO: server-side content generation (SSR)
- [ ] app: themes and fonts
- [ ] app: Pug template engine support
- [ ] app: AMP support
- [ ] app: Flat / DB support
- [ ] app: react-app-rewired
- [ ] reader: export optimized content
- [ ] article: quotes
- [ ] article: slider
- [ ] article: asides
- [ ] article: footer structure (comments, pager navigation)
