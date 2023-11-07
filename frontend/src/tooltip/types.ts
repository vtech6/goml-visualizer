export type InteractionData = {
  xPos: number;
  yPos: number;
  target: string;
  predicted: string;
};

export type TooltipProps = {
  interactionData: InteractionData | null;
};
