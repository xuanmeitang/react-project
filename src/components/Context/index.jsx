import React from "react";
import {useContext} from "react";
import {Ctx} from "@/api/context";

export default function Context() {
  const value = useContext(Ctx);

  return (
    <>
      <div
        style={{
          // 基础布局
          width: "100%",
          minHeight: "200px", // 保证最小高度，避免内容过少时太单薄
          padding: "24px",
          display: "flex",
          flexDirection: "column",
          gap: "16px", // 增大间距更透气

          // 背景与边框（柔和质感）
          backgroundColor: "#F9F7F4", // 奶油白背景
          borderRadius: "12px", // 圆角更现代
          border: "1px solid #E5E0D8", // 浅边框增加层次

          // 阴影提升质感
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",

          // 字体与排版
          fontFamily: "'Inter', 'PingFang SC', 'Microsoft YaHei', sans-serif",
          color: "#2D3748", // 深灰文字（比纯黑更护眼）
        }}>
        <div
          style={{
            fontSize: "18px",
            fontWeight: 600,
            color: "#2C5F2D", // 墨绿主标题
          }}>
          Context组件,使用useContext获得数据
        </div>
        <span
          style={{
            fontSize: "16px",
            lineHeight: 1.6,
            color: "#4A5568", // 中灰内容文字
            // 空数据时的提示样式
            ...(value === undefined || value === null
              ? {color: "#9F7AEA", fontStyle: "italic"}
              : {}),
          }}>
          获取到的数据为:{" "}
          <span style={{fontWeight: 500, color: "#2D3748"}}>{value ?? "未获取到数据"}</span>
        </span>
      </div>
    </>
  );
}
