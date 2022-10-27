import EquipmentItem from "./EquipmentItem";

const Equipments = ({equipments}) => {

    const allEquipments = equipments.map(equipt => <EquipmentItem equipt={equipt} key={equipt.name}/> )

    return ( 
        <div className="equipments">
            <div className="equiptmentTitle"> Aviquips: </div>

            {allEquipments}
        </div>
     );
}
 
export default Equipments;