import { useEffect, useState } from "react";
import StandaloneMemeForm from "./MemeForm";
import { store } from "../../../store/store";
import { update } from "../../../store/current";
import type { IMemeFormStored } from "./MemeForm.interface";

const MemeForm: React.FC<IMemeFormStored> = (props) => {
  const [images, setimages] = useState(store.getState().ressources.images);
  const [current, setcurrent] = useState(store.getState().current.meme);
  useEffect(() => {
    store.subscribe(() => {
      setimages(store.getState().ressources.images);
      setcurrent(store.getState().current.meme);
    });
  }, []);

  return (
    <StandaloneMemeForm
      {...props}
      images={images}
      meme={current}
      onMemeChange={(meme) => {
        store.dispatch(update(meme));²
      }}
    />
  );
};

export default MemeForm;
