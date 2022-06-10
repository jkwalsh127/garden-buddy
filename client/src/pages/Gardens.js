import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-datepicker/dist/react-datepicker.css";
import './styles/gardens.css';
import GardenTable from '../components/GardenTable';
import birdLeft from './images/bird-left.png';
import birdRight from './images/bird-right.png';
import tomatoesLeft from './images/tomatoes-left.png';
import tomatoesRight from './images/tomatoes-right.png';

const Profile = () => {



    return (
      <div className='gardens-wrap'>
        <div className='head-wrap'>
          <img src={tomatoesLeft} alt="birds" className='tomatoes'/>
          <div className='title-wrap-gardens'>
            <img src={birdLeft} alt="birds" className='birds'/>
            <h1 className='page-title'>My Gardens</h1>
            <img src={birdRight} alt="tomatoes" className='birds'/>
          </div>
          <img src={tomatoesRight} alt="tomatoes" className='tomatoes'/>
        </div>
        <GardenTable />
      </div>
    );
  };

export default Profile;