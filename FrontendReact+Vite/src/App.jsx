import {Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import Layanan from "./pages/Layanan";
import Diskusi from "./pages/Diskusi";
import TentangKami from "./pages/TentangKami";
import Login from "./components/Login And Register/Login";
import Register from "./components/Login And Register/Register";





function App() {

  return (
    <>
      <div>
        <Navbar/>
        
        <Routes>
          <Route path="login" element={<Login/>}/>
          <Route path="register" element={<Register/>}/>
          <Route path="homepage" Component={HomePage}/>
          <Route path="layananKesehatan" Component={Layanan}/>
          <Route path="diskusi" Component={Diskusi}/>
          <Route path="tentangKami" Component={TentangKami}/>
        </Routes>

        <Footer/>
      </div>
    </>
  )
}

export default App
