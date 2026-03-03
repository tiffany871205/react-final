import { createHashRouter } from "react-router";
import FrontLayout from "./assets/layout/FrontLayout";
import Index from "./assets/pages/front/Index";
import ProductList from "./assets/pages/front/ProductList";
import ProductDetail from "./assets/pages/front/ProductDetail";
import Cart from "./assets/pages/front/Cart";
import Checkout from "./assets/pages/front/Checkout";
import About from "./assets/pages/front/About";
import Buy from "./assets/layout/Buy";
import OrderSuccess from "./assets/pages/front/OrderSuccess";
import NotFound from "./assets/pages/NotFound";
import AdminLayout from "./assets/layout/AdminLayout";
import AdminOrders from "./assets/pages/admin/AdminOrders";
import AdminProducts from "./assets/pages/admin/AdminProducts";
import Login from "./assets/pages/admin/Login";

export const router = createHashRouter([
  // 前台
  {
    path: "/",
    element: <FrontLayout />,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: "products",
        element: <ProductList />,
      },
      {
        path: "product/:id",
        element: <ProductDetail />,
      },
      {
        path: "buy",
        element: <Buy />,
        children: [
          {
            path: "cart",
            element: <Cart />,
          },
          {
            path: "checkout",
            element: <Checkout />,
          },
          {
            path: "orderSuccess",
            element: <OrderSuccess />,
          },
        ],
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
  //   管理者
  {
    path: "admin",
    element: <AdminLayout />,
    children: [
      {
        path: "adminOrders",
        element: <AdminOrders />,
      },
      {
        path: "adminProducts",
        element: <AdminProducts />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
  //   404
  {
    path: "*",
    element: <NotFound />,
  },
]);
