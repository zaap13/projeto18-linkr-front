import { Routes, Route, Navigate } from "react-router-dom";
import Hashtag from "../pages/Hashtag/Hashtag";
import TimeLine from "../pages/TimeLine/TimeLine";
import UserPage from "../pages/UserPage/UserPage";

export default function PrivateRoutes() {
  return (
    <Routes>
      <Route path="/timeline" element={<TimeLine />} />
      <Route path="/user/:id" element={<UserPage />} />
      <Route path="/hashtag/:hashtag" element={<Hashtag />} />

      {<Route path="*" element={<Navigate to="/timeline" />} />}
    </Routes>
  );
}
