import React, { useState, useEffect} from 'react';
// import { Modal } from '../../context/Modal';
// import LoginForm from './LoginForm';
// import SignUpForm from '../SignUpModal/SignupForm';
import './ProfileDropDown.css';

function ProfileDropDown() {
//   const [showLoginModal, setShowLoginModal] = useState(false);
//   const [showSignupModal, setShowSignupModal] = useState(false);

    const [menu, setMenu] = useState(false);

    const toggleMenu = () => {
        setMenu(open => !open);
    };

    useEffect(() => {
        if (!menu) return;

        const closeMenu = () => {
        setMenu(false);
        };

        document.addEventListener('click', closeMenu);
        return () => document.removeEventListener("click", closeMenu);
    }, [menu]);

    return (
    <>
      <button className='navbar-profile-button' onClick={toggleMenu}>
        <svg className='navbar-profile-burger' width={28} height={16} viewBox="0 0 32 32" fill={'#06283D'} stroke={'#06283D'} strokeWidth={3}>
          <g fill="none" fillRule="nonzero"><path d="m2 16h28"></path><path d="m2 24h28"></path><path d="m2 8h28"></path></g>
        </svg>
      </button>
      {menu && (
          <ul className="navbar-profile-dropdown" onClick={() => setMenu(false)}>
              <li>Profile</li>
              <li>Stats</li>
              <li>Inventory</li>
              <li id='profiledropdown-divider'></li>
              <li>Share</li>
              <a  href="https://github.com/whilekofman/aviquest" target="_blank" rel="noopener noreferrer"><li id='github-help'>Help</li></a> 
          </ul>
      )}

      {/* {showLoginModal && (
        <Modal onClose={() => setShowLoginModal(false)}>
          <LoginForm setShowLoginModal={setShowLoginModal}/>
        </Modal>
      )}
      {showSignupModal && (
        <Modal onClose={() => setShowSignupModal(false)}>
          <SignUpForm setShowSignupModal={setShowSignupModal}/>
        </Modal>
      )} */}
    </>
  );
}

export default ProfileDropDown;