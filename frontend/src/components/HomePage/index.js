import './HomePage.css'
import { useSelector } from "react-redux";
import ListShowPage from "../ListShowPage";
import SplashPage from "../SplashPage";
import StatusBar from "../StatusBar";
import { useEffect } from 'react';

const HomePage = () => {
    const currentUser = useSelector(state => state.session.user)

    const notLoggedIn = (
        <div className="HomePage">
            <SplashPage/>
        </div>
    )

    const yesLoggedIn = (

        <div className="HomePage">
            <StatusBar/>
            <ListShowPage />
        </div>
    )

    return currentUser ? yesLoggedIn : notLoggedIn
    
}
 
export default HomePage;