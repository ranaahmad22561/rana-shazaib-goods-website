'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

const REEL_LIMIT_SECONDS = 60;

const clips = [
  {
    src: 'https://videos.pexels.com/video-files/9856371/9856371-hd_1920_1080_30fps.mp4',
    title: 'Cargo loading',
    page: 'https://www.pexels.com/video/loading-a-truck-with-construction-products-9856371/',
  },
  {
    src: 'https://videos.pexels.com/video-files/10472290/10472290-hd_1920_1080_30fps.mp4',
    title: 'Loading goods onto a truck',
    page: 'https://www.pexels.com/video/loading-cargo-on-truck-10472290/',
  },
  {
    src: 'https://videos.pexels.com/video-files/6618335/6618335-hd_1920_1080_30fps.mp4',
    title: 'Forklift and container handling',
    page: 'https://www.pexels.com/video/a-forklift-truck-transferring-a-cargo-container-6618335/',
  },
  {
    src: 'https://videos.pexels.com/video-files/37778389/37778389-hd_1920_1080_30fps.mp4',
    title: 'Goods unloading at a logistics centre',
    page: 'https://www.pexels.com/video/container-truck-unloading-at-logistic-center-37778389/',
  },
  {
    src: 'https://videos.pexels.com/video-files/11801939/11801939-hd_1920_1080_30fps.mp4',
    title: 'Container movement in a warehouse',
    page: 'https://www.pexels.com/video/vehicle-carrying-container-in-warehouse-11801939/',
  },
  {
    src: 'https://videos.pexels.com/video-files/11801945/11801945-hd_1920_1080_30fps.mp4',
    title: 'Container loading operations',
    page: 'https://www.pexels.com/video/vehicle-loading-container-in-warehouse-11801945/',
  },
  {
    src: 'https://videos.pexels.com/video-files/6618337/6618337-hd_1920_1080_30fps.mp4',
    title: 'Overhead container-yard handling',
    page: 'https://www.pexels.com/video/a-drone-footage-of-a-forklift-truck-transferring-a-cargo-container-6618337/',
  },
];

function formatTime(seconds: number) {
  const safeSeconds = Math.max(0, Math.min(REEL_LIMIT_SECONDS, Math.floor(seconds)));
  const minutes = Math.floor(safeSeconds / 60);
  const remainder = safeSeconds % 60;
  return `${minutes}:${String(remainder).padStart(2, '0')}`;
}

