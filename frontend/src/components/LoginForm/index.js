import './LoginForm.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import { useSelector } from 'react-redux';

const LoginForm = (props) => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const { setLoginModal } = props;
    const sessionUser = useSelector(state => state.session.user);

    
    const loginUser = (e) => {
        e.preventDefault();
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

    if(sessionUser) {
        setLoginModal(false);
    }
    
    return (
        <>
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
            <ul>
            {errors.map(error => <li key={error}>{error}</li>)}
            </ul>
        </>
    );
}

 
export default LoginForm;