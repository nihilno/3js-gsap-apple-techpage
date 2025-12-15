export {};

declare global {
  type ModelSwitcherProps = {
    scale: number;
    isMobile: boolean;
  };

  type PerformaceImgPositionProps = {
    id: string;
    left?: number;
    right?: number;
    bottom?: number;
    transform?: string;
  };
}
