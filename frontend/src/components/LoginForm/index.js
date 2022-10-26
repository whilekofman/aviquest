import './LoginForm.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import { useSelector } from 'react-redux';
// import * as errors from '../../store/errors'

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
        <div className='login-modal'>
            <div className='login-modal-border'>
                <div className='login-header'>Welcome back</div>
                <form onSubmit={loginUser} className="login-form">
                <input 
                    className='login-email'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder='Email'
                    required
                />
                <input
                    className='login-password'
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder='Password'
                    required
                />
                <button className='login-submit-button' type="submit">Login</button>
                </form>
            </div>
        </div>
    );
}

 
export default LoginForm;