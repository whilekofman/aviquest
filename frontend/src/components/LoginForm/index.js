import './LoginForm.css';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';


const LoginForm = (props) => {
    // const history = useHistory();
    const dispatch = useDispatch();
    useEffect(() => {
        return () => {
          dispatch(sessionActions.clearSessionErrors());
        };
    }, [dispatch]);

    let [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { setLoginModal } = props;
    const sessionUser = useSelector(state => state.session.user);
    const errors = useSelector(state => state.errors.session);
    
    // const [invalidEmail, setInvalidEmail] = useState('')

    // function isValidEmail(email) {
    //     return /\S+@\S+\.\S+/.test(email);
    // }

    const loginUser = (e) => {
        e.preventDefault();
        email = email.toLowerCase();

        dispatch(sessionActions.login({ email, password }))
    }

    const loginDemo = () => {
        dispatch(sessionActions.login({
            email:'demo@user.io',
            password: 'password'
        }));
    }

    const hideSignUpError = (e) => {
        // e.preventDefault()
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
                    type ='email'
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
                <button onClick={loginDemo} className='login-demo'>Login as Demo User</button>
                <button className='login-submit-button' type="submit" >Login</button>
                </form>
                {/* {invalidEmail} */}
                <div className="errors">{errors?.email}</div>
                <div className="errors">{errors?.password}</div>
            </div>
        </div>
    );
}

 
export default LoginForm;