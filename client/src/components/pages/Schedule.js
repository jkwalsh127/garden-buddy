import React, { useState } from 'react';
import './styles/schedule.css';
import { validateZip } from '../../utils/helpers';
import hardinessIMG from './images/hardiness.jpeg';
import hardinessLegend from './images/hardinessLegend.jpeg';
import zone9 from './images/zone-9.jpg';
import zone10 from './images/zone-10.jpg';


export default function Schedule() {

    const [zipCode, setZipCode] = useState('');
    const [growZone, setGrowZone] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
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
            // We want to exit out of this code block if something is wrong so that the user can correct it
            return;
        }

        let result = await fetchZone(zipCode);

        console.log(result.zone);
        console.log(typeof result.zone);

        setGrowZone(result.zone);
        setZipCode('');
        setErrorMessage('');

        if (growZone.startsWith(9)) {
            setSchedule(zone9);
        }
        setSchedule(zone10);
      };



  return (
    <>
        <h1 className='page-title'>Find Your Growing Zone</h1>
        <p className='zone-description'>
            The 2012 USDA Plant Hardiness Zone Map is the standard by which gardeners and growers can determine which plants are most likely to thrive at a location. The map is based on the average annual minimum winter temperature, divided into 10-degree F zones.
        </p>
        <div className='hardiness-wrap'>
            <img src={hardinessIMG} alt='hardiness zones' style={{width: '70%', minHeight: '350px', minWidth: '525px'}}></img>
            <img src={hardinessLegend} alt='hardiness legend' style={{width: '115px', height: '350px'}}></img>
        </div>
        <div className='inputContainer'>
            <label className='input-label'> Find your growing zone by entering your zip code below</label>
            <form className='zip-form'>
                <input 
                    value={zipCode}
                    name='zipCode'
                    onChange={handleInputChange}
                    type='text'
                    placeholder='Zip Code'
                />
                <button type="button" onClick={handleFormSubmit}>Submit</button>
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
            <h2 className='results-label'>Your growing zone is: {growZone}</h2>
        </div>
        <div className='scheduleContainer'> 
            <img className='schedule-img' alt='planting schedule' src={schedule}></img>
        </div>
    </>
  );
}
