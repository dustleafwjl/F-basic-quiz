const ajax = async (url) => {
  const fetchData = await fetch(url);
  const result = await fetchData.json();
  return result;
};

export default ajax;
