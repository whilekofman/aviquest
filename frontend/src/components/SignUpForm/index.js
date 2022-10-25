import './SignUpForm.css'
import React, { useState } from "react";
import { useDispatch} from "react-redux";
import * as sessionActions from "../../store/session";



function SignUpForm() {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState([]);

  // const sessionUser = useSelector(state => state.session.user);

    // const [firstName, setFirstName] = useState("");
    // const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [username, setUsername] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === confirmPassword) {
        setErrors([]);
        return dispatch(sessionActions.signup({ email, password, username }))
            .catch(async (res) => {
            let data;
            try {
            data = await res.clone().json();
            } catch {
            data = await res.clone().text(); 
            }
            if (data?.errors) setErrors(data.errors);
            else if (data) setErrors([data]);
            else setErrors([res.statusText]);
        });
        }
        return setErrors(['Confirm Password field must be the same as the Password field']);
    };

    // if (sessionUser) return <Redirect to="/" />;

  return (

    <div className="splash-signup">
      <header className="signup-header">
        <br />
        <br />

        <div className="signup-header-text">SIGN UP HERE</div>
        <br />
      </header>
      
      <div className="signup-body">
        <form className='splash-signup-form' onSubmit={handleSubmit}>
          
          Username:
          <input
            className="signup-username-input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            placeholder="Username"
          />

          <br />
          
          Email:
          <input
            className="signup-email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Email"
          />

          <br />
          
          Password:
          <input
            className="signup-password-input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Password"
          />
          
          <br />
          
          Confirm Password:
          <input
            className="signup-confirm-password-input"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            placeholder="Confirm Password"
          />
          

          <ul className="signup-error-message">
            {errors.map(error => {
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