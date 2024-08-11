import MoviesCarousel from "@/components/carousel/MoviesCarousel";
import { Separator } from "@/components/ui/separator";
import VideoCarousel from "@/components/Video/VideoCarousel";
import { MoviesApiCalls } from "@/lib/utils";
import { ChevronLeft } from "lucide-react";

import Image from "next/image";
import Link from "next/link";

export const generateMetadata = async ({ params }) => {
  const { id } = params;
  const movie = await MoviesApiCalls.getMovieById(id);
  return {
    title: movie.title,
    description: movie.description,
  };
};

const MovieDetails = async ({ params }) => {
  const { id } = params;

  const movie = await MoviesApiCalls.getMovieById(id);
  const similarMovies = await MoviesApiCalls.getSimilar(id);

  const getVideoByType = (type) => {
    if (movie.id) {
      return movie.videos.results.filter(
        (m) => m.type.toLowerCase() === type.toLowerCase()
      );
    }
  };
  const videos = {
    featurette: getVideoByType("Featurette"),
    teaser: getVideoByType("Teaser"),
    trailer: getVideoByType("Trailer"),
  };

  return (
    <div>
      <div>
        {movie.id ? (
          <div className="bg-gray-800 w-full h-[70vh] relative ">
            <Image
              className="w-full h-full object-cover"
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              alt=""
              width={1280} // You can set a default width
              height={720}
            />
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight first:mt-0 absolute bottom-2 left-1 md:left-8 text-white z-[999]">
              {movie.title}{" "}
              <span className="text-gray-400">
                ({new Date(movie.release_date).getFullYear()})
              </span>
            </h1>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

            <div className="p-2">
              <div className="grid grid-cols-4">
                <div className=" col-span-3 md:pl-10">
                  <h1 className="text-2xl font-semibold tracking-tight first:mt-0">
                    Overview
                  </h1>
                  <p className="leading-6 text-gray-700 [&:not(:first-child)]:mt-2 w-[90%]">
                    {movie.overview}
                  </p>
                  {movie.tagline && (
                    <blockquote className="mt-2 border-l-2 pl-6 italic">
                      "{movie.tagline}"
                    </blockquote>
                  )}
                </div>

                <div className="pt-4">
                  {movie.original_title.toLowerCase() !==
                    movie.title.toLowerCase() && (
                    <h5 className="scroll-m-20 text-base font-semibold tracking-tight">
                      Original Title:{" "}
                      <span className="text-sm">{movie.original_title}</span>
                    </h5>
                  )}
                  <h5 className="scroll-m-20 text-base font-semibold tracking-tight">
                    Status:{" "}
                    <span className="text-sm text-gray-600 font-light">
                      {movie.status}
                    </span>
                  </h5>
                  <h5 className="scroll-m-20 text-base font-semibold tracking-tight">
                    Genres:{" "}
                    <span className="text-sm font-light text-gray-600">
                      {movie.genres.map((g, index) =>
                        movie.genres[index + 1] ? (
                          <span key={index}>{g.name + ", "}</span>
                        ) : (
                          <span key={index}>{g.name + "."}</span>
                        )
                      )}
                    </span>
                  </h5>
                  <h5 className="scroll-m-20 text-base font-semibold tracking-tight">
                    Budget:{" "}
                    <span className="text-sm font-light text-gray-600">
                      {parseInt(movie.budget) > 0
                        ? "$" + parseInt(movie.budget).toLocaleString()
                        : "-"}
                    </span>
                  </h5>
                  <h5 className="scroll-m-20 text-base font-semibold tracking-tight">
                    Revenue:{" "}
                    <span className="text-sm font-light text-gray-600">
                      {parseInt(movie.revenue) > 0
                        ? "$" + parseInt(movie.revenue).toLocaleString()
                        : "-"}
                    </span>
                  </h5>
                </div>
              </div>
              {videos.trailer.length > 0 && (
                <>
                  <Separator className="my-3" />
                  <div className="md:pl-10 flex flex-col gap-3">
                    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                      Trailers
                    </h4>
                    <div className="w-full md:w-[96%]">
                      <VideoCarousel data={videos.trailer} />
                    </div>
                  </div>
                </>
              )}
              {videos.teaser.length > 0 && (
                <>
                  <Separator className="my-3" />
                  <div className="md:pl-10 flex flex-col gap-3">
                    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                      Teasers
                    </h4>
                    <div className="w-full md:w-[96%]">
                      <VideoCarousel data={videos.teaser} />
                    </div>
                  </div>
                </>
              )}
              {videos.featurette.length > 0 && (
                <>
                  <Separator className="my-3" />
                  <div className="md:pl-10 flex flex-col gap-3">
                    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                      Featurette
                    </h4>
                    <div className="w-full md:w-[96%]">
                      <VideoCarousel data={videos.featurette} />
                    </div>
                  </div>
                </>
              )}
              {similarMovies.results.length > 0 && (
                <>
                  <Separator className="my-3" />
                  <div className="md:pl-10 flex flex-col gap-3">
                    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                      More like this
                    </h4>
                    <div className="w-full md:w-[96%]">
                      <MoviesCarousel
                        data={similarMovies.results}
                        withDetails
                      />
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        ) : (
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight text-gray-900 mt-36 p-4">
            {movie.status_message}.
            <Link
              className="inline-flex flex-row items-center  gap-0 text-base underline w-full"
              href={`/`}
              replace
            >
              <ChevronLeft size={18} />
              Go home.
            </Link>
          </h4>
        )}
      </div>
    </div>
  );
};

export default MovieDetails;
