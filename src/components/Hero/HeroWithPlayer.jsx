"use client";
import { Button } from "../ui/button";

import { Pause, Play } from "lucide-react";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";

const HeroWithPlayer = ({ data, images, videos }) => {
  const [play, setPlay] = useState(false);
  const [fetchVideo, setFetchVideo] = useState(false);
  const iframeRef = useRef(null);
  const router = useRouter();

  const handlePauseClick = () => {
    setPlay(false);

    if (iframeRef.current && iframeRef.current.contentWindow) {
      iframeRef.current.contentWindow.postMessage(
        '{"event":"command","func":"pauseVideo","args":""}',
        "*"
      );
    }
  };

  const handlePlayClick = () => {
    setPlay(true);
    !fetchVideo && setFetchVideo(true);

    if (iframeRef.current && iframeRef.current.contentWindow) {
      iframeRef.current.contentWindow.postMessage(
        '{"event":"command","func":"playVideo","args":""}',
        "*"
      );
    }
  };

  return (
    <div>
      {data && (
        <div className="bg-gray-800 w-full min-h-[562px] h-fit lg:h-[80vh] relative overflow-hidden">
          <div
            className={`${
              play ? "z-[11] opacity-0" : "z-[21] opacity-100"
            } transition-opacity duration-1000`}
          >
            <div className={`w-full h-full sm:hidden`}>
              <img
                className="object-cover"
                src={`https://image.tmdb.org/t/p/original${data.results[0].poster_path}`}
                alt=""
              />
            </div>
            <div className={`w-full h-full hidden sm:block`}>
              <img
                className="object-cover"
                src={`https://image.tmdb.org/t/p/original${data.results[0].backdrop_path}`}
                alt=""
              />
            </div>
          </div>

          <div
            className={`w-full h-full ${
              !play ? "z-[-11] opacity-0" : "z-[25] opacity-100"
            }`}
          >
            {fetchVideo && (
              <iframe
                id="player"
                ref={iframeRef}
                src={`https://www.youtube-nocookie.com/embed/${
                  videos.results.filter(
                    (v) => v.type.toLowerCase() === "trailer"
                  )[0].key
                }?loop=1&rel=0&cc_load_policy=1&iv_load_policy=3&fs=0&color=white&controls=0&disablekb=1&frameborder="0"&enablejsapi=1&autoplay=1`}
                className="absolute top-0 left-0 w-full h-full"
                allowFullScreen
              ></iframe>
            )}
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
                {data.results[0].overview}
              </p>
            </div>
            <div className="py-2 flex felx-row gap-3">
              <Button
                onClick={() => (!play ? handlePlayClick() : handlePauseClick())}
                size="lg"
                className="z-[21] inline-flex flex-row items-center justify-center gap-2"
              >
                {play ? (
                  <>
                    <Pause size={16} fill="black" /> Pause trailer
                  </>
                ) : (
                  <>
                    <Play size={16} fill="black" /> Play trailer
                  </>
                )}
              </Button>

              <Button
                onClick={() => router.push(`/movie/${data.results[0].id}`)}
                size="lg"
                className="z-[21]"
              >
                More details
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroWithPlayer;
