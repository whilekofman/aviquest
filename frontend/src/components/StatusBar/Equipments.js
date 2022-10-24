import EquipmentItem from "./EquipmentItem";

const Equipments = ({equipments}) => {

    const allEquipments = equipments.map(equipt => <EquipmentItem equipt={equipt}/> )

    return ( 
        <div className="equipments">
            <div className="equiptmentTitle"> Equipments: </div>

            {allEquipments}
        </div>
     );
}
 
export default Equipments;