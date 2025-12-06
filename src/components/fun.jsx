import PropTypes from "prop-types";
export default function FunComponent(props) {
  console.log("函数组件的props", props);
  return (
    <div>
      <h1>函数组件</h1>
      <p>函数组件的num:{props.num}</p>
    </div>
  );
}
FunComponent.propTypes = {
  num: PropTypes.number.isRequired,
};
FunComponent.defaultProps = {
  num: 111,
};
