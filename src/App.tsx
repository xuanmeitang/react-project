import "@/App.css";
import {Outlet} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import request from "@/utils/request";
function App() {
  const navigate = useNavigate();
  return (
    <div className="app-container">
      {/* 侧边栏导航 - 保持不变 */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <h2 className="app-title">
            <span className="app-icon">⚛️</span>
            React Study
          </h2>
          <p className="app-subtitle">一个学习React的项目</p>
        </div>

        <nav>
          <ul>
            <li onClick={() => navigate("/home/todoList")}>
              <span className="nav-icon">🏠</span>
              <span className="nav-text">ToDoList组件</span>
            </li>
            <li onClick={() => navigate("/home/context")}>
              <span className="nav-icon">📦</span>
              <span className="nav-text">Context组件</span>
            </li>
            <li onClick={() => navigate("/home/redux")}>
              <span className="nav-icon">🔄</span>
              <span className="nav-text">Redux组件</span>
            </li>
            <li onClick={() => navigate("/home/useEffect")}>
              <span className="nav-icon">🔑</span>
              <span className="nav-text">useEffect组件</span>
            </li>
          </ul>
        </nav>

        <div className="sidebar-footer">
          <div className="status-indicator">
            <div className="status-dot"></div>
            <span>正在运行</span>
          </div>
        </div>
      </aside>

      {/* 主内容区域 */}
      <main className="main-content">
        <header className="content-header">
          <h1 className="page-title">React学习项目</h1>
        </header>

        <div className="content-area">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default App;