export function PromoVideo() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const elapsedRef = useRef(0);
  const previousTimeRef = useRef(0);
  const failedAttemptsRef = useRef(0);

  const [clipIndex, setClipIndex] = useState(0);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isFinished, setIsFinished] = useState(false);
  const [hasError, setHasError] = useState(false);

  const startOver = useCallback(() => {
    elapsedRef.current = 0;
    previousTimeRef.current = 0;
    failedAttemptsRef.current = 0;
    setElapsedSeconds(0);
    setClipIndex(0);
    setIsFinished(false);
    setHasError(false);
    setIsPlaying(true);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || hasError) return;

    video.muted = isMuted;
    if (isPlaying) {
      const playRequest = video.play();
      if (playRequest) {
        playRequest.catch(() => setIsPlaying(false));
      }
    } else {
      video.pause();
    }
  }, [clipIndex, hasError, isMuted, isPlaying]);

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video || !isPlaying) return;

    const now = video.currentTime;
    const delta = now - previousTimeRef.current;
    if (delta > 0 && delta < 2.5) {
      elapsedRef.current = Math.min(REEL_LIMIT_SECONDS, elapsedRef.current + delta);
    }
    previousTimeRef.current = now;

    const elapsed = Math.floor(elapsedRef.current);
    if (elapsed >= REEL_LIMIT_SECONDS) {
      setElapsedSeconds(REEL_LIMIT_SECONDS);
      setIsPlaying(false);
      setIsFinished(true);
      video.pause();
      return;
    }
    setElapsedSeconds(elapsed);
  };

  const handleClipEnded = () => {
    previousTimeRef.current = 0;
    if (elapsedRef.current >= REEL_LIMIT_SECONDS) {
      setElapsedSeconds(REEL_LIMIT_SECONDS);
      setIsPlaying(false);
      setIsFinished(true);
      return;
    }
    setClipIndex((current) => (current + 1) % clips.length);
  };

  const handleClipError = () => {
    failedAttemptsRef.current += 1;
    if (failedAttemptsRef.current >= clips.length) {
      setIsPlaying(false);
      setHasError(true);
      return;
    }
    previousTimeRef.current = 0;
    setClipIndex((current) => (current + 1) % clips.length);
  };

  const handleCanPlay = () => {
    failedAttemptsRef.current = 0;
    previousTimeRef.current = 0;
  };

  const handlePlayPause = () => {
    if (isFinished || hasError) {
      startOver();
      return;
    }
    setIsPlaying((current) => !current);
  };

  const progress = Math.min(100, (elapsedSeconds / REEL_LIMIT_SECONDS) * 100);

  return (
    <div className="promo-film__media">
      <div className="promo-film__media-top">
        <span className="promo-film__live-dot" aria-hidden="true" />
        <span>Rana Shahzaib Goods · 1-Minute Cargo Promo</span>
      </div>

      <div className="promo-player__screen">
        {!hasError ? (
          <video
            key={clipIndex}
            ref={videoRef}
            className="promo-film__video"
            playsInline
            preload="metadata"
            poster="/images/container-truck.jpg"
            muted={isMuted}
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={() => { previousTimeRef.current = 0; }}
            onEnded={handleClipEnded}
            onError={handleClipError}
            onCanPlay={handleCanPlay}
            aria-label={`One-minute cargo promotional reel. Current scene: ${clips[clipIndex].title}.`}
          >
            <source src={clips[clipIndex].src} type="video/mp4" />
            Your browser does not support embedded video.
          </video>
        ) : (
          <div className="promo-player__error">
            <strong>The video could not load in this browser.</strong>
            <p>Open a stock clip directly while the connection is checked.</p>
            <a href={clips[0].page} target="_blank" rel="noreferrer">Open cargo-loading clip on Pexels</a>
          </div>
        )}

        {!isPlaying && !hasError && (
          <button className="promo-player__overlay" type="button" onClick={handlePlayPause}>
            <span className="promo-player__play-icon" aria-hidden="true">▶</span>
            <span>{isFinished ? 'Play Again' : 'Play 1-Minute Promo'}</span>
          </button>
        )}
      </div>

      <div className="promo-player__controls">
        <button className="promo-player__button" type="button" onClick={handlePlayPause}>
          {isPlaying ? 'Pause' : isFinished ? 'Play Again' : 'Play'}
        </button>
        {!hasError && (
          <button className="promo-player__button promo-player__sound" type="button" onClick={() => setIsMuted((current) => !current)} aria-pressed={!isMuted}>
            {isMuted ? 'Sound Off' : 'Sound On'}
          </button>
        )}
        <div className="promo-player__progress" role="progressbar" aria-label="Promo reel progress" aria-valuemin={0} aria-valuemax={60} aria-valuenow={elapsedSeconds}>
          <span style={{ width: `${progress}%` }} />
        </div>
        <span className="promo-player__time">{formatTime(elapsedSeconds)} / 1:00</span>
      </div>

      <div className="promo-film__media-caption">
        <span>LOADING</span><span>CONTAINER HANDLING</span><span>UNLOADING</span><span>DELIVERY</span>
      </div>
      <p className="promo-film__credit">
        Illustrative stock footage via{' '}
        <a href="https://www.pexels.com/" target="_blank" rel="noreferrer">Pexels</a>.
        This is promotional stock footage, not a recording of a specific Rana Shahzaib Goods shipment.
      </p>
    </div>
  );
}
