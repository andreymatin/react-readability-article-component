import { createGlobalStyle } from "styled-components";

/**
 * Predefined Variables
 */
const cpl = 25;
const goldenRatio = 1.618;

// Calculations
const entryFontSize = 1.8;
const entryLineHeigh = entryFontSize * goldenRatio;
const containerWidth = cpl * entryLineHeigh;

/**
 * Main CSS
 */
export const GlobalStyle = createGlobalStyle`

/**
 * Variables
 */
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

/**
 * Reset
 */

*, *:after, *:before {
  box-sizing: border-box;
}

html,
body {
  margin: 0;
  padding: 0;
}

/**
 * Typography
 */
html {
  font-size: var(--basic-font-size);

  &.increase-font-size {
    font-size: 80%;
  }
}

body {
  font-family: var(--entry-font-family);
  font-size: var(--entry-font-size);
}

p,
q,
a,
li {
  line-height: var(--entry-line-height);
  letter-spacing: var(--letter-spacing);
  word-spacing: var(--word-spacing);
}

.ligature p {
  text-rendering: optimizeLegibility;
  -moz-font-feature-settings: "liga=1, dlig=1";
  -moz-font-feature-settings: "liga", "dlig";
  -ms-font-feature-settings: "liga", "dlig";
  -o-font-feature-settings: "liga", "dlig";
  -webkit-font-feature-settings: "liga", "dlig";
  font-feature-settings: "liga", "dlig";
  font-variant-ligatures: common-ligatures;
}

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


/**
 * Grid
 */
.container {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: var(--container-width);
}

/**
 * Themes
 */
.theme-night {
  background: #555;

  h1, p, q, li, a, h2, h3, h4, .dt-published {
    color: #fff;
  }

  .entry-meta {
    background: #222;
  }
}

/**
 * Browser Dark Scheme
 */
@media (prefers-color-scheme: dark) {
  .theme {
    background: #444;
    color: #fff;
  }
}

/**
 * Mobile Adaptation
 */
@media only screen and (max-width: ${containerWidth}rem) {
  body {
    padding: var(--screen-padding);
  }

  /* Readability config*/
  .config {
    left: auto;
    right: 0;

    .btn-fullscreen {
    display: none;
    }

    .btn-config-toggle {
      width: 100%;
      text-align: right;

      svg {
        width: 25px;
      }
    }
  }
}


/**
 * Smartphone
 */
@media only screen and (max-width: 640px) {
  /* Readability config*/
  .config {
    position: relative;
    width: 100%;
  }

  .btn-config  {
    width: 100%;
    text-align: left;
  }

}
`;