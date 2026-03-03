import { Link, Outlet } from "react-router";

function Buy() {
  return (
    <>
      我是購買排版頁面
      <ul className="nav mt-2 mb-4 ms-2">
        <li className="nav-item">
          <Link className="nav-link nav-item" aria-current="page" to="/buy/cart">
            購物車
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link nav-item" aria-current="page" to="/buy/checkout">
            結帳
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link nav-item" aria-current="page" to="/buy/orderSuccess">
            成功頁面
          </Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
}

export default Buy;
