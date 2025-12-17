import { MemeSVGViewer } from "orsys-tjs-meme";
import { useSelector } from "react-redux";
import type { StoreState } from "../../../store/store";
interface IMemeSvgViewerProps {
  basePath?: "/" | "";
}

const MemeSvgViewer: React.FC<IMemeSvgViewerProps> = (props) => {
  const meme=useSelector((s:StoreState)=>s.current.meme)
  const images=useSelector((s:StoreState)=>s.ressources.images)
  return <MemeSVGViewer {...props} meme={meme} image={images.find(im=>im.id===meme.imageId)} />;
};

export default MemeSvgViewer;
