"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import PosterCard from "../cards/PosterCard";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { get_average_rgb } from "@/lib/utils";
const HeroCarousel = ({ data, title }) => {
  const [selectedMovie, setSelectedMovie] = useState(data[0]);
  const [commonRgb, setCommonRgb] = useState(null);
  const router = useRouter();

  async function getAverageColorForImg(imageSrc) {
    try {
      const rgbArray = await get_average_rgb(imageSrc);
      const [red, green, blue] = rgbArray;

      const rgbColor = `rgb(${red}, ${green}, ${blue})`;
      console.log(`The average color of the image is: ${rgbColor}`);

      // Ensure setCommonRgb is defined and accessible
      setCommonRgb([red, green, blue]);
    } catch (error) {
      console.error("Error getting average color:", error);
    }
  }

  // Example usage:

  useEffect(() => {
    getAverageColorForImg(
      `https://image.tmdb.org/t/p/w300${selectedMovie.backdrop_path}`
    );
  }, [selectedMovie]);
  function getTextColorBasedOnBackground(rgbArray) {
    const [red, green, blue] = rgbArray;

    // Calculate luminance
    const luminance = 0.2126 * red + 0.7152 * green + 0.0722 * blue;

    // If luminance is greater than a threshold, return dark text, otherwise light text
    return luminance > 128 ? "#000000" : "#ffffff";
  }
  return (
    <div
      className="relative"
      style={{
        boxShadow: `0 0 150px 60px ${
          commonRgb !== null
            ? `rgba(${commonRgb[0]}, ${commonRgb[1]}, ${commonRgb[2]}, 0.45)`
            : "rgba(0, 0, 0, 0.2)"
        }`,
        backgroundColor:
          commonRgb !== null
            ? `rgb(${commonRgb[0]}, ${commonRgb[1]}, ${commonRgb[2]})`
            : "rgb(0, 0, 0)",
        transition: "box-shadow 0.5s ease, background-color 0.5s ease", // Adding transition
      }}
    >
      <div className="w-full h-[70vh] my-10 relative overflow-hidden bg-slate-800 pl-1">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent z-[2]"></div>
        <div className="px-4 flex flex-col gap-4 py-10 overflow-hidden  absolute w-full bottom-1">
          <div className=" z-[2]">
            <div className="">
              <h1 className="font-bold text-2xl break-all inline-flex flex-col text-gray-50">
                <span className="text-xs font-light">{title}</span>
                {selectedMovie.title}
              </h1>
              <p className="text-gray-200 text-sm w-52 md:w-80 line-clamp-3 md:line-clamp-6">
                {selectedMovie.overview}
              </p>
            </div>
            <div className="py-2">
              <Button
                onClick={() => router.push(`/movie/${selectedMovie.id}`)}
                size="lg"
                className="md:w-80"
                style={{
                  backgroundColor:
                    commonRgb !== null
                      ? `rgb(${commonRgb[0]}, ${commonRgb[1]}, ${commonRgb[2]})`
                      : "transparent",
                  color:
                    commonRgb !== null
                      ? getTextColorBasedOnBackground(commonRgb)
                      : "#ffffff",
                }}
              >
                More details
              </Button>
            </div>
          </div>
          <div className="z-[2] w-full md:w-[95%] md:mx-auto">
            <Carousel className="">
              <CarouselContent className="">
                {data.map((d, index) => (
                  <CarouselItem
                    onClick={() => setSelectedMovie(d)}
                    key={d.id}
                    className="md:basis-[35%] basis-[45%] lg:basis-[20%] sm:basis-[28%] cursor-pointer"
                  >
                    <PosterCard
                      image={d.backdrop_path}
                      title={d.title}
                      size="small"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="font-thin text-6xl" />
              <CarouselNext className="font-thin text-6xl" />
            </Carousel>
          </div>
        </div>
        <img
          className="absolute top-0 left-0 z-[1] bg-center object-cover w-full h-full object-top sm:object-center md:object-bottom lg:object-right transition-opacity opacity-0 duration-[2s]"
          onLoad={(image) => image.target.classList.remove("opacity-0")}
          src={`https://image.tmdb.org/t/p/original${selectedMovie.backdrop_path}`}
          alt=""
          width={1280}
          height={720}
        />
      </div>
    </div>
  );
};

export default HeroCarousel;
