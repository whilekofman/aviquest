const EquipmentItem = ({equipt}) => {
    return ( 
        <div className='equipmentItem'>
            <img src={equipt.imageURL} className="equipItemPic" />
            <div className="equiptname">{equipt.name}</div>
        </div>
     );
}
 
export default EquipmentItem;