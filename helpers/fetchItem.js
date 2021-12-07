const fetchItem = async (id) => {
  try {
    const response = await fetch(`https://api.mercadolibre.com/items/${id}`);
    const data = await response.json();
    return data;
  } catch (erro) {
    console.log(erro);
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
