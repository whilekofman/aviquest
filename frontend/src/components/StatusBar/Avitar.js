import { useState } from 'react'
import { useSelector } from 'react-redux'
import AvitarModal from '../AvitarModal'
import avitar from './AvitarPic.webp'

const Avitar = () => {
    const [open, setOpen] = useState(false)
    const currentUser = useSelector(state => state.session.user)



    const openModal = ((e) => {
        e.preventDefault()
        setOpen(!open)
    })

    return ( 
    <div className="AvitarModalContainer">
        <AvitarModal className='avitarModalShow' open={open} setOpen={setOpen} />
        {/* <div className="Avitar"> */}
        <img src={currentUser.avitar} className="avitar" alt=""  onClick={(e) => openModal(e)}/>
        {/* </div> */}
    </div>
     );
}
 
export default Avitar;