import './InventoryItem.css'

const InventoryItem = (props) => {

    const {item} = props;

    return (
        <div className='inventory-item-div'>
            <img className='inventory-item' src={item.imageUrl} alt="" /> 
            <p className='inventory-popup'>
            {item.name} <br />
            {`HP: ${item.health} ATK: ${item.attack}` }
            </p>
        </div>
    );
}
 
export default InventoryItem;