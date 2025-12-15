import { PresentationControls } from "@react-three/drei";
import {
  SCALE_LARGE_DESKTOP,
  SCALE_LARGE_MOBILE,
} from "../../lib/constants/models.js";
import MacbookModel14 from "../models/Macbook-14.jsx";
import MacbookModel16 from "../models/Macbook-16.jsx";

const ModelSwitcher = ({ scale, isMobile }) => {
  const showLargeMacbook =
    scale === SCALE_LARGE_DESKTOP || scale === SCALE_LARGE_MOBILE;

  const controlsConfig = {
    snap: true,
    speed: 1,
    zoom: 1,
    azimuth: [-Infinity, Infinity],
    config: { mass: 1, tension: 0, friction: 26 },
  };

  return (
    <PresentationControls {...controlsConfig}>
      {showLargeMacbook ? (
        <MacbookModel16 scale={isMobile ? 0.05 : 0.08} />
      ) : (
        <MacbookModel14 scale={isMobile ? 0.03 : 0.06} />
      )}
    </PresentationControls>
  );
};

export default ModelSwitcher;
