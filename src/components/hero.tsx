import { useEffect, useRef } from "react";

function Hero() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) videoRef.current.playbackRate = 2;
  }, []);

  return (
    <section id="hero">
      <div>
        <h1>MacBook Pro</h1>
        <img src="/title.png" alt="MacBook title" />
      </div>

      <video
        src="/videos/hero.mp4"
        autoPlay
        muted
        playsInline
        ref={videoRef}
      ></video>

      <button>Buy</button>
      <p className="font-extralight">From $1599 or $133/mo for 12 months</p>
    </section>
  );
}

export default Hero;
