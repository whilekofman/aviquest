import './LoginForm.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session'

const LoginForm = (props) => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const { setLoginModal } = props;

    const loginUser = (e) => {
        e.preventDefault();
        setLoginModal(false);
        setErrors([]);
        return dispatch(sessionActions.login({ email, password }))
          .catch(async (res) => {
            let data;
            try {
              data = await res.clone().json();
            } catch {
              data = await res.text(); 
            }
            if (data?.errors) setErrors(data.errors);
            else if (data) setErrors([data]);
            else setErrors([res.statusText]);
        });
    }
    
    return (
        <form onSubmit={loginUser} className="login-form">
        <input 
            value={email}
            onChange={e => setEmail(e.target.value)}
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