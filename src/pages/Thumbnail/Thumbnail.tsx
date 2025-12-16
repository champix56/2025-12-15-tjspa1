import { useSelector } from "react-redux";
import MemeThumbnail from "../../components/layout/MemeThumbnail/MemeThumbnail";
import type { RootState } from "../../store/store";
import { MemeSVGViewer } from "orsys-tjs-meme";
import { Link } from "react-router";

const Thumbnail: React.FC = () => {
  const ressources = useSelector((s: RootState) => s.ressources);
  return (
    <MemeThumbnail>
      {ressources.memes.map((ms) => (
        <Link to={"/editor/" + ms.id} key={ms.id}>
          <MemeSVGViewer
            basePath=""
            meme={ms}
            image={ressources.images.find((im) => im.id === ms.imageId)}
          />
          <div>{ms.titre}</div>
        </Link>
      ))}
    </MemeThumbnail>
  );
};

export default Thumbnail;
