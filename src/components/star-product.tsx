import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { cn } from "../lib/utils";
import useMacBookStore from "../store";
import MacBookModel14 from "./models/Macbook-14";
import StudioLights from "./studio-lights";

function StarProduct() {
  const { color, scale, setColor, setScale } = useMacBookStore();

  return (
    <section id="star-product">
      <h2>Take a closer look.</h2>

      <div className="controls">
        <p className="info">MacBook Pro 16" in Space Black</p>
        <div className="flex-center mt-5 gap-5">
          <div className="color-control">
            <div
              onClick={() => setColor("#adb5bd")}
              className={cn("bg-neutral-300", color === "#adb5bd" && "active")}
            />
            <div
              onClick={() => setColor("#2e2c2e")}
              className={cn("bg-neutral-900", color === "#2e2c2e" && "active")}
            />
          </div>

          <div className="size-control">
            <div
              onClick={() => setScale(0.06)}
              className={cn(
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
        <MacBookModel14 scale={scale} position={[0, 0, 0]} />{" "}
        <OrbitControls enableZoom={false} />
      </Canvas>
    </section>
  );
}

export default StarProduct;
