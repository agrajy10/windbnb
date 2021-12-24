import { useContext } from 'react';
import LocationsList from './LocationsList';
import AppContext from '../context/context';
import { filterStays } from '../actions/actions';
import AdultsCounter from './AdultsCounter';
import ChildrenCounter from './ChildrenCounter';

function SearchForm() {
  const { stays, adults, children, city, country, isLocationsOpen, isGuestsOpen, dispatch } =
    useContext(AppContext);

  return (
    <>
      <div className="md:flex md:items-center md:justify-start md:gap-4 md:mb-11">
        <div
          onClick={() =>
            dispatch({
              type: 'OPEN_LOCATIONS'
            })
          }
          className={`md:flex-1 bg-white rounded-tl-2xl rounded-tr-2xl md:rounded-2xl shadow leading-none py-3 px-6 cursor-pointer border ${
            isLocationsOpen ? 'border-zinc-800' : 'border-white'
          }`}>
          <span className="block mb-1 font-extrabold text-[0.5625rem] uppercase text-zinc-800">
            Location
          </span>
          {city && country ? (
            <span className="text-sm text-zinc-800">{`${city}, ${country}`}</span>
          ) : (
            <span className="text-sm text-zinc-400">Add location</span>
          )}
        </div>
        <div
          onClick={() =>
            dispatch({
              type: 'OPEN_GUESTS'
            })
          }
          className={`md:flex-1 bg-white rounded-bl-2xl rounded-br-2xl md:rounded-2xl shadow leading-none py-3 px-6 mb-9 md:mb-0 cursor-pointer border ${
            isGuestsOpen ? 'border-zinc-800' : 'border-white'
          }`}>
          <span className="block mb-1 font-extrabold text-[0.5625rem] uppercase text-zinc-800">
            Guests
          </span>
          {adults + children ? (
            <span className="text-sm text-zinc-800">{adults + children}</span>
          ) : (
            <span className="text-sm text-zinc-400">Add guests</span>
          )}
        </div>
        <button
          type="button"
          onClick={() => {
            const result = filterStays(stays, city, country, adults, children);
            dispatch({
              type: 'SET_FILTERED_STAYS',
              payload: result
            });
            dispatch({
              type: 'CLOSE_MODAL'
            });
          }}
          className="absolute bottom-0 md:left-0 md:translate-x-0 left-2/4 -translate-x-2/4 md:static md:flex-shrink-0 w-32 h-12 inline-flex items-center justify-center rounded-2xl bg-red-500 hover:bg-red-600 transition text-white text-sm font-medium">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="h-4 w-4 mr-2 stroke-white">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          Search
        </button>
      </div>
      <div className="md:flex md:items-start md:justify-start md:gap-4 md:min-h-0 min-h-[20rem]">
        <div className="flex-1">{isLocationsOpen && <LocationsList />}</div>
        <div className="flex-1 md:space-y-9 space-y-7">
          {isGuestsOpen && (
            <>
              <div className="pl-6">
                <AdultsCounter
                  value={adults}
                  increaseFunc={() => dispatch({ type: 'INCREASE_ADULTS' })}
                  descreaseFunc={() => {
                    if (adults) {
                      dispatch({
                        type: 'DECREASE_ADULTS'
                      });
                    }
                  }}
                />
              </div>
              <div className="pl-6">
                <ChildrenCounter
                  value={children}
                  increaseFunc={() => dispatch({ type: 'INCREASE_CHILDREN' })}
                  descreaseFunc={() => {
                    if (children) {
                      dispatch({
                        type: 'DECREASE_CHILDREN'
                      });
                    }
                  }}
                />
              </div>
            </>
          )}
        </div>
        <div className="w-32 flex-shrink-0"></div>
      </div>
    </>
  );
}

export default SearchForm;
