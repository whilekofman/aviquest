import { useEffect, useState } from "react"

const HPBar = ({health}) => {

    const [newHealth, setNewHealth ] = useState((health.currentHealth / health.maxHealth) * 100)

    let hp = (health.currentHealth / health.maxHealth) * 100
    const color1 = (hp/100 * 255)
    const color2 = 255-(hp/100 * 255)
    const color3 = 255-(hp/100 * 255)

    useEffect(() => {
        setNewHealth((health.currentHealth / health.maxHealth) * 100)
    },[health.currentHealth])

    const hpbarstyle = {
        width: `${newHealth}%`,
        backgroundColor: `rgba(${color2}, ${color1}, 250, .7)`
    }

    return ( 
        <div className="HPBAR"> 
            <div className="hp">❤️</div>
            <div className="hpbar" > 
                <div className="redhpbar" style={hpbarstyle}></div>
                <div className="hpnum"> { parseInt(health.currentHealth)} / {health.maxHealth} </div>
            </div>
        </div>
     );
}
 
export default HPBar;