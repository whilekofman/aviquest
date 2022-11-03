import React, { useState } from 'react';
import ProfileDropDown from '../ProfileDropDown';
import coin from '../../assets/images/coin.png';
import TeamDropdown from '../TeamDropdown';
import { Modal } from '../../context/Modal';
import './Navigation.css';
import logoImg from '../../assets/images/blue_inversed_logo.png';
import { useSelector } from 'react-redux';
import LoginButton from '../LoginButton';
import LoginForm from '../../components/LoginForm'
import Inventory from '../Inventory';
import { Link } from 'react-router-dom';
import AvitarModalContent from '../AvitarModal/AvitarModalContent';
import ShopModal from '../ShopModal';

function Navigation() {
    const [memberDropdown, setMemberDropdown] = useState(false);
    const [loginModal, setLoginModal] = useState(false);
    const [inventoryModal, setInventoryModal] = useState(false);
    const [statsModal, setStatsModal] = useState(false);
    const [gachaModal, setGachaModal] = useState(false);
    const sessionUser = useSelector(state => state.session.user);

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <div className='navbar-right'>
                <div className='navbar-coinbox'>
                    <img src={coin} alt="" className='navbar-coins'/>
                    <span className='navbar-coin-amount'>{sessionUser.coins}</span>
                </div>
                <ProfileDropDown setInventoryModal={setInventoryModal} setStatsModal={setStatsModal} />
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
    const toggleGachaModal = (e) => {
        e.preventDefault();
        setGachaModal(open => !open);
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
                {sessionUser && (
                    <div className='navbar-links'>
                    <div className='navbar-inventory'
                     onClick={()=>setInventoryModal(open => !open)}>
                        Inventory
                    </div>
                    <div className='navbar-shop'
                    onClick={()=>setGachaModal(open => !open)}>
                        Gachapon
                    </div>
                </div>)}
                <div className='navbar-teams'
                    onClick={toggleMemberDropdown}>
                        DevTeam
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
            {statsModal && (
                <Modal onClose={() => setStatsModal(false)}>
                    <AvitarModalContent />
                </Modal>
            )}
            {gachaModal && (
                <Modal onClose={() => setGachaModal(false)}>
                    <ShopModal />
                </Modal>
            )}
     
        </div>
    );
}

export default Navigation;