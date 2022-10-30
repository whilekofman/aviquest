import React, { useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './ProfileDropDown.css';
import * as sessionActions from '../../store/session' 
import { useHistory } from 'react-router-dom';

function ProfileDropDown({setInventoryModal, setStatsModal}) {

    const dispatch = useDispatch();
    const [menu, setMenu] = useState(false);
    const history = useHistory();

    const toggleMenu = () => {
        setMenu(open => !open);
    };

    const logoutUser = (e) => {
      e.preventDefault();
      
      dispatch(sessionActions.logout())
        // .then(() => {
        //     history.push('/');
        // });
    }

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
              {/* <li>Profile</li> */}
              <li onClick={() => setStatsModal(true)}>Stats</li>
              <li onClick={() => setInventoryModal(true)}>Inventory</li>
              <li id='profiledropdown-divider'></li>
              
              <a  href="https://github.com/whilekofman/aviquest" target="_blank" rel="noopener noreferrer"><li id='github-help'>Help</li></a> 
              <li onClick={logoutUser}>Logout</li>
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