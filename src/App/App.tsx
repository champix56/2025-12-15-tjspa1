import { useEffect, useState } from "react";
import Button from "../components/ui/Button/Button";

const App: React.FC<undefined> = () => {
  const [counter, setCounter] = useState(-100);
  useEffect(() => {
    //componentDidMount
    console.log('didMount');
    setCounter(0);
    
    return () => {
      //componentWillUnmount
    };
  }, []);
  useEffect(() => {
    console.log('counter effect',counter);
  }, [counter]);

  return (
    <div style={{ textAlign: "center" }}>
      valeur de counter :{counter}
      <hr />
      <Button
        onButtonClick={() => {
          setCounter(counter - 1);
          console.log(counter);
        }}
      >
        -1
      </Button>
      <Button
        bgColor="skyblue"
        onButtonClick={() => {
          setCounter(counter + 1);

          console.log(counter);
        }}
      >
        +1
      </Button>
    </div>
  );
};

export default App;
