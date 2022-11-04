export const getToday = () => {
  const date = new Date();
  const yyyy = date.getFullYear();
  const mm = date.getMonth() + 1;
  const dd = date.getDate();
  const createdAt = `${yyyy}-${String(mm).padStart(2, "0")}-${String(
    dd
  ).padStart(2, "0")}`;
  return createdAt;
};
