import { MemeSVGViewer } from "orsys-tjs-meme";
interface IMemeSvgViewerProps {
  basePath?: "/" | "";
}

const MemeSvgViewer: React.FC<IMemeSvgViewerProps> = (props) => {
  return <MemeSVGViewer {...props} meme={} image={} />;
};

export default MemeSvgViewer;
