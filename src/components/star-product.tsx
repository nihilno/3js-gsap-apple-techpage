import { useGSAP } from "@gsap/react";
import { Html } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import gsap from "gsap";
import { Suspense } from "react";
import { useMediaQuery } from "react-responsive";
import { colorDescriptions, modelColors } from "../lib/constants/models";
import { cn } from "../lib/utils";
import useMacBookStore from "../store";
import ModelLoader from "./loaders/model-scroll-loader";
import ModelSwitcher from "./three/model-switcher";
import StudioLights from "./three/studio-lights";

function StarProduct() {
  const { color, scale, setColor, setScale } = useMacBookStore();
  const isMobile = useMediaQuery({ maxWidth: 1024 });

  useGSAP(() => {
    gsap.fromTo(
      "#star-product h2",
      {
        opacity: 0,
        yPercent: 5,
      },
      {
        opacity: 1,
        yPercent: 0,
        ease: "power1.inOut",
        duration: 0.7,
        scrollTrigger: {
          trigger: "#star-product h2",
          start: "top 90%",
          end: "top center",
          scrub: 1,
        },
      },
    );

    gsap.fromTo(
      ".size-control, .color-control",
      {
        opacity: 0,
        yPercent: 10,
      },
      {
        opacity: 1,
        yPercent: 0,
        ease: "power1.inOut",
        duration: 0.7,
        scrollTrigger: {
          trigger: ".size-control",
          start: "top bottom",
          end: "top 80%",
          scrub: 1,
        },
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
          className="absolute top-12 left-1/2 w-full -translate-x-1/2 text-center text-sm font-extralight text-white sm:top-0 sm:text-lg"
        >
          {colorDescriptions[color]}
        </h3>
        <div className="mt-5 flex flex-col items-center gap-5 sm:flex-row">
          <div className="color-control">
            {modelColors.map((modelColor) => (
              <div
                key={modelColor}
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
        <Suspense
          fallback={
            <Html>
              <ModelLoader />
            </Html>
          }
        >
          <ModelSwitcher
            scale={isMobile ? scale - 0.03 : scale}
            isMobile={isMobile}
          />
        </Suspense>
      </Canvas>
    </section>
  );
}

export default StarProduct;
