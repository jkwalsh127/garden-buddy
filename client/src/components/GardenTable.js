import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_GARDENS } from '../utils/queries';
import { QUERY_ME } from '../utils/queries';
import { ADD_GARDEN } from '../utils/mutations';
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

    const [vegetable, setVegetable] = useState('');
    const [variety, setVariety] = useState('');
    const [startedAs, setStartedAs] = useState('');
    const [sowDate, setSowDate] = useState(new Date());
    const [plantDate, setPlantDate] = useState(new Date());
    const [firstHarvest, setFirstHarvest] = useState(new Date());
    const [lastHarvest, setLastHarvest] = useState(new Date());
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
  
        // update me object's cache
        const { me } = cache.readQuery({ query: QUERY_ME });
        cache.writeQuery({
          query: QUERY_ME,
          data: { me: { ...me, gardens: [...me.gardens, addGarden] } },
        });
      },
    });

    const handleAddGarden = async (e) => {
      e.preventDefault();

      try {
        const { data } = await addGarden({
          variables: {
            vegetable,
            variety,
            startedAs,
            sowDate,
            plantDate,
            firstHarvest,
            lastHarvest,
            notes
          },
        });
        console.log(data);
        setVegetable('');
        setVariety('');
        setNotes('');
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
        <>
        <div className='table-wrap'>
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
                    <td className='actions'>
                        <button onClick={handleShow} className='button'>
                            <FontAwesomeIcon icon={faEdit} />
                        </button>
                        <button onClick={handleShow} className='button'>
                            <FontAwesomeIcon icon={faPlusCircle} />
                        </button>
                    </td>
                    <td className='inner-cells'>
                      {garden.vegetable}
                    </td>
                    <td className='inner-cells'>
                      {garden.variety}
                    </td>
                    <td className='inner-cells'>
                      {garden.sowDate}
                    </td>
                    <td className='inner-cells'>
                      {garden.plantDate}
                    </td>
                    <td className='inner-cells'>
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
                <form onSubmit={handleAddGarden}>
                  <div className="form-group">
                    <input
                      value={vegetable}
                      name='vegetable'
                      onChange={handleInputChange}
                      type='text'
                      placeholder='Vegetable'
                    />
                    <input
                      value={variety}
                      name='variety'
                      onChange={handleInputChange}
                      type='text'
                      placeholder='Variety'
                    />
                    <input
                      value={startedAs}
                      name='startedAs'
                      onChange={handleInputChange}
                      type='text'
                      placeholder='Started as'
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
                      placeholder="add some notes..."
                      value={notes}
                      name='notes'
                      onChange={handleInputChange}
                      type='text'
                      className='notes-input'
                    ></textarea>
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