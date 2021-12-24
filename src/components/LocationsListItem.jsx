import PropTypes from 'prop-types';
import { useContext } from 'react';
import AppContext from '../context/context';

function LocationsListItem({ city, country }) {
  const { dispatch } = useContext(AppContext);

  return (
    <li>
      <button
        onClick={() =>
          dispatch({
            type: 'SET_LOCATION',
            payload: {
              city,
              country
            }
          })
        }
        type="button"
        className="flex items-center justify-start gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 stroke-zinc-700"
          fill="none"
          viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
        {`${city}, ${country}`}
      </button>
    </li>
  );
}

LocationsListItem.propTypes = {
  city: PropTypes.string,
  country: PropTypes.string
};

export default LocationsListItem;
