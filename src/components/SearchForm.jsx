function SearchForm() {
  return (
    <>
      <div className="md:flex md:items-center md:justify-start md:gap-4 md:mb-11">
        <div className="md:flex-grow bg-white rounde-tl-2xl rounded-tr-2xl md:rounded-2xl shadow leading-none py-3 px-6">
          <span className="block mb-1 font-extrabold text-[0.5625rem] uppercase text-zinc-800">
            Location
          </span>
          <span className="text-sm text-zinc-400">Add location</span>
        </div>
        <div className="md:flex-grow bg-white rounded-bl-2xl rounded-br-2xl md:rounded-2xl shadow leading-none py-3 px-6 mb-9 md:mb-0">
          <span className="block mb-1 font-extrabold text-[0.5625rem] uppercase text-zinc-800">
            Guests
          </span>
          <span className="text-sm text-zinc-400">Add guests</span>
        </div>
        <button
          type="button"
          className=" absolute bottom-4 md:left-0 md:translate-x-0 left-2/4 -translate-x-2/4 md:static md:flex-shrink-0 w-32 h-12 inline-flex items-center justify-center rounded-2xl bg-red-500 hover:bg-red-600 transition text-white text-sm font-medium">
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
        <ul className="flex-grow text-sm text-zinc-700 space-y-6 md:space-y-9">
          <li className="flex items-center justify-start gap-2">
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
            Helsinki, Finland
          </li>
          <li className="flex items-center justify-start gap-2">
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
            Helsinki, Finland
          </li>
        </ul>
        <div className="flex-grow md:space-y-9 space-y-7">
          <div>
            <label
              htmlFor="adults_count"
              className="block leading-none font-semibold text-sm text-zinc-800">
              Adults
            </label>
            <span className="text-zinc-300 text-sm mb-3 block">Ages 13 or above</span>
            <div className="flex items-center justify-start">
              <button
                type="button"
                className="w-6 h-6 border border-zinc-400 text-zinc-700 rounded bg-white inline-flex items-center justify-center hover:bg-zinc-700 hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </button>
              <input type="text" id="adults_count" className="text-center w-14 h-6" />
              <button
                type="button"
                className="w-6 h-6 border border-zinc-400 text-zinc-700 rounded bg-white inline-flex items-center justify-center hover:bg-zinc-700 hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                </svg>
              </button>
            </div>
          </div>
          <div>
            <label
              htmlFor="children_count"
              className="block leading-none font-semibold text-sm text-zinc-800">
              Children
            </label>
            <span className="text-zinc-300 text-sm mb-3 block">Ages 2-12</span>
            <div className="flex items-center justify-start">
              <button
                type="button"
                className="w-6 h-6 border border-zinc-400 text-zinc-700 rounded bg-white inline-flex items-center justify-center hover:bg-zinc-700 hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </button>
              <input type="text" id="children_count" className="text-center w-14 h-6" />
              <button
                type="button"
                className="w-6 h-6 border border-zinc-400 text-zinc-700 rounded bg-white inline-flex items-center justify-center hover:bg-zinc-700 hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="w-32 flex-shrink-0"></div>
      </div>
    </>
  );
}

export default SearchForm;
