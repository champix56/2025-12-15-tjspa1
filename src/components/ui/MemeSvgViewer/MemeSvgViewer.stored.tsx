import React from "react";
import { MemeSVGViewer } from "orsys-tjs-meme";
import { useSelector } from "react-redux";
import type { RootState } from "../../../store/store";

interface IMemeSvgViewerProps {
  basePath?: string;
  parentStyle?: React.CSSProperties;
}

const MemeSvgViewer: React.FC<IMemeSvgViewerProps> = (props) => {
  const images = useSelector((s: RootState) => s.ressources.images);
  const current = useSelector((s: RootState) => s.current.meme)
  return (
    <MemeSVGViewer {...props} image={images.find(i => i.id === current.imageId)} meme={current} />
  );
};

export default MemeSvgViewer;
