import Ratings from './Ratings';

function Stay({ superHost, title, rating, type, photo }) {
  return (
    <article>
      <div className="w-full h-64 rounded-3xl overflow-hidden mb-4">
        <img src={photo} alt={`Photo of ${title}`} className="w-full h-full object-cover" />
      </div>
      <div className="flex items-center justify-start h-7 mb-3">
        {superHost && (
          <span className="inline-block mr-3 uppercase font-bold text-[0.625rem] md:text-[0.75rem] text-zinc-600 border border-zinc-600 px-2 py-1 rounded-[100px]">
            Super host
          </span>
        )}
        <span className=" text-[0.75rem] md:text-sm font-medium text-zinc-500">{type}</span>
        <Ratings ratings={rating} />
      </div>
      <h2 className="text-gray-700 font-semibold text-base">{title}</h2>
    </article>
  );
}

export default Stay;
