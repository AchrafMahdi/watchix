"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import PosterCard from "../cards/PosterCard";
import { useState } from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
const HeroCarousel = ({ data, title }) => {
  const [selectedMovie, setSelectedMovie] = useState(data[0]);
  const router = useRouter();
  return (
    <div>
      <div className="w-full h-[70vh] my-10 relative overflow-hidden bg-slate-800 pl-1">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent z-[2]"></div>
        <div className="px-4 flex flex-col gap-4 py-10 overflow-hidden  absolute w-full bottom-1">
          <div className=" z-[2]">
            <div className="">
              <h1 className="font-bold text-2xl text-gray-50 break-all inline-flex flex-col">
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
                variant="secondary"
                className="md:w-80"
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
              <CarouselPrevious className="text-gray-50 font-thin text-6xl  hover:text-gray-700" />
              <CarouselNext className="text-gray-50 font-thin text-6xl  hover:text-gray-700" />
            </Carousel>
          </div>
        </div>
        <Image
          className="absolute top-0 left-0 z-[1] bg-center object-cover w-full h-full object-top sm:object-center md:object-bottom lg:object-right transition-opacity opacity-0 duration-[2s]"
          onLoad={(image) => image.target.classList.remove("opacity-0")}
          src={`https://image.tmdb.org/t/p/original${selectedMovie.backdrop_path}`}
          alt=""
          width={1280} // Default width
          height={720} // Default height
        />
      </div>
    </div>
  );
};

export default HeroCarousel;
