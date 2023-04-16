export const formatDate = (time) => {
  const date = new Date(time);
  return ` ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
};

export const comperDate = (time, date) => {
  const date1 = new Date(time);
  const date2 = new Date(date);
  const fistDate =
    date1.getFullYear() + (date1.getMonth() + 1) + date1.getDate();
  const secondDate =
    date2.getFullYear() + (date2.getMonth() + 1) + date2.getDate();

  return fistDate === secondDate;
};
