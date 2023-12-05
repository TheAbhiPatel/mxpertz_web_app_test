import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import AddNewStudent from "./pages/AddNewStudent";

const App = () => {
  return (
    <BrowserRouter>
      <div className="max-w-[1250px] mx-auto">
        <Navbar />
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="/" element={<Home />} />
          <Route path="/add-student" element={<AddNewStudent />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
