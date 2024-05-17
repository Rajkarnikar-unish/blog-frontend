import "./App.css";
import HomePage from "./pages/HomePage";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EmployeeComponent from "./components/EmployeeComponent";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import WritePage from "./pages/WritePage";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          {/* //http://localhost:3000 */}
          <Route path="/" element={<HomePage />} />

          {/* //http://localhost:3000/employees */}
          {/*<Route path="/employees" element={<ListEmployeeComponent />} />*/}

          <Route path="/login" element={<Login />} />

          <Route path="/signup" element={<Signup />} />

          <Route path="/new-blog" element={<WritePage />} />

          {/* //http://localhost:3000/add-employee */}
          <Route path="/add-employee" element={<EmployeeComponent />} />

          {/* //http://localhost:3000/edit-employee */}
          <Route path="/update-employee/:id" element={<EmployeeComponent />} />
        </Routes>
        {/* <FooterComponent /> */}
        <ToastContainer />
      </BrowserRouter>
    </>
  );
}

export default App;
