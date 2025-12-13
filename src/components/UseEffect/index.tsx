/* eslint-disable react-hooks/set-state-in-render */
/* eslint-disable react-hooks/immutability */
import {useEffect, useState} from "react";
import axios from "axios";
// 导入全局 CSS 文件（和你的项目导入方式一致）
import "./index.css";

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
  }, [URL]); // 补充 URL 依赖，符合 hooks 规范

  return {data};
}

export default function UseEffect() {
  const URL = "http://geek.itheima.net/v1_0/channels";
  const {data} = useRequest(URL);

  return (
    <div className="useeffect-container">
      {/* 组件标题 */}
      <div className="useeffect-title">useEffect组件</div>

      {/* 频道列表区域 */}
      <div className="useeffect-list-wrapper">
        {data.length > 0 ? (
          data.map((item: Channels) => (
            <div
              key={item.id}
              className="useeffect-list-item">
              {item.name}
            </div>
          ))
        ) : (
          <div className="useeffect-empty-tip">加载中.../暂无频道数据</div>
        )}
      </div>
    </div>
  );
}
