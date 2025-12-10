import React from "react";
import {useContext} from "react";
import {Ctx} from "@/api/context";

export default function Context() {
  const value = useContext(Ctx);
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}>
        <div>Context组件,使用useContext获得数据</div>
        <span>获取到的数据为:{value}</span>
      </div>
    </>
  );
}
