import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, Button} from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import './styles/gardens.css';
// import { getDb } from '../../database';
import { useQuery } from '@apollo/client';
import { QUERY_GARDENS } from '../utils/queries';
// import { CREATE_GARDEN } from '../../utils/mutations';
<<<<<<< HEAD

=======
>>>>>>> abc42d3c5d3f1dc66f88a71026dd529a2fdd48ac

const Profile = () => {
    const { loading, data } = useQuery(QUERY_GARDENS);
    const gardenList = data?.gardens || [];
    // console.log(data);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
<<<<<<< HEAD
       
            <label>Garden 1: </label>
            {gardenList.map((garden) => {
              return (
                <option key={garden._id} value={garden.vegetable}>
                  {garden.vegetable}
                  {garden.variety}
                  {garden.sowDate}
                  {garden.plantDate}
                  {garden.firstHarvest}
                  {garden.lastHarvest}
                  {garden.notes}
                </option>
              );
            })}
            
=======
            <table>
              <thead>
                <tr>
                  <th>Vegetable</th>
                  <th>variety</th>
                  <th>Sow Date</th>
                  <th>Plant Date</th>
                  <th>First Harvest</th>
                  <th>Last Harvest</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
              {gardenList.map((garden) => {
                return (
                  <tr key={garden._id} value={garden.vegetable}>
                    <td>
                      {garden.vegetable}
                    </td>
                    <td>
                      {garden.variety}
                    </td>
                    <td>
                      {garden.sowDate}
                    </td>
                    <td>
                      {garden.plantDate}
                    </td>
                    <td>
                      {garden.firstHarvest}
                    </td>
                    <td>
                      {garden.lastHarvest}
                    </td>
                    <td>
                      {garden.notes}
                    </td>
                  </tr>
                );
              })}
              </tbody>
            </table>
>>>>>>> abc42d3c5d3f1dc66f88a71026dd529a2fdd48ac
          </div>
          )}
        </div>


        <Button className="nextButton" onClick={handleShow}>
          Open Modal
        </Button>
        <Modal className="modal-dialog modal-dialog-centered modal-dialog-scrollable" show={show}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Modal title</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleClose}></button>
              </div>
              <div className="modal-body">
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
                    <button className="btn btn-primary" onClick={handleClose}>Submit</button>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={handleClose}>Close</button>
                <button type="button" className="btn btn-primary" onClick={handleClose}>Save changes</button>
              </div>
            </div>
          </div>
        </Modal>

      </div>
    );
  };

export default Profile;