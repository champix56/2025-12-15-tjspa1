import Button from "../components/ui/Button/Button";
function App() {
  return (
    <div>
      DEMAT BREIZH
      <br />
      <Button
        bgColor="tomato"
        onButtonClick={() => {
          console.log("j'ai cliqué sur benjamin");
        }}
      >
        OK
      </Button>
      <Button
        bgColor="aquamarine"
        onButtonClick={() => {
          console.log("j'ai cliqué sur ok");
        }}
      >
        <div>Cancel</div>
      </Button>
      <Button >
        <div>3eme</div>
        <div>button</div>
      </Button>
    </div>
  );
}

export default App;
