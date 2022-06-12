import React from 'react';
import '../pages/styles/guides.css';
import { Link } from 'react-router-dom';
import eggplant from '../pages/images/eggplant.jpg';
import tomatoesLeft from '../pages/images/tomatoes-left.png';
import tomatoesRight from '../pages/images/tomatoes-right.png';
import butterflyLeft from '../pages/images/butterfly-left.png';
import butterflyRight from '../pages/images/butterfly-right.png';

export default function Eggplants() {
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
            <h2 className='veggie-title'>Eggplant</h2>
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
                <div className='guide-wrap'>
                    <div className='detail-wrap'>
                        <ul className='detail-list'>
                            <label className='detail-label'>Sun Exposure</label>
                            <li className='detail'>
                                Full Sun
                            </li>
                            <label className='detail-label'>Soil pH</label>
                            <li className='detail'>
                                Acidic, neutral, alkaline
                            </li>
                            <label className='detail-label'>Bloom Time</label>
                            <li className='detail'>
                                Summer
                            </li>
                            <label className='detail-label'>Days to Harvest</label>
                            <li className='detail'>
                                80-100
                            </li>
                            <label className='detail-label'>Recommended Start</label>
                            <li className='detail'>
                                Indoors
                            </li>
                            <label className='detail-label'>Seed Depth</label>
                            <li className='detail'>
                                1/2"
                            </li>
                        </ul>
                    </div>
                    <div className='description-wrap'>
                        <img className='veggie-img' src={eggplant} alt='tomato plant'></img>
                    </div>
                </div>
            </div>
        </>
    );
};
