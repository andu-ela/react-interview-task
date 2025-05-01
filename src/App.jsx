import { Routes, Route } from "react-router-dom";
import JobSitesPage from "./pages/JobSitesPage";
import InventoryPage from "./pages/InventoryPage"; // krijohet në hapin tjetër

function App() {
  return (
    <Routes>
      <Route path="/" element={<JobSitesPage />} />
      <Route path="/inventory/:id" element={<InventoryPage />} />

    </Routes>
  );
}

export default App;
