export const isWeekend = (date) => {
  const day = date.day();

  return day === 0 || day === 6;
};

export const isSunday = (dateString) => {
  const selectedDate = new Date(dateString);
  return selectedDate.getDay() === 6;
};
