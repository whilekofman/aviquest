import AvitarPic from "../StatusBar/AvitarPic";
import * as demouser from '../Util/demouser'
import AvitarStats from "../StatusBar/AvitarStats";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import EquipmentBar from "../EquipmentBar";
import avitars from '../Util/avitar_data.js'
import { getCurrentUser } from "../../store/session";
import * as userActions from '../../store/user';



const AvitarModalContent = () => {
    const dispatch = useDispatch()
    const [editing, setEditing] = useState(false)
    const [noMoney, setNoMoney] = useState('')
    const currentUser = useSelector(state => state.session.user)
    const [selectAvitar, setSelectAvitar] = useState(currentUser && currentUser)

    const {attack, avitar, coins, currentHealth, quest,
        email, equipment, items, maxHealth, movingImageUrl, username, _id
    } = useSelector(state => state.session.user);

    const avitars_mapped = avitars.map(avitar => <img className='AvitarModalPicsEditPic' src={avitar.avitar} alt="" value='google.com' onClick={(e) => setSelectAvitar(avitar)}/>)
    const avitars_mapped_select = avitars.map(avitar => 
        
        <label className=''  alt="" value='google.com' id={avitar.name}>
        <input name="avitar" type="radio" for={avitar.name}  onClick={(e) => setSelectAvitar(avitar)} 
        ></input>
        {avitar.name} {avitar.avitar === currentUser.avitar ? '(current)' : ''}
        </label>)

    const handleEdit = (e) => {
        e.preventDefault()
            const newCoins = currentUser.coins + 50
            const userData = {
                _id, 
                avitar: selectAvitar.avitar, 
                coins: newCoins, 
                movingImageUrl: selectAvitar.movingImageUrl
            }
            console.log(`${selectAvitar.avitar}`)

            if (newCoins > 0) {
                dispatch(userActions.updateUser(userData));
            } else {
                setNoMoney('Not enough funds')
            }
        setEditing(false)
    }


    const show = ( 
        <div  onClick={(e)=> e.stopPropagation()} className="AvitarModalContent" >
            <div className="AvitarModalPic">
                <AvitarPic/>
            </div>
            <br />
            <AvitarStats user={currentUser} id="AvitarModalStats"/>
            {/* {currentUser.email} */}
            {/* {currentUser.coins} */}

            <div className="avitar-show-stats">
                {/* <div>
                    Health: {currentUser.currentHealth}
                </div> */}
                {/* <div>
                    Attack: {currentUser.attack}
                </div> */}
            </div>
            {/* Aviquips: */}
            <div className="avitar-modal-equips">
                <EquipmentBar/>
            </div>
            <br />

            <button className="AvitarModalEditButton" onClick={(e) => setEditing(true)}>Change Avitar</button>
        </div>
     );

     const edit = (
        <form onClick={(e)=> e.stopPropagation()} className="AvitarModalContent" >
            <div className="AvitarEditing"> Current Avitar: </div>
                <img src={currentUser.avitar} alt="" />

                <br />
                <AvitarStats user={currentUser} id="AvitarModalStats"/>
 
                <br />
                
                <div className="AvitarModalSelecNewAvitar"> Select New Avitar:</div>
                
                <div className="AvitarModalChangeAvitar">
                    <div className="AvitarModalChangeSelection">{avitars_mapped_select}</div>
                    <img className='AvitarModalPicsEditPic' src={selectAvitar.avitar} alt="" />
                </div>
                {noMoney}
                <div className="AvitarModalEditBothButtons">
                    <button className="AvitarModalEditButton" onClick={(e) => setEditing(false)}>Cancel</button>
                    <button className="AvitarModalEditButton" onClick={(e) => handleEdit(e)}>Confirm (50)</button>
                </div>

        </form>

     )

     return editing ? edit : show
}
 
export default AvitarModalContent;