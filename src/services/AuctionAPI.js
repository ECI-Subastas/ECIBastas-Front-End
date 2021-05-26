export const getAllAuctions = () => {
  return fetch(`https://ecibastas-app.herokuapp.com/subasta/subastas`).then(
    (res) => {
      if (!res.ok) throw new Error("Response is NOT ok");
      return res.json();
    }
  );
};

export const getAllUserAuctions = (userId) => {
  return fetch(
    `https://ecibastas-app.herokuapp.com/auction/userAuctions?userId=${userId}`
  ).then((res) => {
    return res.json();
  });
};
