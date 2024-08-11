const VideoPlayer = ({ video_id }) => {
  return (
    <div className="w-full h-full relative">
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${video_id}?autoplay=1&fs=0&color=white&disablekb=1`}
        frameBorder="0"
        className="absolute top-0 left-0 w-full h-full"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
