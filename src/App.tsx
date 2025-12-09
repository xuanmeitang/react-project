import "@/App.css";
import ToDoList from "@/components/ToDoList";
function App() {
  function getValue(value: string) {
    console.log("getValu", value);
  }
  return (
    <>
      <div className="App">
        <h1>react-study</h1>

        <ToDoList getValue={getValue} />
      </div>
    </>
  );
}

export default App;
