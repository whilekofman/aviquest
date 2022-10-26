const ShopItemEach = ({item}) => {
    return ( 
        <div className="ShopModal-ShopItemEach">
            <img src={item.imageURL} className='ShopModal-ShopItemEachPic' />
            {item.name}

        </div>
     );
}
 
export default ShopItemEach;