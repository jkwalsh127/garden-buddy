import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-datepicker/dist/react-datepicker.css";
import './styles/gardens.css';
import GardenTable from '../components/GardenTable';
import birdLeft from './images/bird-left.png';
import birdRight from './images/bird-right.png';

const Profile = () => {



    return (
      <div className=''>
        <div className='title-wrap-gardens'>
          <img src={birdLeft} alt="birds" className='birds'/>
          <h1 className='page-title'>My Gardens</h1>
          <img src={birdRight} alt="birds" className='birds'/>
        </div>
        <GardenTable />
      </div>
    );
  };

export default Profile;