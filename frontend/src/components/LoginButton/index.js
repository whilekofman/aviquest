import './LoginButton.css'

const LoginButton = ({setLoginModal}) => {
    return (
        <div className='navbar-login-div'>
            <button 
            onClick={() => setLoginModal(true)}
            className='navbar-login-button'>Login</button>
        </div>
    );
}
 
export default LoginButton;