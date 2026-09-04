import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/style/register.css';

function Register() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    // Kiểm tra xem mật khẩu và xác nhận mật khẩu có trùng khớp không
    if (password !== confirmPassword) {
      alert('Mật khẩu và xác nhận mật khẩu không trùng khớp.');
      return;
    }

    // Lưu thông tin người dùng vào localStorage (hoặc vào cơ sở dữ liệu)
    const newUser = { email, username, password };
    localStorage.setItem('user', JSON.stringify(newUser));

    alert('Đăng ký thành công!');
    navigate('/login'); // Điều hướng đến trang đăng nhập
  };

  return (
    <div>
      <div className="register-container">
        <div className="register-box">
          <h2>Đăng ký</h2>
          <form onSubmit={handleRegister}>
            <div className="input-group">
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
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
            <div className="input-group">
              <label>Xác nhận mật khẩu:</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="register-button">
              Đăng ký
            </button>
          </form>
          <div className="login-link">
            <p>
              Đã có tài khoản? <a href="/Login">Đăng nhập</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
