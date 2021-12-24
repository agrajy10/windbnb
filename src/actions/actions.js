import axios from 'axios';

export const fetchStays = async () => {
  try {
    const { data } = await axios.get('http://localhost:5000/stays');
    return [data, null];
  } catch (error) {
    return [null, error.message];
  }
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
