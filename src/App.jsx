import "./App.css";
import MainComponent from "./components/MainComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EmployeeComponent from "./components/EmployeeComponent";
import Login from "./components/Login";
import Signup from "./components/Signup";
import NewBlogComponent from "./components/NewBlogComponent";

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          {/* //http://localhost:3000 */}
          <Route path="/" element={<MainComponent />} />

          {/* //http://localhost:3000/employees */}
          {/*<Route path="/employees" element={<ListEmployeeComponent />} />*/}

          <Route path="/login" element={<Login />} />

          <Route path="/signup" element={<Signup />} />

          <Route path="/new-blog" element={<NewBlogComponent />} />

          {/* //http://localhost:3000/add-employee */}
          <Route path="/add-employee" element={<EmployeeComponent />} />

          {/* //http://localhost:3000/edit-employee */}
          <Route path="/update-employee/:id" element={<EmployeeComponent />} />
        </Routes>
        {/* <FooterComponent /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
