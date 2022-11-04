import './ShopModal.css'
import itemList from '../Util/item_data';
import gachapon from '../../assets/images/gachapon.gif';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { updateUser } from '../../store/user';


const ShopModal = () => {
    
    const [itemData, setItemData] = useState(null);
    let [index, setIndex] = useState(0);
    let [moving, setMoving] = useState(false);
    const user = useSelector(state => state.session.user);
    const {_id, coins} = user;
    const dispatch = useDispatch();
    
    let timeout;    

    useEffect(() => {
        if (moving) {
            setItemData(itemList[index]);
            const count = setInterval(() => {
                if (index > itemList.length - 2) {
                    setIndex(0);
                } else {
                    setIndex(index + 1)
                }
            },70);
            return () => {
                clearInterval(count);
            };
        }
    },[index,moving]);
    clearTimeout(timeout);
    const handleClick = (e) => {
        e.preventDefault();
        setMoving(true);
        timeout = setTimeout(() => {
            setMoving(false);
        },Math.random() * (300) + 1700);
        dispatch(updateUser({coins: coins -50, _id}));
    };

    return ( 
        <div className="ShopModal">
            <h1>Claim your reward!</h1>
            <div className='gacha-cost'>
                50 coins / crank
            </div>

            <div id='gacha-item-box' className='gacha-item-box'>

                {itemData && (
                    <img className='gacha-item-image' src={itemData.imageUrl} alt="" />
                )}
            </div>

            <div className='gacha-item-name'>
                {itemData && (
                    itemData.name
                )}
            </div>

            <div className="gacha-button-div">
                <img className='big-gacha-button'
                onClick={handleClick} src={gachapon} alt="" />
            </div>

            
        </div>
     );
}
 

export default ShopModal;