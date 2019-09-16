export default class FlatService {
  getArticle = async (url) => {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, received ${res.status}`);
    }

    return await res.text();
  }

  getDumpSpeech = async () => {
    const url = 'https://raw.githubusercontent.com/andreymatin/react-readability-article-component/master/content/2019-02-12-atricle-raw.txt';
    const res = await this.getArticle(url);

    return res;
  }

}