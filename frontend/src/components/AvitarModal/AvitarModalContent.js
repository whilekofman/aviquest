import AvitarPic from "../StatusBar/AvitarPic";
import * as demouser from '../Util/demouser'
import HPBar from "../StatusBar/HealthBar";
import AvitarStats from "../StatusBar/AvitarStats";
import { useState } from "react";
import { useSelector } from "react-redux";
import EquipmentBar from "../EquipmentBar";
import avitar from '../StatusBar/AvitarPic'



const AvitarModalContent = () => {
    const [editing, setEditing] = useState(false)
    const user = demouser.user
    const currentUser = useSelector(state => state.session.user)
    const [avitarPicURL, setavitarPicURL] = useState('currentUserURl')

    const avitar1 = 'https://www.pngfind.com/pngs/m/55-557958_iron-man-final-fantasy-pixel-art-hd-png.png'
    const avitar2 = 'https://img.favpng.com/24/10/8/thor-pixel-art-marvel-cinematic-universe-loki-png-favpng-L9NYWsCxgygXbYPNgXF6aky4a.jpg'
    const avitar3 = 'https://www.pngkey.com/png/detail/164-1648335_hulk-smash-megaman-8-bit.png'
    const avitar4 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg12pnpP8jz2a5PvsmWm3pU8xsnzPD9xkyF2liPAHMuZedYeIJN9aKD1zY3tuwPDDJqes&usqp=CAU'


    const show = ( 
        <div  onClick={(e)=> e.stopPropagation()} className="AvitarModalContent" >
            <div className="AvitarModalPic">
                <AvitarPic/>
            </div>
            <br />
            <AvitarStats user={currentUser} id="AvitarModalStats"/>
            {currentUser.email}
            {currentUser.atk}
            {currentUser.coins}
            <br />
            Aviquips:
            <EquipmentBar/>
            <br />

            <button className="AvitarModalEditButton" onClick={(e) => setEditing(true)}>Edit</button>
        </div>
     );

     const edit = (
        <form onClick={(e)=> e.stopPropagation()} className="AvitarModalContent" >
            <div className="AvitarEditing"> Editing: </div>
                <div className="AvitarModalPicsEdit">
                    <label htmlFor=""></label>
                    <img className='AvitarModalPicsEditPic' src={avitar1} alt="" value='google.com' onClick={(e) => setavitarPicURL(avitar1)}/>
                    <img className='AvitarModalPicsEditPic'src={avitar2} alt="" value='google.com' onClick={(e) => setavitarPicURL(avitar2)}/>
                    <img className='AvitarModalPicsEditPic'src={avitar3} alt="" value='google.com' onClick={(e) => setavitarPicURL(avitar3)}/>
                    {/* <img src={avitar4} alt="" value='google.com' onClick={(e) => setavitarPicURL(avitar4)}/> */}

                </div>

                <br />
                <AvitarStats user={currentUser} id="AvitarModalStats"/>
                {currentUser.email}
                <input type="email" placeholder="Enter New Email"/> 
                {currentUser.atk}
                {currentUser.coins}
                <br />
                Aviquips:
                <EquipmentBar/>
                <br />

                <button className="AvitarModalEditButton" onClick={(e) => setEditing(false)}>Save Changes</button>
        </form>

     )

     return editing ? edit : show
}
 
export default AvitarModalContent;