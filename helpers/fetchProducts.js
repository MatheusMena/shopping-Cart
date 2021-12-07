const fetchProducts = async (product) => {
try {
  const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${product}`);
  const data = await response.json();
  return data.results;
} catch (erro) {
  console.log(erro);
}
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
