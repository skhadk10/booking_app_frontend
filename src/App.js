import Login from "./auth/Login";
import Home from "./booking/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./auth/Register";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TopNav from "./components/TopNav";
function App() {
  return (
    <BrowserRouter>
      <ToastContainer position="top-center" />
      <TopNav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
