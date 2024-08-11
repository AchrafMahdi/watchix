import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

const Hero = ({ data }) => {
  return (
    <div>
      {data && (
        <div className="bg-gray-800 w-full h-[80vh] relative ">
          <div className="w-full h-full sm:hidden">
            <Image
              className="object-cover"
              src={`https://image.tmdb.org/t/p/original${data.results[0].poster_path}`}
              alt=""
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </div>
          <div className="w-full h-full hidden sm:block">
            <Image
              className="object-cover"
              src={`https://image.tmdb.org/t/p/original${data.results[0].backdrop_path}`}
              alt=""
              priority
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-tr from-black via-transparent to-transparent"></div>

          <div className="absolute bottom-0 md:left-6 p-2">
            <Image
              width={160}
              height={720}
              className="rounded-md hidden md:block"
              src={`https://image.tmdb.org/t/p/w300${data.results[0].poster_path}`}
              alt=""
            />
            <div className="">
              <h1 className="font-bold text-2xl text-gray-50 break-all">
                {data.results[0].title}
              </h1>
              <p className="text-gray-300 text-sm w-80 line-clamp-3">
                {data.results[0].overview}
              </p>
            </div>
            <div className="py-2">
              <Link href={`/movie/${data.results[0].id}`}>
                <Button variant="secondary" className="w-80">
                  More details
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
