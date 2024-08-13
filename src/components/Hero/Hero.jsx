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
        <div className="bg-gray-800 w-full h-[80vh] relative ">
          <div>
            <div className={`w-full h-full sm:hidden`}>
              <Image
                className="object-cover"
                src={`https://image.tmdb.org/t/p/original${data.results[10].poster_path}`}
                alt=""
                layout="fill"
                objectFit="cover"
                quality={100}
              />
            </div>
            <div className={`w-full h-full hidden sm:block`}>
              <Image
                className="object-cover"
                src={`https://image.tmdb.org/t/p/original${data.results[10].backdrop_path}`}
                alt=""
                priority
                layout="fill"
                objectFit="cover"
                quality={100}
              />
            </div>
          </div>

          <div className="absolute inset-0 bg-gradient-to-tr from-black via-transparent to-transparent"></div>

          <div className="absolute bottom-0 md:left-6 p-2">
            <Image
              width={300} // Adjust width based on your design needs
              height={150} // Adjust height based on your design needs
              className="object-contain" // Ensure the logo scales properly without distortion
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
