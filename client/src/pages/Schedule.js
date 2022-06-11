import React, { useState } from 'react';
import './styles/schedule.css';
import { validateZip } from '../utils/helpers';
import hardinessIMG from './images/hardiness.jpeg';
import hardinessLegend from './images/hardinessLegend.jpeg';
import zone3 from './images/zone-3.jpg';
import zone4 from './images/zone-4.jpg';
import zone5 from './images/zone-5.jpg';
import zone6 from './images/zone-6.jpg';
import zone7 from './images/zone-7.jpg';
import zone8 from './images/zone-8.jpg';
import zone9 from './images/zone-9.jpg';
import zone10 from './images/zone-10.jpg';

export default function Schedule() {
   
    const [zipCode, setZipCode] = useState('');
    const [growZone, setGrowZone] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [scheduleLabel, setScheduleLabel] = useState('');
    const [schedule, setSchedule] = useState('data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=');

    const handleInputChange = (e) => {
        const { target } = e;
        const inputValue = target.value;

        setZipCode(inputValue);
    };

    async function fetchZone(zip) {
        let response = await fetch(`https://phzmapi.org/${zip}.json`);
        let zoneResults = await response.json();

        return zoneResults;
    };

    const handleFormSubmit = async (e) => {
        // Prevent page refresh
        e.preventDefault();

        if (!validateZip(zipCode)) {
            setErrorMessage('Zipcode must be five numbers');
            setGrowZone('');
            setScheduleLabel('');
            setSchedule('data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=');
            // We want to exit out of this code block if something is wrong so that the user can correct it
            return;
        }

        let result = await fetchZone(zipCode);

        setGrowZone("Your growing zone is:" + result.zone);
        setZipCode('');
        setErrorMessage('');
        setScheduleLabel('Here is the planting schedule for your zone:');

        if (result.zone.includes('3')) {
            setSchedule(zone3);
        } else if (result.zone.includes('4')) {
            setSchedule(zone4);
        } else if (result.zone.includes('5')) {
            setSchedule(zone5);
        } else if (result.zone.includes('6')) {
            setSchedule(zone6);
        } else if (result.zone.includes('7')) {
            setSchedule(zone7);
        } else if (result.zone.includes('8')) {
            setSchedule(zone8);
        } else if (result.zone.includes('9')) {
            setSchedule(zone9);
        } else {
        setSchedule(zone10);
        }
      };
    


  return (
    <>
        <h1 className='page-title'>Find my planting schedule</h1>
        <p className='zone-description'>
            The 2012 USDA Plant Hardiness Zone Map is the standard by which gardeners and growers can determine which plants are most likely to thrive at a location. The map is based on the average annual minimum winter temperature, divided into 10-degree F zones.
        </p>
        <div className='hardiness-wrap'>
            <img src={hardinessIMG} alt='hardiness zones' className='hardiness-map'></img>
            <img src={hardinessLegend} alt='hardiness legend' className='hardiness-legend'></img>
        </div>
        <div className='inputContainer'>
            <label className='input-head'>Enter your zipcode to discover a planting schedule based on your Growing Zone</label>
            <form className='zip-form'>
                <input 
                    value={zipCode}
                    name='zipCode'
                    onChange={handleInputChange}
                    type='text'
                    placeholder='Zip Code'
                    className='zip-input'
                />
                <button type="button" className='submit-btn' onClick={handleFormSubmit}>Submit</button>
                <div className='error-div'>
                    {errorMessage && (
                        <div>
                            <p className="error-text">{errorMessage}</p>
                        </div>
                    )}
                </div>
            </form>

        </div>
        <div className='resultsContainer'> 
            <h2 className='results-label'>{growZone}</h2>
            <h3 className='schedule-label'>{scheduleLabel}</h3>
        </div>
        <div className='schedule-container'> 
            <img className='schedule-img' alt='planting schedule' src={schedule}></img>
        </div>
    </>
  );
}
