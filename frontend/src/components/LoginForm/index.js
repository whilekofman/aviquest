import './LoginForm.css';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import { useSelector } from 'react-redux';


const LoginForm = (props) => {
    const dispatch = useDispatch();
    useEffect(() => {
        return () => {
          dispatch(sessionActions.clearSessionErrors());
        };
    }, [dispatch]);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [errors, setErrors] = useState([]);
    const { setLoginModal } = props;
    const sessionUser = useSelector(state => state.session.user);
    const errors = useSelector(state => state.errors.session);
    

    const loginUser = (e) => {
        e.preventDefault();
        dispatch(sessionActions.login({ email, password }))
    }

    if(sessionUser) {
        setLoginModal(false);
    }
    
    console.log(errors)
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
                <div className="errors">{errors?.email}</div>
                <div className="errors">{errors?.password}</div>
            </div>
        </div>
    );
}

 
export default LoginForm;