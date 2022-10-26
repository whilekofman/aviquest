import './Inventory.css'

const Inventory = () => {
    return (
        <div className='inventory-modal'>
            <div className='inventory-border'>
                <div className='inventory-equipment'>
                    <h1>equipment</h1>
                </div>
                <div className='inventory-index'>
                    <ul className='inventory-list'>
                        <li className='inventory-item'>
                            <h1>inventory item</h1>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
 
export default Inventory;