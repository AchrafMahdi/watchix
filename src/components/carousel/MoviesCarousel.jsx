import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ChevronRight } from "lucide-react";
import PosterCard from "../cards/PosterCard";
import DetailedCard from "../cards/DetailedCard";
import Link from "next/link";

function MoviesCarousel({
  data,
  name = null,
  withDetails = false,
  withLink = false,
}) {
  return (
    <Carousel>
      {name !== null &&
        (withLink ? (
          <Link
            href={`/movie/genre/${name}`}
            prefetch={false}
            className="ml-3 mb-4 font-semibold text-lg inline-flex items-center"
          >
            {name} <ChevronRight size={18} />
          </Link>
        ) : (
          <h3 className="ml-3 mb-4 font-semibold text-lg inline-flex items-center">
            {name}
          </h3>
        ))}
      <CarouselContent className="">
        {data.map((d, index) => (
          <Link key={d.id} href={`/movie/${d.id}`}>
            <CarouselItem
              className={`md:basis-[33%] ${
                withDetails
                  ? "basis-[60%] lg:basis-[26%] sm:basis-[32%]"
                  : "basis-[36%] lg:basis-[25%] xl:basis-[20%] sm:basis-[20%]"
              }`}
            >
              {withDetails === true ? (
                <DetailedCard
                  img={d.backdrop_path}
                  overview={d.overview}
                  title={d.title}
                  release_date={d.release_date}
                />
              ) : (
                <PosterCard image={d.poster_path} title={d.title} />
              )}
            </CarouselItem>
          </Link>
        ))}
      </CarouselContent>
      <CarouselPrevious className="font-thin text-6xl" />
      <CarouselNext className="font-thin text-6xl" />
    </Carousel>
  );
}
export default MoviesCarousel;
