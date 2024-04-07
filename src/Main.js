import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./components/App"
import FavoriteListPage from "./pages/FavoriteListPage"
import FolderPage from "./pages/FolderPage";

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="shared" element={<FavoriteListPage />} />
          <Route path="folder" element={<FolderPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Main;