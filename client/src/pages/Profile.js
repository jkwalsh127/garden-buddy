import React from 'react';
import './styles/profile.css';
// import { getDb } from '../../database';
import { useQuery } from '@apollo/client';
import { QUERY_GARDENS } from '../utils/queries';
// import { CREATE_GARDEN } from '../../utils/mutations';

// const queryDB = async () => {
//   await getDb();
// }

const Profile = () => {
    const { loading, data } = useQuery(QUERY_GARDENS);

    const gardenList = data?.garden || [];
    console.log(gardenList);
    // queryDB();

    return (
        <div className=''>
          <h1 className='page-title'>My Gardens</h1>
          <div className=''>
          {loading ? (
          <div>Loading...</div>
            ) : (
            <label>Tech 1: </label>
                )
          }  
          </div>
        </div>
      );
    };

export default Profile;