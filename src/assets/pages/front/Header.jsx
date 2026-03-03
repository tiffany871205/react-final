import { Link } from "react-router";

function Header() {
  return (
    <>
      <ul className="nav mt-2 mb-4 ms-2">
        <li className="nav-item">
          <Link className="nav-link nav-item" aria-current="page" to="/">
            首頁
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link nav-item" aria-current="page" to="/about">
            關於我們
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link nav-item" aria-current="page" to="/products">
            產品列表
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link nav-item" aria-current="page" to="/buy">
            購物車
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link nav-item" aria-current="page" to="/admin">
            後台
          </Link>
        </li>
      </ul>
    </>
  );
}

export default Header;
