import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import ProjectDetails from "../pages/ProjectDetails";
import NotFound from "../pages/NotFound";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/project/:id" element={<ProjectDetails />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
