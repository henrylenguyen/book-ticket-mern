import Footer from "layouts/Footer";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import NotFoundPage from "./pages/NotFoundPage";
import routes from "./routes/routes";

function App() {
  return (
    <>
      <Routes>
        {/* Thay vì để Header chỗ này nó sẽ lun xuất hiện */}
        <Route path="/" element={<Navbar />}>
          {/* Đưa nó vào route để quản lí  - 1 route có thể chứa nhiều route con - Giống như 1 component chứa nhiều component con */}
          {routes?.map(({ path, component: Component }, index) => (
            <Route key={index} path={path} element={<Component />}></Route>
          ))}
        </Route>

        {/* Đây là not found */}
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
