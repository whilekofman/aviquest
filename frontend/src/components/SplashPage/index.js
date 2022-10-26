import './index.css'
import logoImg from '../../assets/images/logo.png';
import avengersImg from './Avengers8bit.png'
import SignUpForm from '../SignUpForm';
import RedBird from './RedBirdSplash.gif'
import BlueBird from './BlueBirdSplash.gif'

import { Modal } from '../../context/Modal';
import { useState } from 'react';
import ShopModal from '../ShopModal';

const SplashPage = () => {



    return ( 
        <div className="SplashPage" >

            <section className="SplashPagePg1" >
                <div className="SplashPagePg1Left">
                    <img src={avengersImg} alt="" />
                    <br />
                    <div> Transform your life</div>

                    <div> into an Adventure</div>

                </div>
                <div className="SplashPagePg1Right">
                    <SignUpForm/>
                </div>

                
            </section>

            <section className="SplashPagePg2">
                <div className='SplashPagePg2Right'>
                    <img src={BlueBird} className="SplashPage2Sprite" />
                </div>
                <div className="SplashPagePg2Left">
                    <h1 className='SplashPagePg2LeftDiv'>Go Have Fun, Get Stuff Done </h1>
                    <br />
                    {/* <h1 className='SplashPagePg1LeftDiv'>Get Shit Dun </h1> */}
                    <br />
                    <br />
                    <p>Achieving goals, doing chores, and getting your life in check can be fun.
                        Look no further than Aviquest. With this app, you can transform your life
                        into a Role Playing Game. 
                    </p>
                    <br />
                    <p> Aviquest provides you with in-game rewards that you can use to purchase items to equip your Avitar with.Take your Avitar on a quest for a chance to slay bosses and collect more rewards
                        to further advance your Avitar. Give this literal life changing app a try!
                    </p>
                </div>
                <br />
                <div className='SplashPagePg2Right'>
                    <img src={RedBird} className="SplashPage2Sprite" />
                </div>
            </section>

            <section className="SplashPagePg3">
                <img src={logoImg} alt="" />

                <br />
                <br />
                <div className="SplashPageJoinAviQuest">
                    <h1 className='SplashPageJoinToday'>JOIN</h1>
                    <h1 className='SplashPagePg3H1'>AVIQUEST </h1>
                    <h1 className='SplashPageJoinToday'> TODAY! </h1>
                </div>
            </section>

            {/* <section>
                    <ShopModal/>
            </section> */}
        </div>
     );
}
 
export default SplashPage;