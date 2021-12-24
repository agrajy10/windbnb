export const fetchStays = async () => {
  const response = await fetch('http://localhost:5000/stays');
  const data = await response.json();
  return data;
};

export const filterStays = (stays, city, country, adults, children) => {
  let results = stays;
  const guests = adults + children;
  if (city && country) {
    results = stays.filter((stay) => stay.country === country && stay.city === city);
  }
  if (guests) {
    results = results.filter((stay) => guests <= stay.maxGuests);
  }
  return results;
};
