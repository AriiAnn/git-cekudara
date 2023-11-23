import { Navbar, Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { navLinks } from '../data/index';

const NavbarComponent = () => {
  return (
    <div>
      <Navbar expand="lg" style={{ backgroundColor: 'white', borderBottom: '2px solid #e0e0e0' }}>
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
            <Nav className="mx-auto">
              {navLinks.map((link) => (
                <div className='nav-link' key={link.id}>
                  <NavLink
                    to={link.path}
                    className="nav-link"
                    activeClassName="active-link"
                  >
                    {link.text}
                  </NavLink>
                </div>
              ))}
            </Nav>
            <div className="d-flex gap-2">
              <button className="btn btn-success">Masuk</button>
              <button className="btn btn-outline-success" style={{ transition: 'background-color 0.3s' }}>
                Daftar
              </button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
