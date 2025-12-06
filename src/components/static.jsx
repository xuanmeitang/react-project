import {Component} from "react";
import PropTypes from "prop-types";
export default class StaticClass extends Component {
  static propTypes = {
    num: PropTypes.number,
  };
  static defaultProps = {
    num: 123,
  };
  render() {
    return (
      <div>
        <h1>静态类组件</h1>
        <p>静态类的num:{this.props.num}</p>
      </div>
    );
  }
}
