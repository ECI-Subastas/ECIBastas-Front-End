export const getAllProducts = (subastaId) => {
  return fetch(
    `https://ecibastas-app.herokuapp.com/product/ProductsBySubasta?subastaid=${subastaId}`
  ).then((res) => {
    return res.json();
  });
};
