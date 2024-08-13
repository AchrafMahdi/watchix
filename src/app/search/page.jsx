import PosterCard from "@/components/cards/PosterCard";
import { MoviesApiCalls } from "@/lib/utils";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export const generateMetadata = ({ searchParams }) => {
  const query = searchParams["title"] || "Movies"; // Default to "Movies" if no search query is provided
  return {
    title: `Search Results for "${query}" | Watchix`,
    description: `Browse detailed results for "${query}" on Watchix. Find information, reviews, and more about the films you're looking for.`,
  };
};

const Search = async ({ searchParams }) => {
  const { title } = searchParams;
  let movies = null;
  if (title) {
    movies = await MoviesApiCalls.search(title);
  } else {
    movies = await MoviesApiCalls.trending();
  }

  return (
    <div className="mt-16 px-6 flex flex-col gap-y-2 justify-center">
      {movies.results.length > 0 ? (
        <>
          <div>
            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
              Explore Popular Series, Films, and More
            </h4>
          </div>
          <div className="flex flex-row flex-wrap gap-3">
            {movies.results.map((movie) => (
              <Link key={movie.id} href={`/movie/${movie.id}`}>
                <PosterCard
                  image={movie.backdrop_path}
                  size="massive"
                  title={movie.title}
                />
              </Link>
            ))}
          </div>
        </>
      ) : (
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mt-20 p-4">
          No results for {`"${title}"`}.
          <Link
            className="inline-flex flex-row items-center  gap-0 text-base underline w-full"
            href={`/`}
          >
            <ChevronLeft size={18} />
            Go home.
          </Link>
        </h4>
      )}
    </div>
  );
};

export default Search;
