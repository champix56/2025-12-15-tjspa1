import { useNavigate, useParams } from "react-router";
import MemeForm from "../../components/functionnal/MemeForm/MemeForm.store";
import FlexV1Grow from "../../components/layout/FlexV1Grow/FlexV1Grow";
import MemeSvgViewer from "../../components/ui/MemeSvgViewer/MemeSvgViewer.store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../store/store";
import { clear, update } from "../../store/current";

const Editor: React.FC = () => {
  const param = useParams();
  const memes = useSelector((s: RootState) => s.ressources.memes);
  const nav = useNavigate();
  const d = useDispatch<AppDispatch>();
  useEffect(() => {
    if (param.id === undefined) {
      d(clear());
      return;
    } else {
      const paramId = Number(param.id);
      if (Number.isNaN(paramId)) {
        nav("/");
        return;
      }
      const foundMeme = memes.find((item) => item.id === paramId);
      if (foundMeme === undefined) {
        nav("/");
        return;
      }
      d(update(foundMeme));
    }
  }, [param.id, nav, d, memes]);
  return (
    <FlexV1Grow>
      <MemeSvgViewer basePath="" />
      <MemeForm />
    </FlexV1Grow>
  );
};
export default Editor;
