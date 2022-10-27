const EquipmentItem = ({equipt}) => {
    return ( 
        <div className='equipmentItem' key={equipt.name}>
            <img src={equipt.imageUrl} className="equipItemPic" />
            <div className="equiptname">{equipt.name} ({equipt.attack})</div>
        </div>
     );
}
 
export default EquipmentItem;