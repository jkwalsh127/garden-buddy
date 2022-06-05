import React from 'react';
import './styles/profile.css';
import { postDb, getDb, deleteDb } from '../../database';
// import { useQuery } from '@apollo/client';
// import { QUERY_GARDENS } from '../../utils/queries';
// import { CREATE_GARDEN } from '../../utils/mutations';


const Profile = async () => {
    // const { loading, data } = useQuery(QUERY_GARDENS);
    // console.log(data);

    // const gardenList = data?.garden || [];
    // console.log(data.garden);
    // console.log(gardenList);
    const result = await getDb();
    console.log(result);

    return (
        <div className=''>
          <h1 className='page-title'>My Gardens</h1>
          <div className=''>
            <label>Tech 1: </label>
    
          </div>
        </div>
      );
    };
    
export default Profile;