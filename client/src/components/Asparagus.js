import React from 'react';
import './styles/guides.css';
// import { Link } from 'react-router-dom';
import asparagus from '../pages/images/asparagus.jpg';

export default function Asparagus() {
    return (
            <>
            <h1 className='page-title'>Growing Guides</h1>
            <h2 className='veggie-title'>Asparagus</h2>
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
                                Full Sun
                            </li>
                            <label className='detail-label'>Soil pH</label>
                            <li className='detail'>
                                Neutral-Slightly acidic
                            </li>
                            <label className='detail-label'>Bloom Time</label>
                            <li className='detail'>
                                Summer, Fall
                            </li>
                            <label className='detail-label'>Days to Harvest</label>
                            <li className='detail'>
                                3 years
                            </li>
                            <label className='detail-label'>Recommended Start</label>
                            <li className='detail'>
                                Outdoors
                            </li>
                            <label className='detail-label'>Seed Depth</label>
                            <li className='detail'>
                                6"
                            </li>
                        </ul>
                    </div>
                    <div className='description-wrap'>
                        <img className='veggie-img' src={asparagus} alt='tomato plant'></img>
                        <p className='description'>
                            Asparagus can be used for a variety of things. 
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};
