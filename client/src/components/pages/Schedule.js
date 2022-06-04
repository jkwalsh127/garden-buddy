import React, { useState } from 'react';
import './styles/schedule.css';
import { validateZip } from '../../utils/helpers';

export default function Schedule() {

    const [zipCode, setZipCode] = useState('');
    const [growZone, setGrowZone] = useState('');
    const [errorMessage, setErrorMessage] = useState('');



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
            setErrorMessage('Zipcode must be 5 numbers');
            // We want to exit out of this code block if something is wrong so that the user can correct it
            return;
        }

        let result = await fetchZone(zipCode);

        console.log(result.zone);
        console.log(typeof result.zone);

        setGrowZone(result.zone);
        setZipCode('');
        setErrorMessage('');
      };



  return (
    <div>
        <h1>Find Your Growing Zone</h1>
        <div className='inputContainer'>
            <label> Find your growing zone by entering your zip code below: </label>
            <form>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <input 
                    value={zipCode}
                    name='zipCode'
                    onChange={handleInputChange}
                    type='text'
                    placeholder='Zip Code'
                />
                <button type="button" onClick={handleFormSubmit}>Submit</button>
            </form>

        </div>
        <div className='resultsContainer'> 
            <h2>Your growing zone is: {growZone}</h2>
        
        </div>
    </div>
  );
}
