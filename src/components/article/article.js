import React, { Component } from 'react';
import { Article } from './styles';

/**
 * Article Component
 */
export default class ArticleBox extends Component {
  render() {
    return (
      <Article className="article entry-content ligature">
        <header className="entry-header" itemScope itemType="http://schema.org/Article">
          <h1 className="entry-title" itemProp="name">Header</h1>
          <p className="entry-summary" itemProp="description"><strong>Summary subtitle</strong></p>

          <div className="entry-meta">
            <p itemProp="author" className="p-author"> John Doe </p>
            <time className="dt-published" dateTime="2013-06-13 12:00:00" itemProp="datePublished">12<sup>th</sup> February 2019</time>
          </div>

        </header>
        <div className="entry-data e-content" itemProp="articleBody">
          <p>Igature Test: fi fl ff fb ffb fh ffh ffi fj ffj fk ffk fl st ct</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit numquam iure maxime assumenda, et maiores, fugiat necessitatibus asperiores aliquid eligendi, eos similique sequi modi mollitia. Quo maxime sed magni quisquam.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit numquam iure maxime assumenda, et maiores, fugiat necessitatibus asperiores aliquid eligendi, eos similique sequi modi mollitia. Quo maxime sed magni quisquam.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit numquam iure maxime assumenda, et maiores, fugiat necessitatibus asperiores aliquid eligendi, eos similique sequi modi mollitia. Quo maxime sed magni quisquam.</p>
        </div>
      </Article>
    );
  }
}