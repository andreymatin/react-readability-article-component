import React, { Component } from 'react';

// Components
import ArticleBox from '../article';
import Readability from '../readability';


// Global CSS
import { GlobalStyle } from './styles';

export default class App extends Component {
  state = {
    speech: null,
    content: null,
    loading: true
  }

  render() {
    return (
      <React.Fragment>
        <GlobalStyle />
        <Readability />
        <ArticleBox />
      </React.Fragment>
    );
  }
}
