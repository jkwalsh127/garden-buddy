import React from 'react';
import './styles/profile.css';
import { useQuery } from '@apollo/client';
import { QUERY_GARDENS } from '../../utils/queries';
// import { CREATE_GARDEN } from '../../utils/mutations';


const Profile = () => {
    const { loading, data } = useQuery(QUERY_GARDENS);

    const gardenList = data?.garden || [];
    console.log(gardenList);

    return (
        <div className=''>
          <h1 className='page-title'>My Gardens</h1>
          <div className=''>
            {loading ? (
              <div>Loading...</div>
            ) : (
              <>
                <label>Tech 1: </label>
                {gardenList.map((garden) => {
                  return (
                    <option key={garden._id}>
                      {garden.vegetable}
                    </option>
                  );
                })}
              </>
            )}
          </div>
        </div>
      );
    };
    
export default Profile;