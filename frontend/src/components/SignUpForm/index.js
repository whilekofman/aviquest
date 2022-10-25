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
    <>
      <div className="splash-signup">
      <header className="signup-header">
        <div></div>
        <div className="signup-header-text">Sign Up</div>
        <div></div>
      </header>
      <div className="signup-body">
        <form onSubmit={handleSubmit}>
          {/* <div className="input-div">
            <input
              className="signup-firstname-input"
              placeholder="First name"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="input-div">
            <input
            className="signup-lastname-input"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
              placeholder="Last name"
            />
          </div> */}
          <div className="input-div">
            <input
            className="signup-username-input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              placeholder="Username"
            />
          </div>
          <div className="input-div">
            <input
            className="signup-email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Email"
            />
          </div>
          <div className="input-div">
            <input
            className="signup-password-input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Password"
            />
          </div>
          <div className="input-div">
            <input
            className="signup-confirm-password-input"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              placeholder="Confirm Password"
            />
          </div>
          <ul className="signup-error-message">
            {errors.map(error => {
                return <li key={error}>{error}</li> 
              })
            }
          </ul>
          <button type="submit">Sign up</button>
        </form>
      </div>
      </div>
      
    </>
  );
}

export default SignUpForm;