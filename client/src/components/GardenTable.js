import React from 'react';
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useQuery } from '@apollo/client';
import { QUERY_GARDENS } from '../utils/queries';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styles/gardentable.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-datepicker/dist/react-datepicker.css';

const GardenTable = () => {

  const { loading, data } = useQuery(QUERY_GARDENS);
  const gardenList = data?.gardens || [];

  return (
    <div className='table-wrap'>
      {loading ? (
        <span>Loading...</span>
         ) : (
        <table>
          <thead>
            <tr>
              <th className='actions'>Actions</th>
              <th>Vegetable</th>
              <th>Variety</th>
              <th>Started As</th>
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
                  <button className='btn'>
                      <FontAwesomeIcon icon={faEdit} />
                  </button>
                  <button className='btn'>
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </td>
                <td className='inner-cells'>
                  {garden.vegetable}
                </td>
                <td className='inner-cells'>
                  {garden.variety}
                </td>
                <td className='inner-cells'>
                  {garden.startedAs}
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
                <td className='inner-cells'>
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
  )
};

export default GardenTable;