import "@/App.css";
import {Link, Outlet} from "react-router-dom"; // 改为 Outlet

function App() {
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

        <nav className="nav-menu">
          <Link
            to="/todoList"
            className="nav-link">
            <span className="nav-icon">🏠</span>
            <span className="nav-text">ToDoList组件</span>
          </Link>
          <Link
            to="/context"
            className="nav-link">
            <span className="nav-icon">📦</span>
            <span className="nav-text">Context组件</span>
          </Link>
          <Link
            to="/useEffect"
            className="nav-link">
            <span className="nav-icon">🔄</span>
            <span className="nav-text">useEffect组件</span>
          </Link>
          <Link
            to="/redux"
            className="nav-link">
            <span className="nav-icon">🛒</span>
            <span className="nav-text">Redux组件</span>
          </Link>
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
          {/* 使用 Outlet 渲染子路由 */}
          <Outlet />  
        </div>
      </main>
    </div>
  );
}

export default App;
