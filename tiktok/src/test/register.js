import React, { useState } from 'react';

function Register({ onChangePage }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Xử lý logic đăng ký tại đây
        if (password !== confirmPassword) {
            alert('Mật khẩu không khớp');
            return;
        }
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <div>
            <h2>Register Page</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Confirm Password:</label>
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Register</button>
            </form>
            <p>Đã có tài khoản? <button onClick={onChangePage}>Đăng nhập</button></p>
        </div>
    );
}

export default Register;
