export const fetchStays = async () => {
  const response = await fetch('http://localhost:5000/stays');
  const data = await response.json();
  return data;
};
