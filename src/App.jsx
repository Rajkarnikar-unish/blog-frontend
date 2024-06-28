import "./App.css";
import HomePage from "./pages/HomePage";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EmployeeComponent from "./components/EmployeeComponent";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import WritePage from "./pages/WritePage";
import { ToastContainer } from "react-toastify";
import BlogPage from "./pages/BlogPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          {/* //http://localhost:3000 */}
          <Route path="/" element={<HomePage />} />

          <Route path="/login" element={<Login />} />

          <Route path="/signup" element={<Signup />} />

          <Route path="/new-blog" element={<WritePage />} />

          <Route path="/profile" element={<Profile />}></Route>

          <Route path="/:title" element={<BlogPage />}></Route>
        </Routes>
        {/* <FooterComponent /> */}
        <ToastContainer />
      </BrowserRouter>
    </>
  );
}

export default App;
