import { Modal } from '../../context/Modal';
import './ShopModal.css'
import ShopItem from './ShopItem'
import itemList from '../Util/item_data';
import gachapon from '../../assets/images/gachapon.gif'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../../store/user';
import { getQuests } from '../../store/quest';

const ShopModal = () => {

    const dispatch = useDispatch();
    // const allItemsMapped = itemData.map(item => <ShopItem item={item} key={item.id}/> )
    let i = 0;
    // const itemData = itemList[setInterval((i) => {
    //     if (i > itemList.length - 2) {
    //         return 0;
    //     } else {
    //         return i + 1;
    //     }
    // },1)];


    const [itemData, setItemData] = useState(null);
    const user = useSelector(state => state.session.user);

    const handleClick = (e) => {
        e.preventDefault();
        let randomNumber = Math.floor(Math.random() * itemList.length);
        setItemData(itemList[randomNumber]);
    };

    return ( 
        <div className="ShopModal">
            <h1>Claim your reward!</h1>
            <div className='gacha-cost'>
                50 coins / crank
            </div>
            <div className='gacha-item-box'>
                {itemData && (
                    <img className='gacha-item-image' src={itemData.imageUrl} alt="" />
                )}
                
            </div>
            <div className='gacha-item-name'>
                Item Name
            </div>

            <div className="gacha-button-div">
                <img className='big-gacha-button'
                onClick={handleClick} src={gachapon} alt="" />
            </div>

            {/* <div className="ShowModal-ShopItems">
                {allItemsMapped}
            </div> */}

            
        </div>
     );
}
 

export default ShopModal;