import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import ProfileDropDown from '../ProfileDropDown';
import coin from '../../assets/images/coin.png';
import TeamDropdown from '../TeamDropdown';
import { Modal } from '../../context/Modal';
import './Navigation.css';
import logoImg from '../../assets/images/blue_inversed_logo.png';
import { useSelector } from 'react-redux';
import LoginButton from '../LoginButton';
import LoginForm from '../../components/LoginForm'
import TaskForm from '../TaskForm';
import Inventory from '../Inventory';
import { Link } from 'react-router-dom';

function Navigation() {
    const [memberDropdown, setMemberDropdown] = useState(false);
    const [loginModal, setLoginModal] = useState(false);
    const [inventoryModal, setInventoryModal] = useState(false);
    const sessionUser = useSelector(state => state.session.user);

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <div className='navbar-right'>
                <div className='navbar-coinbox'>
                    <img src={coin} alt="" className='navbar-coins'/>
                    <span className='navbar-coin-amount'>{sessionUser.email}</span>
                </div>
                <ProfileDropDown />
            </div>
        );
    } else {
        sessionLinks = (
            <LoginButton setLoginModal={setLoginModal}/>
        );
    }
    
    const toggleMemberDropdown = (e) => {
        e.preventDefault();
        setMemberDropdown(open => !open);
    }

    return (
        <div className='navbar'>
        {/* <NavLink exact to="/"> */}
            <div className='navbar-left'>
                <Link style={{textDecoration: 'none'}} to='/'>
                    <div className='navbar-homebox'>
                        <img className='navbar-logo' src={logoImg} alt="logo" />
                        <div className='navbar-logotext'>Aviquest</div> 
                    </div>
                </Link>
                <div className='navbar-links'>
                    <div onClick={()=>setInventoryModal(open => !open)} className='navbar-inventory'>
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
            {sessionLinks}      
            {loginModal && (
                <Modal onClose={() => setLoginModal(false)}>
                    <LoginForm setLoginModal={setLoginModal}/>
                    {/* <TaskForm /> */}
                    {/* <Inventory /> */}
                </Modal>
            )}
            {inventoryModal && (
                <Modal onClose={() => setInventoryModal(false)}>
                    <Inventory />
                </Modal>
            )}
     
        </div>
    );
}

export default Navigation;