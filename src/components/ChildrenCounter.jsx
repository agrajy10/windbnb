import PropTypes from 'prop-types';

function ChildrenCounter({ value, increaseFunc, descreaseFunc }) {
  return (
    <>
      <label
        htmlFor="children_count"
        className="block leading-none font-semibold text-sm text-zinc-800">
        Children
      </label>
      <span className="text-zinc-300 text-sm mb-3 block">Ages 2-12</span>
      <div className="flex items-center justify-start">
        <button
          type="button"
          onClick={increaseFunc}
          className="w-6 h-6 border border-zinc-400 text-zinc-700 rounded bg-white inline-flex items-center justify-center hover:bg-zinc-700 hover:text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </button>
        <input
          value={value}
          type="text"
          id="children_count"
          className="text-center w-14 h-6 focus:outline-none"
          readOnly
        />
        <button
          type="button"
          onClick={descreaseFunc}
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
    </>
  );
}

ChildrenCounter.propTypes = {
  value: PropTypes.number,
  increaseFunc: PropTypes.func,
  descreaseFunc: PropTypes.func
};

export default ChildrenCounter;
