import Button from "../components/ui/Button/Button";
function App() {
  return (
    <div>
      DEMAT BREIZH
      <br />
      <Button
        title={"benjamin"}
        bool={true}
        number={123}
        arr={[1, 2, 3]}
        obj={{ abc: 123 }}
        fn={()=>{
         
        }}
      />
      <Button title="ok"></Button>
      <Button title="cancel"></Button>
    </div>
  );
}

export default App;
