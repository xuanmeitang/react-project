import {useSelector, useDispatch} from "react-redux";
import {increment, decrement, addNumber} from "@/store/modules/counterStore";
import {getChannelList} from "@/store/modules/asyncRequest";
import {useEffect} from "react";
// 导入全局 CSS 文件（和你的项目导入方式一致）
import "./index.css";

export default function Redux() {
  const {count} = useSelector((store) => store.counter);
  const {channelList} = useSelector((store) => store.asyncRequest);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getChannelList());
  }, [dispatch]);

  return (
    <div className="redux-container">
      <div className="redux-title">Redux 组件</div>

      <div className="redux-counter-wrapper">
        <button
          className="redux-base-btn redux-minus-btn"
          onClick={() => dispatch(decrement())}>
          -
        </button>

        <span className="redux-counter-value">{count}</span>

        <button
          className="redux-base-btn redux-plus-btn"
          onClick={() => dispatch(increment())}>
          +
        </button>
      </div>

      {/* 自定义数值按钮区域 */}
      <div className="redux-custom-btn-wrapper">
        <button
          className="redux-custom-btn redux-add10-btn"
          onClick={() => dispatch(addNumber(10))}>
          +10
        </button>
        <button
          className="redux-custom-btn redux-add20-btn"
          onClick={() => dispatch(addNumber(20))}>
          +20
        </button>
      </div>

      {/* 频道列表区域 */}
      <div className="redux-channel-list-wrapper">
        {channelList?.length > 0 ? (
          <ul className="redux-channel-list">
            {channelList.map((item) => (
              <li
                key={item.id}
                className="redux-channel-item">
                {item.name}
              </li>
            ))}
          </ul>
        ) : (
          <div className="redux-empty-tip">暂无频道数据</div>
        )}
      </div>
    </div>
  );
}
