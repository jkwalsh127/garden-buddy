import React from 'react';
import './styles/guides.css';
import { Link } from 'react-router-dom';
import vegetables from './images/vegetables.jpg';
import tomatoesLeft from './images/tomatoes-left.png';
import tomatoesRight from './images/tomatoes-right.png';
import butterflyLeft from './images/butterfly-left.png';
import butterflyRight from './images/butterfly-right.png';

export default function Guides() {
    return (
        <>
            <div className='guide-wrap'>
                <img src={tomatoesLeft} alt="tomatoes" className='tomatoes'/>
                <div className='title-wrap-guides'>
                    <img src={butterflyLeft} alt="butterfly" className='butterfly'/>
                    <h1 className='guides-title font-title'>Grow Guides</h1>
                    <img src={butterflyRight} alt="butterfly" className='butterfly'/>
                </div>
                <img src={tomatoesRight} alt="tomatoes" className='tomatoes'/>
            </div>

            <div className='content-wrap'>
                <div className='list-wrap'>
                    <ul className='veggie-list'> 
                        <h2 className='list-title'>Vegetables</h2>  
                        <li className='veggie'>
                            <Link className='veggie-link' to='/guides/Asparagus'>Asparagus</Link>
                        </li>
                        <li className='veggie'>
                            <Link className='veggie-link' to='/guides/Beets'>Beets</Link>
                        </li>
                        <li className='veggie'>
                            <Link className='veggie-link' to='/guides/Carrots'>Carrots</Link>
                        </li>
                        <li className='veggie'>
                            <Link className='veggie-link' to='/guides/Eggplants'>Eggplants</Link>
                        </li>
                        <li className='veggie'>
                            <Link className='veggie-link' to='/guides/Tomatoes'>Tomatoes</Link>
                        </li>
                    </ul>
                </div>
                <div className='description-wrap'>
                    <p className='description'>
                        Click any of the links on the left to access the growing guide for that vegetable. 
                    </p>
                    <img className='veggie-img' src={vegetables} alt='tomato plant'></img>
                </div>
            </div>
        </>
    );
};
