import './SignUpForm.css'
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector} from "react-redux";
import * as sessionActions from "../../store/session";
import { Redirect, useHistory } from 'react-router-dom';



function SignUpForm() {
    const dispatch = useDispatch();
    const errmessages = []
    const [oldErrors, setOldErrors] = useState([]);

    const sessionUser = useSelector(state => state.session.user);
    const errors = useSelector(state => state.errors.session);
    // const [firstName, setFirstName] = useState("");
    // const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [validEmail, setValidEmail] = useState(false);
    const [password, setPassword] = useState("");
    const [redirect, setRedirect] = useState(false)
    const [confirmPassword, setConfirmPassword] = useState("");
    const [username, setUsername] = useState("");
    const history = useHistory();



   

    useEffect(() => {
      return () => {
        dispatch(sessionActions.clearSessionErrors());
      };
    }, [dispatch]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === confirmPassword) {
          setOldErrors([]);

          const res =  dispatch(sessionActions.signup({ email,username, password }))
            // .then(() => {
            //   history.push('/home');
            // });


            //   .catch(async (res) => {
            //     let data;
            //     try {
            //     data = await res.clone().json();
            //     } catch {
            //     data = await res.clone().text(); 
            //     }
            //     if (data?.errors) setErrors(data.errors);
            //     else if (data) setErrors([data]);
            //     else setErrors([res.statusText]);
            // });
        } else {
        return setOldErrors(['Confirm Password field must be the same as the Password field']);
        }
    };



  return (

    <div className="splash-signup">
      <header className="signup-header">
        <br />
        <br />

        <div className="signup-header-text">Join us today !</div>
        <br />
      </header>
      
      <div className="signup-body">
        <form className='splash-signup-form' onSubmit={handleSubmit}>
          
          
          <label htmlFor="signup-username">Username:</label>
          <input
            className="signup-username-input"
            id='signup-username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            placeholder="Username"
          />

          <br />
          
          {/* <div className="errors">{errors ? errors.errors[0].msg : ""}</div> */}

          {/* {errors ? errors.errors.map(error => error.msg) : ""} */}

          <label htmlFor="signup-email">Email:</label>
          <input
            type='email'
            className="signup-email"
            id='signup-email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Email"
          />

          <br />
          
          <label htmlFor="signup-password-input">Password:</label>
          <input
            className="signup-password-input"
            id='signup-password'
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Password"
          />
          
          <br />
          
          <label htmlFor="signup-confirm-password">Confirm password:</label>
          <input
            className="signup-confirm-password-input"
            id='signup-confirm-password'
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            placeholder="Confirm Password"
          />
          
          {errors?.username}
          <br />
          {errors?.email}
          <ul className="signup-error-message">
            {oldErrors.map(error => {
                return <li key={error}>{error}</li> 
              })
            }
          </ul>

          <br />
          <br />


          <button className='splash-page-SignUp' type="submit">Sign up</button>
          
        </form>
      </div>
    </div>
      

  );
}

export default SignUpForm;