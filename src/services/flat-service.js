export default class FlatService {
  // async getArticle(url) {
  //   const res = await fetch(url);

  //   if (!res.ok) {
  //     throw new Error(`Could not fetch ${url}, received ${res.status}`);
  //   }

  //   return await res.text();
  // }

  getDumpSpeech() {
    return `
      Title: Header.
      Subtitle: Summary subtitle.
      Author: John Doe.
      Date: 12, February, 2019
      Article Content:
      Chapter 1: Basic Typography calculations + ligature.
      Igature Test: fi fl ff fb ffb fh ffh ffi fj ffj fk ffk fl st ct.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. etc.
      Chapter 2: Advanced Typography Features with Font Metrics
      Lorem ipsum dolor sit amet consectetur adipisicing elit. etc.
      Subtitle: List Example
      List Item 1: Coffee
      List Item 2: Tea
      List Item 3: Milk
    `;
  }
}