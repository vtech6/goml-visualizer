export type InteractionData = {
  xPos: number;
  yPos: number;
  target: string;
  predicted: string;
  value?: number;
};

export type TooltipProps = {
  interactionData: InteractionData | null;
};
