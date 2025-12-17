const initialState = {
  meme: {
    titre: "",
    text: "",
    x: 0,
    y: 17,
    fontWeight: "500",
    fontSize: 30,
    underline: false,
    italic: false,
    imageId: 0,
    color: "#000000",
    frameSizeX: 0,
    frameSizeY: 0,
  },
};

const reducer = (state = initialState, action) => {
  console.log(action);

  switch (action.type) {
    case "update":
      return { ...state, meme: { ...state.meme, ...action.payload } };
    case "clear":
      return { ...state, meme: initialState.meme };
    default:
      return state;
  }
};
let stateb = reducer(undefined, { type: "@@INIT" });
console.log(stateb);
stateb = reducer(state, { type: "update", payload: { id: 0, text: "coucou" } });
console.log(stateb);
stateb = reducer(state, { type: "update", payload: { id: 0, text: "toto" } });
console.log(stateb);
stateb = reducer(state, { type: "clear" });
console.log(stateb);
