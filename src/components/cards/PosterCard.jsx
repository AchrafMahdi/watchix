const PosterCard = ({
  image,
  title,
  size = "big",
  src = "https://image.tmdb.org/t/p/w500",
}) => {
  const sizes = {
    big: "w-36 h-52 md:w-52 md:h-72",
    small: "w-40 h-26 md:w-56 md:h-32 ",
    massive: "w-56 h-32 md:w-72 md:h-40",
  };

  return (
    <div
      className={`relative ${
        sizes[size] || sizes["big"]
      } bg-gray-500 rounded-md overflow-hidden`}
    >
      <div className="rounded-md overflow-hidden relative">
        <img
          className="w-full h-full object-cover"
          src={`${src + image}`}
          alt={title + " poster"}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
      <span className="text-sm absolute bottom-3 left-3 text-gray-50 font-semibold line-clamp-1">
        {title}
      </span>
    </div>
  );
};

export default PosterCard;
