import React from 'react';
import './styles/guides.css';
import { Link } from 'react-router-dom';
import vegetables from './images/vegetables.jpg';
import Beets from '../components/Beets';
import Tomatoes from '../components/Tomatoes';
import Eggplants from '../components/Eggplants';
import Carrots from '../components/Carrots';
import Asparagus from '../components/Asparagus';

export default function Guides() {
    return (
        <>
            <h1 className='page-title'>Growing Guides</h1>
            <h2 className='veggie-title'>Check out the guides on how to grow your favorite vegetables!</h2>
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
                {/* <div className='guide-wrap'>
                    <div className='detail-wrap'>
                        <ul className='detail-list'>
                            <label className='detail-label'>Sun Exposure</label>
                            <li className='detail'>
                                Full Sun
                            </li>
                            <label className='detail-label'>Soil pH</label>
                            <li className='detail'>
                                Acidic-Neutral
                            </li>
                            <label className='detail-label'>Bloom Time</label>
                            <li className='detail'>
                                Summer
                            </li>
                            <label className='detail-label'>Days to Harvest</label>
                            <li className='detail'>
                                60-100
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
                    </div> */}
                    <div className='description-wrap'>
                        <img className='veggie-img' src={vegetables} alt='tomato plant'></img>
                        <p className='description'>
                            Click any of the links on the left to access the growing guide for that vegetable. 
                        </p>
                    </div>
                {/* </div> */}
            </div>
        </>
    );
};
