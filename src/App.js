import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Page/Home";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
