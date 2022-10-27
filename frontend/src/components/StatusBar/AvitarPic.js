import { useSelector } from 'react-redux';
import avitar from './AvitarPic.webp'

const AvitarPic = () => {
    const currentUser = useSelector(state => state.session.user)
    
    return ( 
        <img src={currentUser.avitar} className="avitar" alt=""  />
    );
}
 
export default AvitarPic;