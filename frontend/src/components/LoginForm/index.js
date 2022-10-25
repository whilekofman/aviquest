import './LoginForm.css';
import { useState } from 'react';

const LoginForm = () => {
    const [credential, setCredential] = useState("");
    const [password, setPassword] = useState("");
    
    return (
        <form className="form">
        <input 
            label="Username or Email"
            value={credential}
            onChange={e => setCredential(e.target.value)}
            required
        />
        <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
        />
        <button type="submit" className="button">Log In</button>
        </form>
    );
}

 
export default LoginForm;