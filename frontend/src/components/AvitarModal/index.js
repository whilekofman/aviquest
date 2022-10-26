import './AvitarModal.css'
import AvitarModalContent from './AvitarModalContent'


const AvitarShow = ({open, setOpen}) => {


    const avitarShow = (
        <div className="avitarShow" >
            
            <div className="modalGreyArea" onClick={(e) =>setOpen(false)}>
                <AvitarModalContent/>
            </div>
        </div>
    )

    return open ? avitarShow : null
}
 
export default AvitarShow;