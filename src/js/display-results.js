export default function(result = [], container) {
  if (result.length === 0) {
    return container.innerHTML = `<center>Oops! Albert searched high and low but couldn't find any results</center>`;
  }

  let resultStream = ``;
  result.forEach((item) => {
    resultStream += `
    <div class='search-result-item'>
      <div class='search-result-item-title'>${item.title}</div>
      <div class='search-result-item-price'>${item.currency} ${item.price}</div>
    </div>`;
  });

  if (container) {
    container.innerHTML = resultStream;
  }
}
