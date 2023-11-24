/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from 'react';

const Login = ({ setLoginData, handleLogin }) => {
  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  return (
    <div>
      <div className="login-container" style={{ padding: '40px', display: 'flex', alignItems: 'center', flexDirection: 'column' }}> {/* Tambahkan padding ke login-container */}
        <div className="text-center">
          <img src="./src/assets/img/Logo/logo-text-green.png" alt="Logo" height="80" />
          <h2 className="mt-2">Selamat Datang</h2>
        </div>

        <form style={{ width: '70%' }}>
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
                required
                onFocus={() => setEmailFocus(true)}
                onBlur={() => setEmailFocus(false)}
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
                required
                onFocus={() => setPasswordFocus(true)}
                onBlur={() => setPasswordFocus(false)}
              />
            </div>
          </div>

          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="rememberMe"
            />
            <label className="form-check-label" htmlFor="rememberMe">
              Remember me
            </label>
          </div>
        </form>
        <div style={{ width: '70%', display: 'flex', justifyContent: 'flex-end' }}>
          <button
            type="button"
            style={{ width: '20%' }}
            className="btn btn-success"
            onClick={handleLogin}
          >
            Login
          </button>
        </div>

        <p className="mt-3">
          Tidak punya akun? <a href="#">Daftar</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
