import {useState} from "react";
interface page1Props {
  num?: number;
  onClick?: () => void;
  obj?: {
    name: string;
    age: number;
  };
}
// export default function Page1({num, onClick}: page1Props) {
export default function Page1(props: page1Props) {
  const [a, setA] = useState(5);
  console.log("Page1的props", props);
  const car = {
    brand: "跟驰",
    price: 1000000,
  };
  console.log("car", {...car});
  return (
    <div>
      <h1>Page 1</h1>
      <p>{a}</p>
      <p>name:{props.obj?.name}</p>
      <button onClick={() => setA(a + 1)}>a加一</button>
      <button onClick={props.onClick}>点击更新num</button>
      点了{props.num}次
    </div>
  );
}
