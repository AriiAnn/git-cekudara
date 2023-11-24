import { Routes, Route } from 'react-router-dom';
import NavbarComponent from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import Layanan from './pages/Layanan';
import Diskusi from './pages/Diskusi';
import TentangKami from './pages/TentangKami';
import Login from './components/Login And Register/Login';
import Register from './components/Login And Register/Register';

function App() {
  return (
    <>
      <NavbarComponent />
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="/" element={<HomePage />} />
        <Route path="layananKesehatan" element={<Layanan />} />
        <Route path="diskusi" element={<Diskusi />} />
        <Route path="tentangKami" element={<TentangKami />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
