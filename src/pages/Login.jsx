import { useState } from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const handleLogin = async () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "email": email,
            "password": password
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
        };

        const response = await fetch("https://srgec.onrender.com/login", requestOptions)
        const body = await response.text()
        if (!response.ok) {
            console.log(body)
            setError(body.message)
            throw new Error("Request failed with status", response.status)
        }
        navigate("/")
        console.log(body)
        localStorage.setItem("token", body)
    }
    return <>
        <div className="box">
            <h1>Login Page</h1><br></br>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} /><br></br>
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} /><br></br>
            <button type="submit" onClick={handleLogin}>Login</button><br></br>
            <p><b>Don't have an account? </b><Link to='/register'>Register</Link></p>
        </div>
    </>
}