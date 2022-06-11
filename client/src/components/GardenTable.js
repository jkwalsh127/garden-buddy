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

<<<<<<< HEAD
  const { loading, data } = useQuery(QUERY_GARDENS);
  const gardenList = data?.gardens || [];
=======
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
>>>>>>> 410fa9f3ba57574a4ae0946d4151b417cb945055

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
                  <button className='button'>
                      <FontAwesomeIcon icon={faEdit} />
                  </button>
                  <button 
                    type="button"
                    onClick={() => {
                      console.log('clicked!');
                    }}
                  >
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