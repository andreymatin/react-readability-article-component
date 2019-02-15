import React, { Component } from 'react';

// Components
import ArticleBox from '../article';
import Readability from '../readability';

// Global CSS
import { GlobalStyle } from './styles';

export default class App extends Component {
  render() {
    return (
      <main role="main">
        <GlobalStyle />
        <Readability />
        <ArticleBox />
      </main>
    );
  }
}
