export const checkDuplication = (arr, id) => {
  const isIdExist = arr.some((item) => item === id);
  return isIdExist;
};
