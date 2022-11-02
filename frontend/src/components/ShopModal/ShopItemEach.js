const ShopItemEach = ({item}) => {
    return ( 
        <div className="ShopModal-ShopItemEach">
            <img src={item.imageUrl} className='ShopModal-ShopItemEachPic' />
            {item.name}

        </div>
     );
}
 
export default ShopItemEach;