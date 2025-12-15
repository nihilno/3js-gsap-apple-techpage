import { useGSAP } from "@gsap/react";
import { Canvas } from "@react-three/fiber";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";
import { colorDescriptions, modelColors } from "../lib/constants/models";
import { cn } from "../lib/utils";
import useMacBookStore from "../store";
import ModelSwitcher from "./three/model-switcher";
import StudioLights from "./three/studio-lights";

function StarProduct() {
  const { color, scale, setColor, setScale } = useMacBookStore();
  const isMobile = useMediaQuery({ maxWidth: 1024 });

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#star-product h2",
        start: "top bottom",
        end: "top center",
        scrub: true,
      },
    });

    tl.fromTo(
      "#star-product h2",
      {
        opacity: 0,
        yPercent: 20,
      },
      {
        opacity: 1,
        yPercent: 0,
        duration: 1,
        ease: "power1.inOut",
      },
    );

    gsap.fromTo(
      "#color-title",
      { opacity: 0, y: -40, filter: "blur(6px)" },
      {
        opacity: 1,
        y: -80,
        filter: "blur(0px)",
        stagger: 0.06,
        duration: 1.4,
        ease: "expo.out",
      },
    );
  }, [color]);

  return (
    <section id="star-product" className="scroll-mt-20">
      <h2>Take a closer look.</h2>

      <div className="controls">
        <h3
          id="color-title"
          className="text-lgl absolute top-0 left-1/2 w-full -translate-x-1/2 -translate-y-35 text-center font-extralight text-white"
        >
          {colorDescriptions[color]}
        </h3>
        <div className="flex-center mt-5 gap-5">
          <div className="color-control">
            {modelColors.map((modelColor) => (
              <div
                style={{ backgroundColor: modelColor }}
                onClick={() => setColor(modelColor)}
                className={cn(
                  "transition-all duration-300 ease-out hover:scale-105",
                  color === modelColor && "ring-2 ring-white",
                )}
              />
            ))}
          </div>

          <div className="size-control">
            <div
              onClick={() => setScale(0.06)}
              className={cn(
                "transition-all duration-300 ease-in-out select-none hover:scale-105",
                scale === 0.06
                  ? "bg-white text-black"
                  : "bg-transparent text-white",
              )}
            >
              <p>14"</p>
            </div>
            <div
              onClick={() => setScale(0.08)}
              className={cn(
                "transition-colors duration-200 select-none",
                scale === 0.08
                  ? "bg-white text-black"
                  : "bg-transparent text-white",
              )}
            >
              <p>16"</p>
            </div>
          </div>
        </div>
      </div>

      <Canvas
        id="canvas"
        camera={{ position: [0, 2, 5], fov: 50, near: 0.1, far: 100 }}
      >
        <StudioLights />
        <ModelSwitcher
          scale={isMobile ? scale - 0.03 : scale}
          isMobile={isMobile}
        />
      </Canvas>
    </section>
  );
}

export default StarProduct;
