import { useContext } from 'react';
import AppContext from '../context/context';
import LocationsListItem from './LocationsListItem';

function LocationsList() {
  const { isLoading, stays } = useContext(AppContext);
  let locations = [];
  if (!isLoading) {
    for (const stay of stays) {
      const obj = { city: stay.city, country: stay.country };
      const found = locations.some((location) => location.city === obj.city);
      if (!found) {
        locations.push(obj);
      }
    }
  }
  return (
    <ul className="pl-6 text-sm text-zinc-700 space-y-6 md:space-y-9">
      {!isLoading &&
        locations.map((location, index) => <LocationsListItem key={index} {...location} />)}
    </ul>
  );
}

export default LocationsList;
