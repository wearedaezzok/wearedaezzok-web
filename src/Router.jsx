import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import UserCount from "./pages/UserCount";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/user-count" element={<UserCount />} />
      </Routes>
    </BrowserRouter>
  );
}
