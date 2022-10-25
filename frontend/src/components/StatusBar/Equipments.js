import EquipmentItem from "./EquipmentItem";

const Equipments = ({equipments}) => {

    const allEquipments = equipments.map(equipt => <EquipmentItem equipt={equipt} key={equipt.id}/> )

    return ( 
        <div className="equipments">
            <div className="equiptmentTitle"> AviQuipments: </div>

            {allEquipments}
        </div>
     );
}
 
export default Equipments;