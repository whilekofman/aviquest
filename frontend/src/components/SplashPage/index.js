import './index.css'
import logoImg from '../../assets/images/logo.png';


const SplashPage = () => {

    return ( 
        <div className="SplashPage" >

            <section className="SplashPagePg1" >
                <img src={logoImg} alt="" />
            </section>

            <section className="SplashPagePg2">
                Splash Pg 2
            </section>

            <section className="SplashPagePg3">
                Splash Pg 3
            </section>


        </div>
     );
}
 
export default SplashPage;