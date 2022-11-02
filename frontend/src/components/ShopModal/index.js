import { Modal } from '../../context/Modal';
import './ShopModal.css'
import InventoryItem from './ShopItemEach2';
import ShopItemEach from './ShopItemEach'
import itemData from '../Util/item_data';

const ShopModal = () => {

    const allItemsMapped = itemData.map(item => <ShopItemEach item={item} key={item.id}/> )

    return ( 
        <div className="ShopModal">
            <br />
            <div className="ShowModal-ShopOwner">
                <img src="https://s2.coinmarketcap.com/static/img/coins/200x200/12947.png" alt="" />
            </div>
            <br />
            <h1>WELCOME TO MY SHOPPE</h1>
            <br />
            <h3>Feel free to look around, arf!</h3>
            <br />
            <div className="ShowModal-ShopItems">
                {allItemsMapped}
            </div>

            
        </div>
     );
}
 

export default ShopModal;