import { useState, useEffect } from 'react';
import { Navbar, Container, Nav, Modal } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { navLinks } from '../data/index';
import Login from './Login And Register/Login';
import Register from './Login And Register/Register';

const NavbarComponent = () => {
  const [changeColor, setChangeColor] = useState(false);
  const changeBackgroundColor = () => {
    if (window.scrollY > 10) {
      setChangeColor(true);
    } else {
      setChangeColor(false);
    }
  };

  useEffect(() => {
    changeBackgroundColor();

    window.addEventListener('scroll', changeBackgroundColor);

    return () => {
      window.removeEventListener('scroll', changeBackgroundColor);
    };
  }, []);

  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  });
  const [setIsLoggedIn] = useState(false);

  const handleLoginClick = () => {
    setShowLoginModal(true);
    setShowRegisterModal(false); // Pastikan form register ditutup ketika membuka form login
  };

  const handleRegisterClick = () => {
    setShowLoginModal(false); // Pastikan form login ditutup ketika membuka form register
    setShowRegisterModal(true);
  };

  const handleLogin = () => {
    // Contoh logika penanganan login
    if (loginData.username === 'user' && loginData.password === 'password') {
      setIsLoggedIn(true);
      setShowLoginModal(false);
      console.log('Login berhasil');
    } else {
      console.log('Login gagal');
      // Tambahkan logika penanganan kasus login gagal di sini
    }
  };

  return (
    <div>
      <Navbar
        expand="lg"
        className={changeColor ? 'color-active' : ''}
        style={{ backgroundColor: 'white', borderBottom: '2px solid #e0e0e0' }}
      >
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="./src/assets/img/Logo/logo-text-green.png"
              width="100%"
              height="50px"
              className="d-inline-block align-top"
              alt="Cek Udara"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto text-center">
              {navLinks.map((link) => (
                <div className="nav-link" key={link.id}>
                  <NavLink to={link.path} className="nav-link" activeClassName="active-link">
                    {link.text}
                  </NavLink>
                </div>
              ))}
            </Nav>
            <div className="d-flex gap-2 text-center">
              <button className="btn btn-success" onClick={handleLoginClick}>
                Masuk
              </button>
              <button className="btn btn-outline-success" onClick={handleRegisterClick}>
                Daftar
              </button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Modal show={showLoginModal} onHide={() => setShowLoginModal(false)} centered size="lg">
        <Modal.Body>
          <Login setLoginData={setLoginData} handleLogin={handleLogin} />
        </Modal.Body>
      </Modal>

      <Modal show={showRegisterModal} onHide={() => setShowRegisterModal(false)} centered size="lg">
        <Modal.Body>
          <Register /* tambahkan props jika diperlukan */ />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default NavbarComponent;
