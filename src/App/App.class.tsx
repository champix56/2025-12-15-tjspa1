import React, { Component, PureComponent } from "react";
import Button from "../components/ui/Button/Button";

type State = {
  counter: number;
};

class App extends PureComponent<undefined, State> {
  constructor(props: any) {
    super(props);
    this.state = { counter: 0 };
  }
  render() {
    return (
      <div>
        <Button
          onButtonClick={() => {
            this.setState({ counter: this.state.counter - 1 });
            console.log(this.state.counter);
          }}
        >
          -1
        </Button>
        <Button
          bgColor="skyblue"
          onButtonClick={() => {
            this.setState({ counter: this.state.counter + 1 });
            console.log(this.state.counter);
          }}
        >
          +1
        </Button>
      </div>
    );
  }
}
export default App;
