const categoriesEl = document.querySelector('#categories');
const itemsEl = categoriesEl.querySelectorAll('.item');
console.log(`Number of categories: ${itemsEl.length}`);

itemsEl.forEach(item => {
  const titleEl = item.querySelector('h2').textContent;
  const elementsEl = item.querySelectorAll('li').length;
  console.log(`Category: ${titleEl} 
Elements: ${elementsEl}`);
});
