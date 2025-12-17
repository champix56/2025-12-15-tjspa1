import StandaloneMemeForm from "./MemeForm";
import { type StoreDispatch, type StoreState } from "../../../store/store";
import { update } from "../../../store/current";
import type { IMemeFormStored } from "./MemeForm.interface";
import { useDispatch, useSelector } from "react-redux";

const MemeForm: React.FC<IMemeFormStored> = (props) => {
  const images = useSelector((s:StoreState) => s.ressources.images);
  const current = useSelector((s:StoreState) => s.current.meme);
  const dispatch=useDispatch<StoreDispatch>();

  return (
    <StandaloneMemeForm
      {...props}
      images={images}
      meme={current}
      onMemeChange={(meme) => {
        dispatch(update(meme));
      }}
    />
  );
};

export default MemeForm;
