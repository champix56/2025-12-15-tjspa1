import type { ImageInterface, MemeInterface } from "orsys-tjs-meme";

export interface IMemeFormProps {
    images: Array<ImageInterface>;
    meme: MemeInterface;
    onMemeChange: (meme: MemeInterface) => void;
    onMemeSave: (meme: MemeInterface) => void;
    style?: React.CSSProperties;
}