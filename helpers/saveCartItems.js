const saveCartItems = (cartItemsHTML) => localStorage.setItem('cartItems', cartItemsHTML);

// json.stringify tranforma o objeto em um json e parse para recuperar sem string
if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
