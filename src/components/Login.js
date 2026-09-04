import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/style/login.css';
import { AuthContext } from '../contexts/AuthContext';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useContext(AuthContext); // Get login function from context

  const handleLogin = (e) => {
    e.preventDefault();

    // Get the registered user information from localStorage
    const user = JSON.parse(localStorage.getItem('user'));

    // Check username and password
    if (user && user.username === username && user.password === password) {
      alert('Đăng nhập thành công!');
      login(user); // Update the context and login state
      navigate('/'); // Redirect to home
    } else {
      alert('Tên đăng nhập hoặc mật khẩu không chính xác.');
    }
  };

  return (
    <div>
      <div className="login-container">
        <div className="login-box">
          <h2>Đăng nhập</h2>
          <form onSubmit={handleLogin}>
            <div className="input-group">
              <label>Tên đăng nhập:</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label>Mật khẩu:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="login-button">
              Đăng nhập
            </button>
            <div className="register-link">
              <p>Bạn chưa có tài khoản? <a href="/register">Đăng ký ngay</a></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
