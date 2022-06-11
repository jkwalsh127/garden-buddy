import React from 'react';
import './styles/landing.css';
import fruits from './images/fruits.jpg';
import { Link } from 'react-router-dom';
import flowersLeft from './images/flowers-left.png';
import flowersRight from './images/flowers-right.png';
import butterflyLeft from './images/butterfly-left.png';
import butterflyRight from './images/butterfly-right.png';

export default function Landing() {
    return (
        <div className='landing-wrap'>

            <div className='head-wrap'>
                <img src={flowersLeft} alt="flowers" className='flowers'/>
                <div className='title-wrap-landing'>
                    {/* <img src={butterflyLeft} alt="butterflies" className='butterflies'/> */}
                    <h1 className='landing-title'>Welcome!</h1>
                    {/* <img src={butterflyRight} alt="butterflies" className='butterflies'/> */}
                </div>
                <img src={flowersRight} alt="flowers" className='flowers'/>
            </div>
            <div className='about-wrap'>
                <div className='about-box'>
                    <p className="about-text font-title">
                        Garden buddy is a useful tool for anyone looking to grow some produce at home. 
                    </p>
                    <ul className='description-list'>
                        <li>Use our app to:</li>
                        <li className='li'>Discover planting scheduels specific to your region</li>
                        <li className='li'>Use our guides to learn to care for each veggie</li>
                        <li className='li'>Save dates and notes to make your garden better every year</li>
                    </ul>
                </div>
            </div>
            <div className="buttonwrapper">
                <Link className='login button' to='/login'>Login</Link>
                <Link className='signup button' to='/signup'>Signup</Link>
            </div>
        </div>
        
    );
}
