import React from 'react';
import './styles/guides.css';
import { Link } from 'react-router-dom';
import carrot from '../pages/images/carrot.jpg';

export default function Carrots() {
    return (
            <>
            <h1 className='page-title'>Growing Guides</h1>
            <h2 className='veggie-title'>Carrots</h2>
            <div className='content-wrap'>
            <div className='list-wrap'>
                    <ul className='veggie-list'> 
                        <h2 className='list-title'>Vegetables</h2>  
                        <li className='veggie'>
                            <Link className='veggie-link' to='/guides/Asparagus'>Asparagus</Link>
                        </li>
                        <li className='veggie'>
                            <Link className='veggie-link' to='/guides//Beets'>Beets</Link>
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
                                Full sun to partly shady
                            </li>
                            <label className='detail-label'>Soil pH</label>
                            <li className='detail'>
                                Slightly acidic 
                            </li>
                            <label className='detail-label'>Bloom Time</label>
                            <li className='detail'>
                                Spring
                            </li>
                            <label className='detail-label'>Days to Harvest</label>
                            <li className='detail'>
                                50-75
                            </li>
                            <label className='detail-label'>Recommended Start</label>
                            <li className='detail'>
                                Outdoors
                            </li>
                            <label className='detail-label'>Seed Depth</label>
                            <li className='detail'>
                                1/4"
                            </li>
                        </ul>
                    </div>
                    <div className='description-wrap'>
                        <img className='veggie-img' src={carrot} alt='tomato plant'></img>
                        <p className='description'>
                           Carrots can be used for a variety of reasons.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};
