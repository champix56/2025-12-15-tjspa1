import Button from "../components/ui/Button/Button";
function App() {
  return (
    <div>
      DEMAT BREIZH
      <br />
      <Button
        bgColor="tomato"
        title={"benjamin"}
        onButtonClick={(param) => {
          console.log("j'ai cliqué sur benjamin", param);
        }}
      >
        OK
      </Button>
      <Button
        bgColor="aquamarine"
        onButtonClick={(param) => {
          console.log("j'ai cliqué sur ok", param);
        }}
      >
        <div>Cancel</div>
      </Button>
      <Button>
        <div>3eme</div>
        <div>button</div>
      </Button>
    </div>
  );
}

export default App;
