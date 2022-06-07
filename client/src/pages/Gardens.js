import React from 'react';
import './styles/profile.css';
// import { getDb } from '../../database';
import { useQuery } from '@apollo/client';
import { QUERY_GARDENS } from '../utils/queries';
// import { CREATE_GARDEN } from '../../utils/mutations';

const Profile = () => {
    const { loading, data } = useQuery(QUERY_GARDENS);
    const gardenList = data?.gardens || [];
    console.log(data);

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
      </div>
    );
  };

export default Profile;