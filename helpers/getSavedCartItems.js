const getSavedCartItems = () => {
  try {
  return (localStorage.getItem('cartItems'));
  } catch (erro) {
    console.log(erro);
  }
  // seu código aqui precisa colocar entro de um try catch;
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
