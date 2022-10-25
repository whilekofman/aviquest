import './LoginForm.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, clearSessionErrors } from '../../store/session'

const LoginForm = () => {
    const [email, setCredential] = useState("");
    const [password, setPassword] = useState("");

    const errors = useSelector(state => state.errors.session)
    const dispatch = useDispatch();

    useEffect(() =>{
        return () => {
            dispatch(clearSessionErrors());
        }
    }, [dispatch]);

    const handleSubmit = e => {
        e.preventDefault();

        dispatch(login({ email, password }));

    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <input 
                label="Email"
                value={email}
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