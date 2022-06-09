import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_GARDENS } from '../utils/queries';
import './styles/gardentable.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const GardenTable = () => {

    const { loading, data } = useQuery(QUERY_GARDENS);
    const gardenList = data?.gardens || [];

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
        <>
        <div>
          {loading ? (
            <div>Loading...</div>
              ) : (
            <table>
              <thead>
                <tr>
                  <th>Actions</th>
                  <th>Vegetable</th>
                  <th>variety</th>
                  <th>Sow Date</th>
                  <th>Plant Date</th>
                  <th>First Harvest</th>
                  <th>Last Harvest</th>
                  <th className='notes'>Notes</th>
                </tr>
              </thead>
              <tbody>
              {gardenList.map((garden) => {
                return (
                  <tr key={garden._id} value={garden.vegetable}>
                    <td>
                        <button onClick={handleShow}>
                            <FontAwesomeIcon icon={faEdit} />
                        </button>
                        <button onClick={handleShow}>
                            <FontAwesomeIcon icon={faPlusCircle} />
                        </button>
                    </td>
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
                    <td className='notes-data'>
                      {garden.notes}
                    </td>
                  </tr>
                );
              })}
              </tbody>
            </table>
          )}
        </div>
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
    </>
    )
};

export default GardenTable;