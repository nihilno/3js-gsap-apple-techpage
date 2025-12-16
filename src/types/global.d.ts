export {};

declare global {
  type MacBookStore = {
    color: string;
    setColor: (color: string) => void;
    scale: number;
    setScale: (scale: number) => void;
    texture: string;
    setTexture: (texture: string) => void;
    reset: () => void;
  };

  type ModelSwitcherProps = {
    scale: number;
    isMobile: boolean;
  };

  type PerformanceImgPositionProps = {
    id: string;
    left?: number;
    right?: number;
    bottom?: number;
    transform?: string;
  };
}
