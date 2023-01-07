import { Routes, Route, Navigate } from "react-router-dom";
import TimeLine from "../pages/TimeLine/TimeLine";
import UserPage from "../pages/UserPage/UserPage";

export default function PrivateRoutes() {
  return (
    <Routes>
      <Route path="/timeline" element={<TimeLine />} />
      <Route path="/user" element={<UserPage />} />

      {<Route path="*" element={<Navigate to="/timeline" />} />}
    </Routes>
  );
}
