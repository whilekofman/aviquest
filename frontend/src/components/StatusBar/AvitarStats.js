import HPBar from "./HealthBar";

const AvitarStats = ({user}) => {
    const username = user.username


    return ( 
        <div className="AvitarStats">
            <div className="AvitarUsername">{username}</div>
            <br />
            <HPBar health={user.health} />
            <br />

        </div>
     );
}
 
export default AvitarStats;