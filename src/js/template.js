import { ElementIds } from './constants';

export const initialTemplate = `
  <div id='container'>
    <h1>Get Your Guide</h1>
    <div id='${ElementIds.CONTAINER_FORM}'>
      <input id='${ElementIds.INPUT_SEARCH}' type='search' placeholder='Type your attraction...' />
      <input id='${ElementIds.INPUT_SUBMIT}' type='submit' value='Search' />
    </div>
    <div id='${ElementIds.CONTAINER_RESULTS}'> </div>
  </div>
`;
