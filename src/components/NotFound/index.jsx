import React from "react";
import "./index.css";

export default function NotFound() {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <div className="error-code">404</div>
        <h1 className="error-title">页面未找到</h1>
        <p className="error-message">抱歉，您访问的页面不存在或已被移除。</p>
        <div className="error-actions">
          <a
            href="/"
            className="home-button">
            返回首页
          </a>
          <a
            href="#"
            className="back-button"
            onClick={() => window.history.back()}>
            返回上一页
          </a>
        </div>
      </div>
    </div>
  );
}
