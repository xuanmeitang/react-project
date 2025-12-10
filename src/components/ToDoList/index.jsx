import {useState} from "react";
import "./index.css";

export default function ToDoList(props) {
  const [list, setList] = useState(["吃饭", "睡觉"]);
  const [count, setCount] = useState(0);
  const [mouse, setMouse] = useState(false);
  function handleMouse(flag) {
    return () => {
      return setMouse(flag);
    };
  }
  return (
    <>
      <div className="todo-list">
        <input
          //新增功能
          type="text"
          placeholder="请输入任务"
          onKeyUp={(e) => {
            if (e.key == "Enter") {
              props.getValue(e.target.value);
              if (e.target.value.trim()) {
                setList([e.target.value, ...list]);
                e.target.value = "";
              }
            } else {
              return;
            }
          }}></input>
        <ul
          style={{
            listStyleType: "none",
            display: "flex",
            justifyContent: "start",
            alignItems: "start",
            flexDirection: "column",
            paddingLeft: 0,
          }}>
          {list.map((item, index) => {
            return (
              <li
                key={index}
                onMouseEnter={handleMouse(true)}
                onMouseLeave={handleMouse(false)}
                style={{color: mouse ? "orange" : "white", marginLeft: 10}}>
                <div>
                  <label>
                    <input
                      //选中功能
                      type="checkbox"
                      onChange={(e) => {
                        if (e.target.checked) {
                          setCount((e) => (e += 1));
                        } else {
                          setCount((e) => (e -= 1));
                        }
                      }}></input>
                  </label>
                  <span>{item}</span>{" "}
                  <span>
                    <button
                      style={{marginLeft: 20}}
                      //删除功能
                      onClick={(e) => {
                        console.log(e);
                        console.log(item);
                        // const newList = list.filter((i) => {
                        //   return i !== item;
                        // });
                        // setList([...newList]);
                        list.splice(list.indexOf(item), 1);
                        setList([...list]);
                        if (count > 0) {
                          setCount((e) => (e -= 1));
                        }
                      }}>
                      删除
                    </button>
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
        <div>
          <span>
            已完成 {count} / 全部 {list.length}
          </span>
        </div>
      </div>
    </>
  );
}
