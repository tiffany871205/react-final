import { RouterProvider } from "react-router";
import "./assets/scss/all.scss";
import { router } from "./router";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
