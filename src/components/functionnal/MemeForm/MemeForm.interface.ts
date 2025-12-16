import type { ImageInterface, MemeInterface } from "orsys-tjs-meme";

export type IMemeFormProps =IStoredMemeFormProps&{
    images: Array<ImageInterface>;
    meme: MemeInterface;
    onMemeChange: (meme: MemeInterface) => void;
    onMemeSave: (meme: MemeInterface) => void;
}
export interface IStoredMemeFormProps{
    style?: React.CSSProperties;
}