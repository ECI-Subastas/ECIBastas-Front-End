export const getAllProducts = (subastaId) => {
  return fetch(
    `https://ecibastas-app.herokuapp.com/product/ProductsBySubasta?subastaid=${subastaId}`
  ).then((res) => {
    if (!res.ok) throw new Error("Response is NOT ok");
    return res.json();
  });
};
