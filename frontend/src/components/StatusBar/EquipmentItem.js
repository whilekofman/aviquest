const EquipmentItem = ({equipt}) => {



    return ( 
        <div className='equipmentItem' key={equipt.name}>
            <img src={equipt.imageUrl} className="equipItemPic" />
            <div className="equiptname">{equipt.name} </div>
        </div>
     );
}
 
export default EquipmentItem;