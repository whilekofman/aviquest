import './InventoryItem.css'

const InventoryItem = (props) => {

    const {item} = props;

    return (
        <div className='inventory-item-div'>
            <img className='inventory-item' src={item.imageUrl} alt="" /> 
        </div>
    );
}
 
export default InventoryItem;