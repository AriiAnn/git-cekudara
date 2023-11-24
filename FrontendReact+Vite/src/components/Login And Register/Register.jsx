/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Modal } from 'react-bootstrap';

const Register = ({ onRegister /* atau tambahkan props sesuai kebutuhan lainnya */ }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [nameFocus, setNameFocus] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [confirmPasswordFocus, setConfirmPasswordFocus] = useState(false);

  const handleRegister = () => {
    // Implementasikan logika registrasi di sini
    // Contoh: Validasi input dan panggil fungsi onRegister
    if (password === confirmPassword) {
      const userData = {
        name,
        email,
        password,
      };
      onRegister(userData);
    } else {
      console.log('Kata sandi tidak sesuai');
    }
  };

  return (
    <Modal show={true} onHide={() => {}} dialogClassName="modal-fullscreen" style={{ zIndex: '1050' }}>
      <div className="login-container" style={{ padding: '40px', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
        <div className="text-center">
          <img src="./src/assets/img/Logo/logo-text-green.png" alt="Logo" height="80" />
          <h2 className="mt-2">Daftar Akun</h2>
        </div>

        <form style={{ width: '70%' }}>
          <div className="mb-3">
            <label htmlFor="inputName" className={`form-label ${nameFocus ? 'active' : ''}`}>
              Nama
            </label>
            <div className="input-group">
              <span className="input-group-text"><i className="fas fa-user"></i></span>
              <input
                type="text"
                className="form-control"
                id="inputName"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onFocus={() => setNameFocus(true)}
                onBlur={() => setNameFocus(false)}
                required
              />
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="inputEmail" className={`form-label ${emailFocus ? 'active' : ''}`}>
              Alamat Email
            </label>
            <div className="input-group">
              <span className="input-group-text"><i className="fas fa-envelope"></i></span>
              <input
                type="email"
                className="form-control"
                id="inputEmail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => setEmailFocus(true)}
                onBlur={() => setEmailFocus(false)}
                required
              />
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="inputPassword" className={`form-label ${passwordFocus ? 'active' : ''}`}>
              Kata Sandi
            </label>
            <div className="input-group">
              <span className="input-group-text"><i className="fas fa-lock"></i></span>
              <input
                type="password"
                className="form-control"
                id="inputPassword"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onFocus={() => setPasswordFocus(true)}
                onBlur={() => setPasswordFocus(false)}
                required
              />
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="confirmPassword" className={`form-label ${confirmPasswordFocus ? 'active' : ''}`}>
              Ketik Ulang Sandi
            </label>
            <div className="input-group">
              <span className="input-group-text"><i className="fas fa-lock"></i></span>
              <input
                type="password"
                className="form-control"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                onFocus={() => setConfirmPasswordFocus(true)}
                onBlur={() => setConfirmPasswordFocus(false)}
                required
              />
            </div>
          </div>
        </form>

        <div style={{ width: '70%', display: 'flex', justifyContent: 'flex-end' }}>
          <button
            type="button"
            style={{ width: '20%' }}
            className="btn btn-success"
            onClick={handleRegister}
          >
            Daftar
          </button>
        </div>

        <p className="mt-3">
          Punya akun? <a href="#">Masuk</a>
        </p>
      </div>
    </Modal>
  );
};

export default Register;
