import { useContext } from 'react';
import AppContext from '../context/context';

function SearchDrawerBtn() {
  const { city, country, adults, children, dispatch } = useContext(AppContext);

  return (
    <button
      onClick={() => dispatch({ type: 'OPEN_MODAL' })}
      className="bg-white rounded-2xl text-sm text-center leading-none font-medium shadow w-full max-w-[22rem] sm:mx-0 mx-auto flex items-center justify-start">
      {city && country ? (
        <span className="text-zinc-800 flex-1 border-r border-r-gray-100 py-4 px-2">
          {`${city}, ${country}`}
        </span>
      ) : (
        <span className="text-zinc-400 flex-1 border-r border-r-gray-100 py-4 px-2">
          Add location
        </span>
      )}
      {adults + children ? (
        <span className="text-zinc-800 flex-1 border-r border-r-gray-100 py-4 px-2">
          {adults + children}
        </span>
      ) : (
        <span className="text-zinc-400 flex-1 border-r border-r-gray-100 py-4 px-2">
          Add guests
        </span>
      )}
      <span className="w-14 flex-shrink-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="h-4 w-4 mx-auto stroke-red-500">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </span>
    </button>
  );
}

export default SearchDrawerBtn;
