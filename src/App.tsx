import "@/App.css";
import ToDoList from "@/components/ToDoList";
import Context from "@/components/Context";
import { useState } from "react";
import { Ctx } from "@/api/context";



function App() {
  //  context传递的value值
  const [value, setValue] = useState("111");
  function getValue(value: string) {
    console.log("getValu", value);
  }

  return (
    <>
      <Ctx.Provider value={value}>
        <Context />
      </Ctx.Provider>
      <div className="App">
        <h1>react-study</h1>

        <ToDoList getValue={getValue} />
      </div>
    </>
  );
}

export default App;
