export type InteractionData = {
  xPos: number;
  yPos: number;
  name: string;
};

export type TooltipProps = {
  interactionData: InteractionData | null;
};
