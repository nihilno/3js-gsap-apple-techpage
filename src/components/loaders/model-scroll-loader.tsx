import { TbLoader2 } from "react-icons/tb";

function ModelLoader() {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <TbLoader2 className="realtive z-10 h-10 w-10 animate-spin" />
    </div>
  );
}

export default ModelLoader;
