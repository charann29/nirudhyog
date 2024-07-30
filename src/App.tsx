import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/Header";
import Footer from "./components/Footer";
import Aboutus from "./pages/AboutUs";
import CoursePage from "./pages/CoursePage";
import ContcatUsPage from "./pages/ContcatUsPage";
import Register from "./pages/FormPage";
import FindWorkPage from "./pages/FindWorkPage";
import AdminDashboard from "./pages/DashBoard";
import ServicePage from "./pages/ServicePage";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/aboutus" element={<Aboutus></Aboutus>}></Route>
        <Route path="/courses" element={<CoursePage></CoursePage>}></Route>
        <Route path="/services" element={<ServicePage></ServicePage>}></Route>
        <Route
          path="/contactus"
          element={<ContcatUsPage></ContcatUsPage>}
        ></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/findwork" element={<FindWorkPage></FindWorkPage>}></Route>
        <Route
          path="/dashboard"
          element={<AdminDashboard></AdminDashboard>}
        ></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
};

export default App;
