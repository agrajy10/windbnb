import { createPortal } from 'react-dom';

function SearchModal({ children, open, onClose }) {
  if (!open) {
    return null;
  }
  return createPortal(
    <>
      <div className="fixed inset-0 bg-zinc-800 bg-opacity-40 z-20"></div>
      <div className="fixed top-0 left-0 bg-white pt-11 pb-20 md:py-16 lg:py-24 z-50 w-full">
        <button
          onClick={onClose}
          className="w-7 h-7 inline-flex items-center justify-center absolute top-2 right-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="max-w-7xl mx-auto px-3 relative">{children}</div>
      </div>
    </>,
    document.getElementById('searchModal')
  );
}

export default SearchModal;