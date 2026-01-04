import { useEffect } from "react";

export default function LoaderOverlay() {
  useEffect(() => {
    const el = document.getElementById("loader");
    const video = document.querySelector<HTMLVideoElement>("#hero-video");
    if (!el || !video) return;

    const timer = setTimeout(() => {
      el.classList.remove("opacity-100");
      el.classList.add("opacity-0", "pointer-events-none");

      video.currentTime = 0;
      video.play();
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      id="loader"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black opacity-100 transition-opacity duration-1200"
    >
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-white/20 border-t-white" />
    </div>
  );
}
