const ShopItem = ({item}) => {
    return ( 
        <div className="ShopModal-ShopItem">
            <img src={item.imageUrl} className='ShopModal-ShopItemPic' />
        </div>
     );
}
 
export default ShopItem;