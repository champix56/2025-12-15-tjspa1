import React, { useState, useEffect } from "react";
import styles from "./MemeForm.module.css";
import type { ImageInterface, MemeInterface } from "orsys-tjs-meme";
import Button from "../../ui/Button/Button";

//const initialState = {};
interface IMemeFormProps {
  images: Array<ImageInterface>;
  meme: MemeInterface;
  onMemeChange:(meme:MemeInterface)=>void;
}
const MemeForm: React.FC<IMemeFormProps> = ({ images, meme, onMemeChange }) => {
 // const [current, setcurrent] = useState(meme);
const current=meme;
const setcurrent=onMemeChange;
  // const [state, setstate] = useState(initialState);
  // useEffect(() => {
  //   console.log("MemeForm mounted");
  // }, []);
  const onNumberChange = (
    evt: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setcurrent({ ...current, [evt.target.name]: parseInt(evt.target.value) });
  };
  const onStringChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setcurrent({ ...current, [evt.target.name]: evt.target.value });
  };
  const onCheckChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setcurrent({ ...current, [evt.target.name]: evt.target.checked });
  };
  return (
    <div className={styles.MemeForm} data-testid="MemeForm">
      <form
        onSubmit={(evt) => {
          evt.preventDefault();
          onMemeChange(current);
        }}
      >
        <label htmlFor="titre">
          <h1>Titre</h1>
        </label>
        <br />
        <input
          name="titre"
          id="titre"
          value={current.titre}
          onChange={onStringChange}
        />
        <hr />
        <label htmlFor="image">
          <h2>Image</h2>
        </label>
        <br />
        <select
          name="imageId"
          id="image"
          value={current.imageId}
          onChange={onNumberChange}
        >
          <option value="-1">No image</option>
          {images.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
        <hr />
        <label htmlFor="text">
          <h2>texte</h2>
        </label>
        <br />
        <input
          name="text"
          id="text"
          type="text"
          value={current.text}
          onChange={onStringChange}
        />
        <br />
        <label htmlFor="x">
          <h2 style={{ display: "inline" }}>x :</h2>
        </label>
        <input
          className={styles.smallNumber}
          name="x"
          id="x"
          type="number"
          value={current.x}
          onChange={onNumberChange}
        />
        <label htmlFor="y">
          <h2 style={{ display: "inline" }}>y :</h2>
        </label>
        <input
          className={styles.smallNumber}
          name="y"
          id="y"
          type="number"
          value={current.y}
          onChange={onNumberChange}
        />
        <hr />
        <br />
        <h2>Decorations</h2>
        <label htmlFor="color">
          <h2 style={{ display: "inline" }}>color :</h2>
        </label>
        <input name="color" id="color" type="color" value={current.color} onChange={onStringChange} />
        <br />
        <label htmlFor="fontSize">
          <h2 style={{ display: "inline" }}>font-size :</h2>
        </label>
        <input
          className={styles.smallNumber}
          name="fontSize"
          id="fontSize"
          type="number"
          min="0"
          value={current.fontSize}
          onChange={onNumberChange}
        />
        px
        <br />
        <label htmlFor="fontWeight">
          <h2 style={{ display: "inline" }}>font-weight :</h2>
        </label>
        <input
          className={styles.smallNumber}
          name="fontWeight"
          id="fontWeight"
          type="number"
          min="100"
          step="100"
          max="900"
          value={current.fontWeight} onChange={onStringChange}
        />
        <br />
        <input
          name="underline"
          id="underline"
          type="checkbox"
          checked={current.underline}
          onChange={onCheckChange}
        />
        &nbsp;
        <label htmlFor="underline">
          <h2 style={{ display: "inline" }}>underline</h2>
        </label>
        &nbsp;<h2 style={{ display: "inline" }}>/</h2>&nbsp;
        <label htmlFor="italic">
          <h2 style={{ display: "inline" }}>italic</h2>
        </label>
        &nbsp;
        <input
          name="italic"
          id="italic"
          type="checkbox"
          checked={current.italic}
          onChange={onCheckChange}

        />
        <hr />
        <br />
        <Button type="submit">Save</Button>
      </form>
    </div>
  );
};

export default MemeForm;
