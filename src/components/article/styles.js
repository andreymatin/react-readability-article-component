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
  text-transform: uppercase;

  padding: 5rem 0 0;
  margin: 0;
}

.entry-summary {
  padding: 0;
  margin: 0;
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
