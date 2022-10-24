const HPBar = ({health}) => {

    const hp = (health.currenthp / health.maxhp) * 100


    const hpbarstyle = {
        width: `${hp}%`
    }

    return ( 
        <div className="HPBAR"> 
            <div className="hp">❤️</div>
            <div className="hpbar" > 
                <div className="redhpbar" style={hpbarstyle}></div>
                <div className="hpnum"> {health.currenthp} / {health.maxhp} </div>
            </div>
        </div>
     );
}
 
export default HPBar;