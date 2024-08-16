import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import HeroWithPlayer from "./HeroWithPlayer";
import { MoviesApiCalls } from "@/lib/utils";

const Hero = async ({ withTrailer = false }) => {
  const data = await MoviesApiCalls.discover();
  const images = await MoviesApiCalls.getMovieImages(data.results[0].id);
  const videos = await MoviesApiCalls.video(data.results[0].id);
  return (
    <div>
      {data && !withTrailer ? (
        <div className="bg-gray-800 w-full h-[80vh] relative overflow-hidden">
          <div>
            <div className={`w-full h-full sm:hidden`}>
              <img
                className="object-cover w-full h-full"
                src={`https://image.tmdb.org/t/p/original${data.results[0].poster_path}`}
                alt=""
              />
            </div>
            <div className={`w-full h-full hidden sm:block`}>
              <img
                className="object-cover w-full h-full"
                src={`https://image.tmdb.org/t/p/original${data.results[0].backdrop_path}`}
                alt=""
              />
            </div>
          </div>

          <div className="absolute inset-0 bg-gradient-to-tr from-black via-transparent to-transparent"></div>

          <div className="absolute bottom-0 md:left-6 p-2">
            <img
              width={300}
              height={150}
              className="object-contain"
              src={`https://image.tmdb.org/t/p/w300${images.logos[0].file_path}`}
              alt="Logo"
            />

            <div className="">
              <p className="text-gray-300 text-sm w-80 line-clamp-3">
                {data.results[10].overview}
              </p>
            </div>
            <div className="py-2 flex felx-row gap-3">
              <Link href={`/movie/${data.results[10].id}`}>
                <Button size="lg" className="">
                  More details
                </Button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <HeroWithPlayer data={data} images={images} videos={videos} />
      )}
    </div>
  );
};

export default Hero;
