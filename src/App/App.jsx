import Button from "../components/ui/Button/Button";
function App() {
  return (
    <div>
      DEMAT BREIZH
      <br />
      <Button
      bgColor="tomato"
        title={"benjamin"}
        onButtonClick={(param)=>{
         console.log("j'ai cliqué sur benjamin",param)
        }} 
      />
      <Button bgColor='aquamarine' title="ok"  onButtonClick={(param)=>{
         console.log("j'ai cliqué sur ok",param)
        }} ></Button>
      <Button title="cancel"></Button>
    </div>
  );
}

export default App;
