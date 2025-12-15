export {};

declare global {
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
