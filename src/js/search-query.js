import { tours } from '../data/data.json';

export default function (value) {
  return new Promise((resolve, reject) => {
    if (value && value.length > 1) {
      /* *
      * TODO
      * Implement wildcard searchText
      * Best match should come first
      * */
      const results = tours.filter(item => item.title.toLowerCase().indexOf(value.toLowerCase()) > -1);
      resolve(results);
    } else {
      reject('Invalid query');
    }
  });
}
