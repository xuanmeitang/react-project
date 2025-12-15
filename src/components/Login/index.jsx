import {useDispatch, useSelector} from "react-redux";
import {asyncLogin} from "@/store/modules/loginRequest";
import {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {message} from "antd";
import "./index.css";

export default function Login() {
  const {token} = useSelector((store) => store.login);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const URL = "/v1_0/authorizations";
  const [loginParams, setLoginParams] = useState({
    mobile: "",
    code: "",
  });
  const getToken = async () => {
    dispatch(asyncLogin(URL, loginParams));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (loginParams.mobile && loginParams.code) {
      getToken();
      navigate("/home");
      message.success("登录成功");
      console.log("登录成功");
    } else {
      message.error("请输入手机号和验证码");
    }
   
  };

  return (
    <div className="login-page">
      <form onSubmit={handleSubmit}>
        <label>
          手机号:
          <input
            type="text"
            name="mobile"
            onChange={(e) => {
              setLoginParams({...loginParams, mobile: e.target.value});
            }}
          />
          验证码:
          <input
            type="text"
            name="code"
            onChange={(e) => {
              setLoginParams({...loginParams, code: e.target.value});
            }}
          />
        </label>
        <button type="submit">登录</button>
      </form>
    </div>
  );
}
