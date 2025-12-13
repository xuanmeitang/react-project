import {useState, useCallback} from "react";
import "./index.css";

export default function ToDoList(props) {
  const [list, setList] = useState(["吃饭", "睡觉"]);
  const [count, setCount] = useState(0);

  // 优化鼠标事件（使用 useCallback 减少重渲染）
  const handleMouseEnter = useCallback(() => {}, []);
  const handleMouseLeave = useCallback(() => {}, []);

  // 优化删除逻辑（避免直接修改原数组）
  const handleDelete = (index) => {
    // 先判断当前项是否被选中，再更新计数
    const checkbox = document.querySelector(`input[type="checkbox"][data-index="${index}"]`);
    if (checkbox?.checked && count > 0) {
      setCount((prev) => prev - 1);
    }
    // 不可变更新数组（避免 splice 直接修改原数组）
    setList((prev) => prev.filter((_, i) => i !== index));
  };

  // 优化复选框变更逻辑
  const handleCheckboxChange = (e) => {
    setCount((prev) => (e.target.checked ? prev + 1 : Math.max(0, prev - 1)));
  };

  return (
    <div className="todo-list">
      {/* 输入框 */}
      <input
        className="todo-input"
        type="text"
        placeholder="请输入任务"
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            const value = e.target.value.trim();
            if (value) {
              props.getValue?.(value); // 可选链避免报错
              setList((prev) => [value, ...prev]); // 不可变更新
              e.target.value = "";
            }
          }
        }}
      />

      {/* 任务列表 */}
      <ul className="todo-list-container">
        {list.map((item, index) => {
          return (
            <li
              key={index}
              className="todo-list-item"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}>
              <input
                className="todo-checkbox"
                type="checkbox"
                data-index={index} // 标记索引，方便删除时判断
                onChange={handleCheckboxChange}
              />
              <span className="todo-item-text">{item}</span>
              <button
                className="todo-delete-btn"
                onClick={() => handleDelete(index)}>
                删除
              </button>
            </li>
          );
        })}
      </ul>

      {/* 统计信息 */}
      <div className="todo-statistics">
        已完成 <span>{count}</span> / 全部 <span>{list.length}</span>
      </div>
    </div>
  );
}
