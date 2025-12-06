import {useRef, createRef} from "react";
export default function RefCopmponent() {
  const inputRef = useRef<HTMLInputElement>(null);
  const buttonRef = createRef<HTMLInputElement>();
  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
      const value = inputRef.current?.value;
      console.log("输入框数据", value);
    }
  };
  return (
    <>
      <input
        ref={inputRef}
        placeholder="请输入"></input>
      <button onClick={handleClick}>获取value</button>
      <input
        ref={buttonRef}
        placeholder="通过createRef创建的ref"></input>
      <button
        onClick={() => {
          console.log("111", buttonRef.current);
        }}></button>
    </>
  );
}
