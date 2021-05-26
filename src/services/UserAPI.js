export const getUserByEmail = (email) => {
  return fetch(
    `https://ecibastas-app.herokuapp.com/user/email?value=${email}`
  ).then((res) => {
    if (!res.ok) throw new Error("Response is NOT FOUND");
    return res.json();
  });
};

export const getUserIdByEmail = (email) => {
  return fetch(
    `https://ecibastas-app.herokuapp.com/user/id?email=${email}`
  ).then((res) => {
    return res.json();
  });
};

export const getCreditByUserId = (id) => {
  return fetch(
    `https://ecibastas-app.herokuapp.com/user/credit?userId=${id}`
  ).then((res) => {
    return res.json();
  });
};

export const getNicknameByUserId = (id) => {
  return fetch(
    `https://ecibastas-app.herokuapp.com/user/nickname/userId?value=${id}`
  ).then((res) => {
    return res.json();
  });
};
