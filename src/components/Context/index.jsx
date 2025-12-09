import React from "react";
import {useContext} from "react";
import {Ctx} from "@/api/context";

export default function Context() {
  const value = useContext(Ctx);
  return (
    <>
      <div>Context组件,使用useContext获得数据</div>
      <span>{value}</span>
    </>
  );
}
