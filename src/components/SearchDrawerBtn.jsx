function SearchDrawerBtn() {
  return (
    <button className="bg-white rounded-2xl text-sm text-center leading-none font-medium shadow w-80 flex items-center justify-start">
      <span className="text-zinc-400 flex-1 border-r border-r-gray-100 py-4">Add location</span>
      <span className="text-zinc-400 flex-1 border-r border-r-gray-100 py-4">Add guests</span>
      <span className="w-14 flex-shrink-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="h-4 w-4 mx-auto stroke-orange-600">
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