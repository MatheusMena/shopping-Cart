const sections = document.querySelector('.items');
const cartItems = document.querySelector('.cart__items');
function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

function getSkuFromProductItem(event) {
  return event.querySelector('span.item__sku').innerText;
}

 function cartItemClickListener(event) {
    event.addEventListener('click', () => {
       cartItems.removeChild(event);
    });
  }

function createCartItemElement({ sku, name, salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', () => cartItems.appendChild(li));
  cartItemClickListener(li);
  return li;
}
 const addCart = async (sku) => {
   const itemResult = await fetchItem(sku);
   const { id, title, price } = itemResult;
   const cartItem = createCartItemElement({
     sku: id,
     name: title,
     salePrice: price,
   });
  document.querySelector('.cart__items').appendChild(cartItem);
  };
 
function createProductItemElement({ id: sku, title: name, thumbnail: image }) {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  const button = createCustomElement('button', 'item__add', 'Adicionar ao carrinho!');
  button
  .addEventListener('click', ({ target }) => {
  addCart(getSkuFromProductItem(target.parentNode));
  });
  section.appendChild(button);
  sections.appendChild(section);
  return section;
}

window.onload = async () => {
   const data = await fetchProducts('computador'); 
    await data.map((item) => createProductItemElement(item));
};
