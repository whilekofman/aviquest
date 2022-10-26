import './EquipmentItem.css'



const EquipmentItem = (props) => {

    const {item} = props;

    return (
        <div className='equipment-item-div'>
            <img className='equipment-item' src={item.imageUrl} alt="" />
        </div>
    );
}
 
export default EquipmentItem;