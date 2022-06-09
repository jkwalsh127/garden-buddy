import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-datepicker/dist/react-datepicker.css";
import './styles/gardens.css';
import GardenTable from '../components/GardenTable';

const Profile = () => {



    return (
      <div className=''>
        <h1 className='page-title'>My Gardens</h1>
        <div className=''>

          <GardenTable />

      </div>
      </div>
    );
  };

export default Profile;