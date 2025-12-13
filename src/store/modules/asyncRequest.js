import {createSlice} from "@reduxjs/toolkit";
import axios from "axios";
const asyncRequset = createSlice({
  name: "asyncRequest",
  initialState: {
    channelList: [],
  },
  reducers: {
    changeChannelList(state, action) {
      state.channelList = action.payload;
    },
  },
});
const {changeChannelList} = asyncRequset.actions;
const getChannelList = () => {
  const URL = "http://geek.itheima.net/v1_0/channels";
  return async (dispatch) => {
    const res = await axios.get(URL);
    //将异步请求获得的数据通过dispatch传递给action
    dispatch(changeChannelList(res.data.data.channels));
  };
};

export {getChannelList};
const reducer = asyncRequset.reducer;
export default reducer;
