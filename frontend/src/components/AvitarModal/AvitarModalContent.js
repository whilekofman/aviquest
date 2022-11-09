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

    const avitars_mapped = avitars.map(avitar => <img className='AvitarModalPicsEditPic' src={avitar.avitar} alt="" onClick={(e) => setSelectAvitar(avitar)}/>)
    const avitars_mapped_select = avitars.map(avitar => 
        
        <label className={avitar.avitar === currentUser.avitar ? 'AvitarModalSelected' : ''}  alt="" id={avitar.name} key={avitar.name}>
        <input name="avitar" type="radio" className="AvitarModalRadioButton"htmlFor={avitar.name}  onClick={(e) => setSelectAvitar(avitar)} 
        ></input>
        {avitar.name}
        {/* {avitar.avitar === currentUser.avitar ? '(current)' : ''} */}
        </label>)

    const handleEdit = (e) => {
        e.preventDefault()
            const newCoins = currentUser.coins - 50
            const userData = {
                _id, 
                imageUrl: selectAvitar.avitar, 
                coins: newCoins, 
                movingImageUrl: selectAvitar.movingImageUrl
            }
            console.log(`${selectAvitar.avitar}`)

            if (newCoins > 0 && selectAvitar.avitar !== currentUser.avitar) {
                dispatch(userActions.updateUser(userData));
                setNoMoney('')
                setEditing(false)
            } else if (selectAvitar.avitar === currentUser.avitar){
                setNoMoney('Already your avitar')
            }else if (newCoins <= 0)
            {
                setNoMoney('Not enough funds')
            }
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
                <img className='AvitarModalPicsEditPic' src={currentUser.avitar} alt="" />

                <br />
                {/* <AvitarStats user={currentUser} id="AvitarModalStats"/> */}
 
                <br />
                
                <div className="AvitarModalSelecNewAvitar"> Select New Avitar: </div>
                <div className="AvitarModalSelecNewAvitar"> (50 coins)</div>

                <br />
                <div className="AvitarModalChangeAvitar">
                    <div className="AvitarModalChangeSelection">{avitars_mapped_select}</div>
                    <img className='AvitarModalPicsEditPic' src={selectAvitar.avitar} alt="" />
                </div>
                <div className="AvitarModalEditBothButtons">
                    <button className="AvitarModalEditButton" onClick={(e) => setEditing(false)}>Cancel</button>
                    <button className="AvitarModalEditButton" onClick={(e) => handleEdit(e)}>Confirm (50)</button>
                </div>
               <br />
                {noMoney}

        </form>

     )

     return editing ? edit : show
}
 
export default AvitarModalContent;