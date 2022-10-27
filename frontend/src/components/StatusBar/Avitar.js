import { useState } from 'react'
import { useSelector } from 'react-redux'
import AvitarModal from '../AvitarModal'
import avitar from './AvitarPic.webp'
import AvitarModalContent from '../AvitarModal/AvitarModalContent'
import { Modal } from '../../context/Modal'

const Avitar = () => {
    const [open, setOpen] = useState(false)
    const currentUser = useSelector(state => state.session.user)



    const openModal = ((e) => {
        e.preventDefault()
        setOpen(!open)
    })

    return ( 
    <div className="AvitarModalContainer">
        {/* <AvitarModal className='avitarModalShow' open={open} setOpen={setOpen} /> */}
        <img src={currentUser.avitar} className="avitar" alt=""  onClick={()=> setOpen(true)}/>
        {open && (
           <Modal className='avitarModalShow' onClose={() => setOpen(false)} open={open} setOpen={setOpen}>
               <AvitarModalContent/>
           </Modal>
        )}
    </div>
    );
}
export default Avitar;