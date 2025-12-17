import type { ImageInterface, MemeInterface } from "orsys-tjs-meme";

export interface IMemeFormStored {
  style?: React.CSSProperties;
}

export type IMemeFormProps=IMemeFormStored & {
  images: Array<ImageInterface>;
  meme: MemeInterface;
  onMemeChange:(meme:MemeInterface)=>void;
}