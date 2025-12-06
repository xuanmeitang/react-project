import "@/App.css";
import Page1 from "./components/page1";
import ClassComponent from "./components/ClassComponent";
import {useState} from "react";
import StaticClass from "@/components/static.jsx";
import FunComponent from "@/components/fun";
import RefCopmponent from "@/components/ref";
function App() {
  const [num, setNum] = useState(1);
  const [obj, setObj] = useState({
    name: "张三",
    age: 11,
  });
  function handleClick() {
    setNum(num + 1);
  }
  return (
    <>
      <div className="App">
        <h1>react-study</h1>
        <Page1
          num={num}
          onClick={handleClick}
        />
        <Page1 obj={obj} />

        <Page1
          num={num}
          onClick={handleClick}
        />
        <ClassComponent />
        <StaticClass />
        <FunComponent />
        <RefCopmponent />
      </div>
    </>
    //  <div
    //     onPointerMove={(e) => {
    //       setPosition({
    //         x: e.clientX,
    //         y: e.clientY,
    //       });
    //     }}
    //     style={{
    //       width: "200px",
    //       height: "200px",
    //       background: "lightblue",
    //       border: "2px solid darkblue",
    //       borderRadius: "8px",
    //       position: "relative",
    //     }}></div>
    // <div
    //     style={{
    //       width: 20,
    //       height: 20,
    //       background: "pink",
    //       position: "absolute",
    //       transform: `translate(${position.x}px,${position.y}px)`,
    //       left: 0,
    //       top: 0,
    //     }}></div>
  );
}

export default App;
