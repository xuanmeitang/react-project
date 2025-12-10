import "@/App.css";
import ToDoList from "@/components/ToDoList";
import Context from "@/components/Context";
import {useState} from "react";
import {Ctx} from "@/api/context";
import UseEffect from "@/components/UseEffect";

function App() {
  //  context传递的value值
  const [value, setValue] = useState("111");
  function getValue(value: string) {
    console.log("getValu", value);
  }

  return (
    <>
      <div className="App">
        <h1>react-study主页面</h1>
        <Ctx.Provider value={value}>
          <Context />
        </Ctx.Provider>

        <ToDoList getValue={getValue} />
        <UseEffect />
      </div>
      <div></div>
    </>
  );
}

export default App;
