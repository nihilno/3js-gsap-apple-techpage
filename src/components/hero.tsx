import { useEffect, useRef } from "react";
import { IoIosArrowDown } from "react-icons/io";

function Hero() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) videoRef.current.playbackRate = 2;
  }, []);

  return (
    <section id="hero">
      <div>
        <h1>MacBook Pro</h1>
        <img src="/title.webp" alt="MacBook title" />
      </div>
      <video autoPlay muted playsInline ref={videoRef} preload="metadata">
        <source src="/videos/hero.webm" type="video/webm" />
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>
      <button>Buy</button>
      <p className="font-regular">From $1599 or $133/mo for 12 months</p>

      <a href="#star-product" className="group cursor-pointer">
        <IoIosArrowDown className="h-6 w-6 translate-y-20 animate-pulse text-white transition-all duration-200 ease-in-out group-hover:translate-y-22" />
      </a>
    </section>
  );
}

export default Hero;
