import './EquipmentItem.css'



const EquipmentItem = (props) => {

    const {item} = props;
    console.log(item);
    return (
        <div className='equipment-item-div'>
            <img className='equipment-item' src={item.imageUrl} alt="" />
            <p className='equipment-popup'>
            {item.name} <br />
            {`HP: ${item.health} ATK: ${item.attack}` }
            </p>
        </div>
    );
}
 
export default EquipmentItem;