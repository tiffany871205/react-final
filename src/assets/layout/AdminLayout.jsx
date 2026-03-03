import { Link, Outlet } from "react-router";

function AdminLayout() {
  return (
    <>
      <ul className="nav mt-2 mb-4 ms-2">
        <li className="nav-item">
          <Link className="nav-link nav-item" aria-current="page" to="/admin/adminOrders">
            訂單
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link nav-item" aria-current="page" to="/admin/adminProducts">
            商品管理
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link nav-item" aria-current="page" to="/admin/login">
            登入
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link nav-item" aria-current="page" to="/">
            返回前台
          </Link>
        </li>
      </ul>
      我是後台排版頁面
      <Outlet />
    </>
  );
}

export default AdminLayout;
