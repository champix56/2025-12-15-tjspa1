import React from "react";
import { MemeSVGViewer, type MemeInterface } from "orsys-tjs-meme";
import { Link } from "react-router";
import { useSelector } from "react-redux";
import type { RootState } from "../../../store/store";

interface IMemePreviewerProps {
  meme: MemeInterface;
}

const MemePreviewer: React.FC<IMemePreviewerProps> = ({ meme }) => {
  const images = useSelector((s: RootState) => s.ressources.images);
  return (
    <Link to={"/editor/" + meme.id}>
      {meme.titre}
      <MemeSVGViewer
        basePath=""
        image={images.find((img) => img.id === meme.imageId)}
        meme={meme}
      />
    </Link>
  );
};

export default MemePreviewer;
