import './ShopModal.css'
import itemList from '../Util/item_data';
import gachapon from '../../assets/images/gachapon.gif';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { updateUser } from '../../store/user';


const ShopModal = ({reward, setReward}) => {
    
    const user = useSelector(state => state.session.user);
    const {_id, coins, equipment, items} = user;
    const [itemData, setItemData] = useState(null);
    const [index, setIndex] = useState(0);
    const [moving, setMoving] = useState(false);
    const dispatch = useDispatch();
    
    let timeout;    
    let newItems = [...items];
    const userOwnedEquipment = [...equipment, ...items];
    

    userOwnedEquipment.forEach((item) => {
        itemList.forEach((itm, idx) => {
            if (item && itm.name === item.name) itemList.splice(idx, 1);
        });
    });

    // console.log(itemList);

    useEffect(() => {
        if (moving) {
            setItemData(itemList[index]);
            const count = setInterval(() => {
                setIndex(Math.floor(Math.random() * itemList.length))
            },60);
            return () => {
                clearInterval(count);
            };
        } else if (!moving && reward && itemList[index] && items.length < 24){
            newItems.push(itemList[index])
            dispatch(updateUser({
                _id,
                coins: coins -50,
                items:newItems,
            }))
        } else {
            return;
        }
    },[index,moving]);
    
    
    const handleClick = (e) => {
        e.preventDefault();
        setMoving(true);
        timeout = setTimeout(() => {
            setMoving(false);
        },2000);
        setReward(true);
    };
    clearTimeout(timeout);
    

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