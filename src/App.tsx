import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/landing";
import Mission from "./pages/Mission";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/mission" element={<Mission />} />
      </Routes>
    </BrowserRouter>
  );
}
