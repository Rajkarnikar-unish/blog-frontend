import "./App.css";
import Home from "./components/home/Home";
import Header from "./components/header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/auth/Login";
import Profile from "./components/user/Profile";
import Signup from "./components/auth/Signup";
import { ToastContainer } from "react-toastify";
import Blog from "./components/blog/Blog";
import Write from "./components/blog/Write";
import EmailVerification from "./components/auth/EmailVerification";
import ForgotPassword from "./components/auth/ForgotPassword";
import ResetPassword from "./components/auth/ResetPassword";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          {/* //http://localhost:3000 */}
          <Route path="/" element={<Home />} />

          <Route path="/login" element={<Login />} />

          <Route path="/signup" element={<Signup />} />

          <Route path="/new-blog" element={<Write />} />

          <Route path="/profile" element={<Profile />}></Route>

          <Route path="/forgot-password" element={<ForgotPassword/>}></Route>

          <Route path="/reset-password" element={<ResetPassword/>}></Route>

          <Route path="/verify-email" element={<EmailVerification/>}></Route>

          <Route path="/:title" element={<Blog />}></Route>
        </Routes>
        {/* <Footer /> */}
        <ToastContainer />
      </BrowserRouter>
    </>
  );
}

export default App;
