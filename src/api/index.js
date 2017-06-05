/*eslint-disable*/
import { fetchPost, fetchGet } from '../utils/fetch.js';

let url = {
  keyWordsList: '/sentiment/keyword/allkws.do',
};

class Api {
  static keyWordsList(data) {
    return fetchPost(url.keyWordsList, data)
  }
}

export default Api