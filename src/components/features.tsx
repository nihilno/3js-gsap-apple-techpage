import { useGSAP } from "@gsap/react";
import { Html } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import gsap from "gsap";
import { Suspense, useEffect, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import * as THREE from "three";
import { features, featureSequence } from "../lib/constants/constants";
import { cn } from "../lib/utils";
import useMacBookStore from "../store";
import ModelLoader from "./loaders/model-scroll-loader";
import MacbookModel from "./models/Macbook";
import StudioLights from "./three/studio-lights";

function ModelScroll() {
  const groupRef = useRef<THREE.Group | null>(null);
  const isMobile = useMediaQuery({ maxWidth: 1024 });
  const { setTexture } = useMacBookStore();

  useEffect(() => {
    featureSequence.forEach((feature) => {
      const v = document.createElement("video");
      Object.assign(v, {
        src: feature.videoPath,
        muted: true,
        playsInline: true,
        preload: "auto",
        crossOrigin: "anonymous",
      });

      v.load();
    });
  }, []);

  useGSAP(() => {
    const modelTl = gsap.timeline({
      scrollTrigger: {
        trigger: "#f-canvas",
        start: "top top",
        end: "bottom top",
        scrub: 1,
        pin: true,
      },
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#f-canvas",
        start: "top center",
        end: "bottom top",
        scrub: 1,
      },
    });

    if (groupRef.current) {
      modelTl.to(groupRef.current.rotation, {
        y: Math.PI * 2,
        ease: "power1.inOut",
      });
    }

    tl.call(() => setTexture("/videos/feature-1.mp4"))
      .to(".box-1", {
        opacity: 1,
        y: 0,
        delay: 1,
      })
      .call(() => setTexture("/videos/feature-2.mp4"))
      .to(".box-2", {
        opacity: 1,
        y: 0,
      })
      .call(() => setTexture("/videos/feature-3.mp4"))
      .to(".box-3", {
        opacity: 1,
        y: 0,
      })
      .call(() => setTexture("/videos/feature-4.mp4"))
      .to(".box-4", {
        opacity: 1,
        y: 0,
      })
      .call(() => setTexture("/videos/feature-5.mp4"))
      .to(".box-5", {
        opacity: 1,
        y: 0,
      });
  }, []);

  return (
    <group ref={groupRef}>
      <Suspense
        fallback={
          <Html>
            <ModelLoader />
          </Html>
        }
      >
        <MacbookModel scale={isMobile ? 0.06 : 0.1} position={[0, -1, 0]} />
      </Suspense>
    </group>
  );
}

function Features() {
  useGSAP(() => {
    gsap.fromTo(
      "#features h2",
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
          trigger: "#features h2",
          start: "top 90%",
          end: "top center",
          scrub: 1,
        },
      },
    );
  }, []);

  return (
    <section id="features">
      <h2>See it all in a new light.</h2>

      <Canvas id="f-canvas" camera={{}}>
        <StudioLights />
        <ambientLight intensity={0.5} />
        <ModelScroll />
      </Canvas>

      <div className="absolute inset-0">
        {features.map((feature, index) => (
          <div
            key={feature.id}
            className={cn("box", `box-${index + 1}`, feature.styles)}
          >
            <img src={feature.icon} alt={feature.highlight} />
            <span className="text-white">{feature.highlight}</span>
            <p>{feature.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
