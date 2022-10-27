import HPBar from "./HealthBar";

const AvitarStats = ({user}) => {
    
    const username = user.username
    const health = {
        currentHealth: user.currentHealth,
        maxHealth: user.maxHealth
    }

    return ( 
        <div className="AvitarStats">
            <div className="AvitarUsername">{username}</div>
            <br />
            <HPBar health={health} />
            <br />

        </div>
     );
}
 
export default AvitarStats;