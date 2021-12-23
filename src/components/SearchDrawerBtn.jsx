import PropTypes from 'prop-types';

function SearchDrawerBtn({ openModal }) {
  return (
    <button
      onClick={openModal}
      className="bg-white rounded-2xl text-sm text-center leading-none font-medium shadow w-full max-w-xs sm:mx-0 mx-auto flex items-center justify-start">
      <span className="text-zinc-400 flex-1 border-r border-r-gray-100 py-4">Add location</span>
      <span className="text-zinc-400 flex-1 border-r border-r-gray-100 py-4">Add guests</span>
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

SearchDrawerBtn.propTypes = {
  openModal: PropTypes.func
};

export default SearchDrawerBtn;
