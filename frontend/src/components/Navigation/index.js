import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import ProfileDropDown from '../ProfileDropDown';
import coin from '../../assets/images/coin.png';
import TeamDropdown from '../TeamDropdown';


// import LoginDropDown from '../LoginDropdown';
import './Navigation.css';
import logoImg from '../../assets/images/blue_inversed_logo.png';

function Navigation() {
//   const sessionUser = useSelector(state => state.session.user);

//   let sessionLinks;
//   if (sessionUser) {
//     sessionLinks = (
//       <ProfileButton user={sessionUser}/>
//     );
//   } else {
//     sessionLinks = (
//         <LoginDropDown/>
//     );
//   }
    const [memberDropdown, setMemberDropdown] = useState(false);
    
    const toggleMemberDropdown = (e) => {
        e.preventDefault();
        setMemberDropdown(open => !open);
    }

    return (
        <div className='navbar'>
        {/* <NavLink exact to="/"> */}
            <div className='navbar-left'>
                <div className='navbar-homebox'>
                    <img className='navbar-logo' src={logoImg} alt="logo" />
                    <div className='navbar-logotext'>Aviquest</div> 
                </div>
                <div className='navbar-links'>
                    <div className='navbar-inventory'>
                        Inventory
                    </div>
                    <div className='navbar-shop'>
                        Shop
                    </div>
                    <div className='navbar-teams'
                    onClick={toggleMemberDropdown}>
                        DevTeam
                    </div>
                </div>
                {memberDropdown && (
                <TeamDropdown />
            )}
            </div>
            
            <div className='navbar-right'>
                <div className='navbar-coinbox'>
                    <img src={coin} alt="" className='navbar-coins'/>
                    <span className='navbar-coin-amount'>85,000</span>
                </div>
                <ProfileDropDown />
            </div>
        {/* </NavLink> */}
        {/* {sessionLinks} */}
            
        </div>
    );
}

export default Navigation;