import React from "react";
import styles from "./MemeForm.module.css";
import Button from "../../ui/Button/Button";
import type { IMemeFormProps } from "./MemeForm.interface";

//const initialState = {};

const MemeForm: React.FC<IMemeFormProps> = ({style, images, meme, onMemeChange }) => {

  const onNumberChange = (
    evt: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    onMemeChange({...meme, [evt.target.name]: parseInt(evt.target.value) });
  };
  const onStringChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    onMemeChange({...meme, [evt.target.name]: evt.target.value });
  };
  const onCheckChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    onMemeChange({...meme, [evt.target.name]: evt.target.checked });
  };
  return (
    <div className={styles.MemeForm} data-testid="MemeForm" style={style}>
      <form
        onSubmit={(evt) => {
          evt.preventDefault();
          //onMemeChange(current);
        }}
      >
        <label htmlFor="titre">
          <h1>Titre</h1>
        </label>
        <br />
        <input
          name="titre"
          id="titre"
          value={meme.titre}
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
          value={meme.imageId}
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
          value={meme.text}
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
          value={meme.x}
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
          value={meme.y}
          onChange={onNumberChange}
        />
        <hr />
        <br />
        <h2>Decorations</h2>
        <label htmlFor="color">
          <h2 style={{ display: "inline" }}>color :</h2>
        </label>
        <input name="color" id="color" type="color" value={meme.color} onChange={onStringChange} />
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
          value={meme.fontSize}
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
          value={meme.fontWeight} onChange={onStringChange}
        />
        <br />
        <input
          name="underline"
          id="underline"
          type="checkbox"
          checked={meme.underline}
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
          checked={meme.italic}
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
