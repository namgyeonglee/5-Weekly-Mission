import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./components/App"
import FavoriteListPage from "./pages/FavoriteListPage"

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<FavoriteListPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Main;