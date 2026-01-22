import {useState, useEffect} from "react";
import "./index.css"; // 导入样式文件

export default function Search() {
  const [sexFilter, setSexFilter] = useState("-1");
  const [searchKey, setSearchKey] = useState("");
  const [filterList, setFilterList] = useState([]);

  const List = [
    {name: "张三", sex: "1"},
    {name: "李四", sex: "0"},
    {name: "王五", sex: "1"},
    {name: "赵六", sex: "0"},
  ];

  function updateData() {
    let result = [...List];
    if (sexFilter !== "-1") {
      result = result.filter((item) => item.sex === sexFilter);
    }
    if (searchKey.trim()) {
      result = result.filter((item) => item.name.includes(searchKey.trim()));
    }
    setFilterList(result);
  }

  useEffect(() => {
    updateData();
  }, [sexFilter, searchKey]);

  return (
    <div className="search-container">
      {/*新增人员 */}
      <div className="add-section">
        <label>
          <input
            type="text"
            placeholder="请输入姓名"
            className="search-input"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                if(e.target.value.trim() === ""){
                  return;
                }
                setFilterList([...filterList, {name: e.target.value, sex: sexFilter}]);
                e.target.value = "";
              }
            }}
          />
        </label>
      </div>
      {/* 筛选区域 */}
      <div className="filter-section">
        <h3 className="section-title">性别筛选</h3>
        <div className="radio-group">
          <label className="radio-label">
            <input
              type="radio"
              onChange={(e) => setSexFilter(e.target.value)}
              checked={sexFilter === "-1"}
              value="-1"
              className="radio-input"
            />
            <span className="radio-text">全部</span>
          </label>

          <label className="radio-label">
            <input
              type="radio"
              onChange={(e) => setSexFilter(e.target.value)}
              checked={sexFilter === "1"}
              value="1"
              className="radio-input"
            />
            <span className="radio-text">男</span>
          </label>

          <label className="radio-label">
            <input
              type="radio"
              onChange={(e) => setSexFilter(e.target.value)}
              checked={sexFilter === "0"}
              value="0"
              className="radio-input"
            />
            <span className="radio-text">女</span>
          </label>
        </div>
      </div>

      {/* 搜索区域 */}
      <div className="search-section">
        <h3 className="section-title">姓名搜索</h3>
        <input
          type="text"
          value={searchKey}
          onChange={(e) => setSearchKey(e.target.value)}
          placeholder="输入姓名关键词..."
          className="search-input"
        />
      </div>

      {/* 结果区域 */}
      <div className="result-section">
        <h3 className="section-title">
          查询结果 <span className="result-count">({filterList.length} 条)</span>
        </h3>

        {filterList.length > 0 ? (
          <div className="table-container">
            <table className="search-table">
              <thead>
                <tr className="table-header">
                  <th className="table-header-cell">姓名</th>
                  <th className="table-header-cell">性别</th>
                </tr>
              </thead>
              <tbody>
                {filterList.map((item, index) => (
                  <tr
                    key={index}
                    className="table-row"
                    style={{
                      backgroundColor: index % 2 === 0 ? "#ffffff" : "#f8f9fa",
                    }}>
                    <td className="table-cell">{item.name}</td>
                    <td className="table-cell">
                      <span className={`gender-badge ${item.sex === "1" ? "male" : "female"}`}>
                        {item.sex === "1" ? "男" : "女"}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="empty-state">
            <div className="empty-icon">🔍</div>
            <p className="empty-text">未找到匹配的结果</p>
            <p className="empty-sub-text">尝试调整筛选条件或搜索关键词</p>
          </div>
        )}
      </div>
    </div>
  );
}
