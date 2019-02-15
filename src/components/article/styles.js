import styled from 'styled-components';

export const Article = styled.article`
/**
 * Article
 */
.entry-header {
  padding: 0 0 0.5rem;
}

.entry-title {
  font-size: var(--header-font-size);
  font-family: var(--header-font-family);
  line-height: var(--header-font-size);
  letter-spacing: var(--letter-spacing);
  word-spacing: var(--word-spacing);
  padding: 5rem 0 0;
  margin: 0;
}

.entry-summary {
  padding: 0;
  margin: 0;
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

.entry-data p+.entry-data p {
  margin-top: var(--entry-spacer);
}

.entry-meta {
  font-size: var(--entry-meta-font-size);
  padding: 1rem;
  margin: 2rem 0;
  background: #eee;
}

.entry-meta p {
  padding: 0;
  margin: 0;
}

`;
