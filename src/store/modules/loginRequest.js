import {createSlice} from "@reduxjs/toolkit";
import request from "@/utils/request";

const loginStore = createSlice({
  name: "login",
  initialState: {
    token: localStorage.getItem("token") || "",
  },
  reducers: {
    getToken(state, action) {
      state.token = action.payload;
      localStorage.setItem("token", action.payload);
    },
  },
});

const {getToken} = loginStore.actions;

const asyncLogin = (url, params) => {
  return async (dispatch) => {
    try {
      const res = await request.post(url, params);
      dispatch(getToken(res.data.data.token));
    } catch (error) {
      console.error("登录失败:", error);
    }
  };
};
export {asyncLogin, getToken};
const reducer = loginStore.reducer;
export default reducer;
