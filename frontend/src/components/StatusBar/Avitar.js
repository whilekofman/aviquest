import { useState } from 'react'
import AvitarShow from '../AvitarShow'
import avitar from './AvitarPic.webp'

const Avitar = () => {
    const [open, setOpen] = useState(false)

    const openModal = ((e) => {
        e.preventDefault()
        setOpen(!open)
    })

    return ( 
    <div className="container">
        {/* <AvitarShow open={open} /> */}
        <sfc className="Avitar">
            <img src={avitar} className="avitar" alt=""  onClick={(e) => openModal(e)}/>
        </sfc>
    </div>
     );
}
 
export default Avitar;