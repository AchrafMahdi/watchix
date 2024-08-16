import PosterCard from "@/components/cards/PosterCard";
import PaginationControls from "@/components/pagination/PaginationControls";
import { MoviesApiCalls } from "@/lib/utils";
import Link from "next/link";

export const generateMetadata = async ({ params }) => {
  const { genre } = params;
  return {
    title: `${genre.charAt(0).toUpperCase() + genre.slice(1)} Movies | Watchix`,
    description: `Explore a wide range of ${genre} movies on Watchix. Discover top-rated films, hidden gems, and latest releases in the ${genre} genre.`,
  };
};

const MoviesByGenre = async ({ params, searchParams }) => {
  const genre = params["genre"].replace(/%20/g, " ");
  const page = searchParams["page"] || 1;
  let movies = null;

  if (genre) {
    movies = await MoviesApiCalls.getMovieByGenre(genre, parseInt(page));
  } else {
    movies = await MoviesApiCalls.trending();
  }

  return (
    <div className="mt-24 px-6 flex flex-col gap-y-2 justify-center items-center py-2">
      {movies !== null ? (
        <>
          <div className="self-start md:pl-16">
            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
              Explore {genre} movies.
            </h4>
          </div>
          <div className="flex flex-row flex-wrap gap-3 md:w-[90%] mx-auto">
            {movies !== null &&
              movies.results.map((movie) => (
                <Link key={movie.id} href={`/movie/${movie.id}`}>
                  <PosterCard
                    image={movie.poster_path}
                    size="big"
                    title={movie.title}
                  />
                </Link>
              ))}
          </div>
          <PaginationControls totalPages={movies.total_pages} />
        </>
      ) : (
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
          No results for {`"${genre}"`}.
        </h4>
      )}
    </div>
  );
};

export default MoviesByGenre;
