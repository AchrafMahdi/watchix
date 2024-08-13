import PosterCard from "./PosterCard";

const DetailedCard = ({ title, img, overview, rating, release_date }) => {
  return (
    <div className="max-w-64 md:max-w-full overflow-hidden">
      <PosterCard image={img} size="massive" />
      <h1 className="font-medium text-base md:text-xl max-w-72 mt-1  break-all line-clamp-1">
        {title}
      </h1>
      <div className="h-16 overflow-hidden">
        <p className="text-sm  line-clamp-3 truncate whitespace-normal">
          {overview}
        </p>
      </div>
      <span className="text-xs font-light inline-flex items-center gap-2 flex-row w-full mt-2">
        {new Date(release_date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
        <span className="border border-border inline-flex justify-center items-center px-1 uppercase">
          u/A 13+
        </span>
      </span>
    </div>
  );
};

export default DetailedCard;
