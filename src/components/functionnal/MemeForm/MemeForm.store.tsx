import StandaloneMemeForm from "./MemeForm";
import { store, type StoreState } from "../../../store/store";
import { update } from "../../../store/current";
import type { IMemeFormStored } from "./MemeForm.interface";
import { useSelector } from "react-redux";

const MemeForm: React.FC<IMemeFormStored> = (props) => {
  const images = useSelector((s:StoreState) => s.ressources.images);
  const current = useSelector((s:StoreState) => s.current.meme);

  return (
    <StandaloneMemeForm
      {...props}
      images={images}
      meme={current}
      onMemeChange={(meme) => {
        store.dispatch(update(meme));
      }}
    />
  );
};

export default MemeForm;
