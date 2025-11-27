'use client';

import { useState, useRef } from 'react';

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [volume, setVolume] = useState<number>(1);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch((error: Error) => {
          console.log('Video play failed:', error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
      if (videoRef.current.duration && !isNaN(videoRef.current.duration)) {
        setDuration(videoRef.current.duration);
      }
    }
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (videoRef.current && duration && !isNaN(duration)) {
      const rect = e.currentTarget.getBoundingClientRect();
      const percent = (e.clientX - rect.left) / rect.width;
      videoRef.current.currentTime = percent * duration;
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
    }
  };

  const progressPercentage = duration && !isNaN(duration) ? (currentTime / duration) * 100 : 0;

  return (
    <section className="py-12 bg-white flex justify-center px-2">
      <div className="max-w-4xl w-full rounded-xl shadow-lg overflow-hidden bg-black relative select-none">
        <video
          ref={videoRef}
          className="w-full h-auto cursor-pointer"
          preload="metadata"
          poster="https://fitbookpro.ai/intro-thumb.png"
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleTimeUpdate}
          onClick={togglePlay}
        >
          <source src="https://fitbookpro.ai/intro-demo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {!isPlaying && (
          <button
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-600 bg-opacity-75 hover:bg-opacity-90 rounded-full p-4 flex items-center justify-center transition-all duration-300"
            onClick={togglePlay}
            aria-label="Play Video"
          >
            <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"></path>
            </svg>
          </button>
        )}

        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 px-4 py-2 flex items-center space-x-4">
          <div 
            className="flex-1 h-1 bg-gray-600 rounded cursor-pointer relative"
            onClick={handleProgressClick}
            aria-label="Video progress bar"
          >
            <div 
              className="h-1 bg-indigo-500 rounded absolute top-0 left-0"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>

          <input
            type="range"
            min="0"
            max="1"
            step="0.05"
            value={volume}
            onChange={handleVolumeChange}
            className="w-24 cursor-pointer"
            aria-label="Volume control"
          />

          <button 
            className="text-white hover:text-indigo-400 transition-colors"
            onClick={togglePlay}
            aria-label={isPlaying ? "Pause Video" : "Play Video"}
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              {isPlaying ? (
                <path d="M6 4h4v16H6zM14 4h4v16h-4z"></path>
              ) : (
                <path d="M8 5v14l11-7z"></path>
              )}
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;