/* eslint-disable react-hooks/set-state-in-render */
/* eslint-disable react-hooks/immutability */
import {useEffect} from "react";
import axios from "axios";
import {useState} from "react";
interface Channels {
  id: number;
  name: string;
}

function useRequest(URL: string) {
  console.log("函数执行了");
  const [data, setData] = useState<Channels[]>([]);
  useEffect(() => {
    axios.get(URL).then((res) => {
      setData(res.data.data.channels);
    });
  }, []);
  return {data};
}
export default function UseEffect() {
  const URL = "http://geek.itheima.net/v1_0/channels";
  const {data} = useRequest(URL);
  // async function getList() {
  //   const res = axios.get("http://geek.itheima.net/v1_0/channels");
  //   res
  //     .then((res) => {
  //       const data = res.data.data.channels;
  //       setList(data);
  //     })
  //     .catch((err) => console.log(err));
  // }
  return (
    <>
      <div>useEffect组件</div>
      <div>
        {data.map((item: Channels) => (
          <div key={item.id}>{item.name}</div>
        ))}
      </div>
    </>
  );
}
