import Eugene from "./Eugene";
import Wilson from "./Wilson"
import Daniel from "./Daniel";
import Han from "./Han";
const DevPage = () => {
    return (  
        <>
            <div className="eugene-container">
                {Eugene}
            </div>
            <div className="wilson-container">
                {Wilson}
            </div>
            <div className="daniel-container">
                {Daniel}
            </div>
            <div className="han-container">
                {Han}
            </div>
        </>
    );
}
 
export default DevPage;