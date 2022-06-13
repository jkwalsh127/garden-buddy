import React, { useState }  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-datepicker/dist/react-datepicker.css";
import './styles/gardens.css';
import GardenTable from '../components/GardenTable';
import birdLeft from './images/bird-left.png';
import birdRight from './images/bird-right.png';
import tomatoesLeft from './images/tomatoes-left.png';
import tomatoesRight from './images/tomatoes-right.png';
import { Modal } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import { ADD_GARDEN } from '../utils/mutations';
import { useMutation } from '@apollo/client';
import { QUERY_GARDENS } from '../utils/queries';
import { useNavigate } from "react-router-dom";

const Profile = () => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [vegetable, setVegetable] = useState('');
  const [variety, setVariety] = useState('');
  const [startedAs, setStartedAs] = useState('');
  const [sowDate, setSowDate] = useState('');
  const [plantDate, setPlantDate] = useState('');
  const [firstHarvest, setFirstHarvest] = useState('');
  const [lastHarvest, setLastHarvest] = useState('');
  const [notes, setNotes] = useState('');

  const [addGarden] = useMutation(ADD_GARDEN, {
    update(cache, { data: { addGarden } }) {
      try {
        const { gardens } = cache.readQuery({ query: QUERY_GARDENS });

        cache.writeQuery({
          query: QUERY_GARDENS,
          data: { gardens: [addGarden, ...gardens] },
        });
      } catch (e) {
        console.error(e);
      }

    },
  });

  const navigate = useNavigate();
  const handleAddGarden = async (e) => {
    e.preventDefault();

    const plantDateString = JSON.stringify(plantDate);
    const plantDateSlice = plantDateString.slice(0,11);

    try {
      const { data } = await addGarden({
        variables: {
          vegetable,
          variety,
          startedAs,
          sowDate,
          plantDateSlice,
          firstHarvest,
          lastHarvest,
          notes
        },
      });

      console.log(data);

      setVegetable('');
      setVariety('');
      setNotes('');
      navigate("/gardens");
    } catch (err) {
      console.error(err);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    if (name === 'vegetable') {
      setVegetable(value);
    } else if (name === 'variety') {
      setVariety(value);
    } else if (name === 'startedAs') {
      setStartedAs(value);
    } else {
      setNotes(value);
    }
  };

  return (
    <div className='gardens-wrap'>
      <div className='head-wrap'>
        <img src={tomatoesLeft} alt="tomatoes" className='tomatoes'/>
        <div className='title-wrap-gardens'>
          <img src={birdLeft} alt="birds" className='birds'/>
          <h1 className='gardens-title font-title'>My Gardens</h1>
          <img src={birdRight} alt="tomatoes" className='birds'/>
        </div>
        <img src={tomatoesRight} alt="tomatoes" className='tomatoes'/>
      </div>
      <button onClick={handleShow} className='garden-btn'>
        Add Garden
      </button>
      <GardenTable />
      <Modal className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal" show={show}>
            <div className="modal-head">
              <h5 className="modal-head">New Garden</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleClose}></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleAddGarden}>
                <div className="form-group">
                  <input
                    value={vegetable}
                    name='vegetable'
                    onChange={handleInputChange}
                    type='text'
                    placeholder='Vegetable'
                    className='input'
                  />
                  <input
                    value={variety}
                    name='variety'
                    onChange={handleInputChange}
                    type='text'
                    placeholder='Variety'
                    className='input'
                  />
                  <input
                    value={startedAs}
                    name='startedAs'
                    onChange={handleInputChange}
                    type='text'
                    placeholder='Started as'
                    className='input'
                  />
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
                  <textarea
                    placeholder="Add some notes..."
                    value={notes}
                    name='notes'
                    onChange={handleInputChange}
                    type='text'
                    className='notes-input'
                  ></textarea>
                  <button className="modal-btn" onClick={handleClose}>
                    Submit
                  </button>
                </div>
              </form>
          </div>
      </Modal>
    </div>
  );
};

export default Profile;