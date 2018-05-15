import { initialTemplate } from './template';
import { ElementIds } from './constants';
import searchQuery from './search-query';
import displayResults from './display-results';
import '../less/main.less';

document.body.innerHTML = initialTemplate;

const submitBtn = document.getElementById(ElementIds.INPUT_SUBMIT);
const searcBox = document.getElementById(ElementIds.INPUT_SEARCH);
const resultContainer = document.getElementById(ElementIds.CONTAINER_RESULTS);

if (submitBtn) {
  submitBtn.addEventListener('click', () => {
    const searchText = searcBox && searcBox.value;
    searchQuery(searchText)
      .then((results) => {
        displayResults(results, resultContainer);
      }, (err) => {
        console.log(err);
      });
  });
}

// Enter key pressed will be treated as form submit
if (searcBox) {
  searcBox.addEventListener('keyup', (event) => {
    event.preventDefault();
    if (event.keyCode === 13) {
      submitBtn && submitBtn.click();
    }
  });
}
