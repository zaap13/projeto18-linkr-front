import { Routes, Route, Navigate } from "react-router-dom";
import TimeLine from "../pages/TimeLine/TimeLine";

export default function PrivateRoutes() {
  return (
    <Routes>
      <Route path="/timeline" element={<TimeLine />} />

      <Route path="*" element={<Navigate to="/timeline" />} />
    </Routes>
  );
}
