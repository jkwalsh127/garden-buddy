import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import './styles/gardens.css';
// import { getDb } from '../../database';
import { useQuery } from '@apollo/client';
import { QUERY_GARDENS } from '../utils/queries';
// import { CREATE_GARDEN } from '../../utils/mutations';

const Profile = () => {
    const { loading, data } = useQuery(QUERY_GARDENS);
    // const gardenList = data?.gardens || [];
    console.log(data);

    const [sowDate, setSowDate] = useState(new Date());
    const [plantDate, setPlantDate] = useState(new Date());
    const [firstHarvest, setFirstHarvest] = useState(new Date());
    const [lastHarvest, setLastHarvest] = useState(new Date());

    const handleCreateGarden = (e) => {
      e.preventDefault();

      console.log(sowDate);
      console.log(plantDate);
      console.log(firstHarvest);
      console.log(lastHarvest);
    };

    return (
      <div className=''>
        <h1 className='page-title'>My Gardens</h1>
        <div className=''>
        {loading ? (
        <div>Loading...</div>
          ) : (
          <div>
            <label>Garden 1: </label>
            {data?.gardens.map((garden) => {
              return (
                <option key={garden._id} value={garden.vegetable}>
                  {garden.vegetable}
                </option>
              );
            })}
            
          </div>
          )}
        </div>

        <form onSubmit={handleCreateGarden}>
          <div className="form-group">
            <div className='field-wrap'>
              <label className='input-label'>Select sowing date</label>
              <DatePicker 
                className='field'
                selected={sowDate} 
                onChange={setSowDate}
                dateFormat='MMMM dd yyyy'
              />
            </div>
            <div className='field-wrap'>
              <label className='input-label'>Select planting date</label>
              <DatePicker
                className='field'
                selected={plantDate} 
                onChange={setPlantDate}
                dateFormat='MMMM dd yyyy'
              />
            </div>
            <div className='field-wrap'>
              <label className='input-label'>Select date of first harvest</label>
              <DatePicker
                className='field'
                selected={firstHarvest} 
                onChange={setFirstHarvest}
                dateFormat='MMMM dd yyyy'
              />
            </div>
            <div className='field-wrap'>
              <label className='input-label'>Select date of last harvest</label>
              <DatePicker
                className='field'
                selected={lastHarvest} 
                onChange={setLastHarvest}
                dateFormat='MMMM dd yyyy'
              />
            </div>
            <button className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    );
  };

export default Profile;