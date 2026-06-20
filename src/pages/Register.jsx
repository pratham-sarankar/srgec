import { useState } from 'react'
import './Register.css'
import { Link, useNavigate } from 'react-router-dom';

export default function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [error, setError] = useState('');

    const handleRegister = async () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "name": username,
            "email": email,
            "password": password
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
        };

        const response = await fetch("https://srgec.onrender.com/register", requestOptions)
        const body = await response.json()

        if (!response.ok) {
            console.log(body)
            setError(body.message)
            throw new Error("Request failed with status", response.status)
        }
        navigate("/login")
    }
    return <>
        <div className="box">
            <h1>Registration Page</h1><br></br>
            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} /><br></br>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} /><br></br>
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} /><br></br>
            <button type="submit" onClick={handleRegister}>Register</button><br></br>
            <p><b>Already have an account?</b> <Link to="/login">Login</Link></p>
            <p className='error'>{error}</p>
        </div>
    </>
}