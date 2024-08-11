import { PlayCircle } from "lucide-react";
import PosterCard from "../cards/PosterCard";

const VideoThumbnail = ({ thumbnail_path, title }) => {
  return (
    <>
      <div>
        <div className="relative group w-fit overflow-hidden rounded-md cursor-pointer">
          <div className="absolute inset-0 z-[999] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity" />
            <PlayCircle color="white" className="z-[991]" size={35} />
          </div>
          <PosterCard
            size="massive"
            src="https://img.youtube.com/vi"
            image={`/${thumbnail_path}/maxresdefault.jpg`}
            title={title}
          />
        </div>
      </div>
    </>
  );
};

export default VideoThumbnail;
