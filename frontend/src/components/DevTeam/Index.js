import Eugene from "./Eugene";
import Wilson from "./Wilson"
import Daniel from "./Daniel";
import Han from "./Han";
import './DevTeam.css'

const DevTeam = () => {
    return (  
    <div className="team-container">

        <div className="engineer-container">
            <Eugene />
        </div>
        <div className="engineer-container">
            <Wilson />
        </div>
        <div className="engineer-container">
            <Daniel />
        </div>
        <div className="engineer-container">
            <Han />
        </div>
    </div>
    );
}
 
export default DevTeam;