"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import VideoThumbnail from "./VideoThumbnail";
import { useState } from "react";
import VideoPlayer from "./VideoPlayer";
import { X } from "lucide-react";

const VideoCarousel = ({ data }) => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  return (
    <>
      {selectedVideo !== null && (
        <>
          {/* Dark background overlay */}
          <div className="fixed inset-0 bg-black opacity-70 z-[998]" />

          {/* Video Player modal */}
          <div className="fixed inset-0 flex items-center justify-center z-[999]">
            <div className="bg-black w-full md:w-[60%] h-[45vh] md:h-[60vh] flex flex-col relative">
              <div className="flex justify-end p-1">
                <X
                  color="white"
                  size={30}
                  className="cursor-pointer"
                  onClick={() => setSelectedVideo(null)}
                />
              </div>
              <VideoPlayer video_id={selectedVideo} />
            </div>
          </div>
        </>
      )}

      <Carousel className="">
        <CarouselContent className="">
          {data.map((d, index) => (
            <CarouselItem
              key={index}
              onClick={() => {
                setSelectedVideo(d.key);
              }}
              className="md:basis-1/2 basis-[68%] lg:basis-[26%] sm:basis-[24%]"
            >
              <VideoThumbnail thumbnail_path={d.key} title={d.name} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="text-gray-900 font-thin text-6xl  hover:text-gray-700" />
        <CarouselNext className="text-gray-900 font-thin text-6xl  hover:text-gray-700" />
      </Carousel>
    </>
  );
};

export default VideoCarousel;
