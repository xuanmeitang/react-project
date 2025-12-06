import {Component} from "react";
interface IsState {
  num: number;
}
export default class ClassComponent extends Component<object, IsState> {
  // constructor(props: object) {
  //   super(props);
  //   this.state = {
  //     num: 0,
  //   };
  //   console.log("props", this);
  //   this.classFun = this.classFun.bind(this);
  // }
  state = {num: 1111}
  classFun = () => {
    console.log("classFun", this);
    this.setState({
      num: 111,
    });
  };
  render() {
    return (
      <div>
        <h1>ClassComponent 类组件</h1>
        <p>num:{this.state.num}</p>
        <button onClick={this.classFun}>num</button>
      </div>
    );
  }
}
