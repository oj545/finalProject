export const isUserExist = (users, userName, password) => {
  const currentUser = users.find(
    (item) => item.password === password && item.userName === userName
  );
  return currentUser;
};
