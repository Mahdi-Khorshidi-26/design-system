function getDataFromLocalStorage({ key }: { key: string }) {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
}
export default getDataFromLocalStorage;
