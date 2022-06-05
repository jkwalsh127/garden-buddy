import { openDB } from 'idb';

const initdb = async () =>
// We are creating a new database 'garden' which will be using version 1 of the database.
  openDB('garden', 1, {
    // Add our database schema if it has not already been initialized.
    upgrade(db) {
      if (db.objectStoreNames.contains('garden')) {
        console.log('garden database already exists');
        return;
      }
      // Create a new object store for the data and give it an key name of 'id' which needs to increment automatically.
      db.createObjectStore('garden', { keyPath: 'id', autoIncrement: true });
      console.log('garden database created');
    },
  });

// Export a function we will use to POST to the database.
export const postDb = async (vegetable, variety, startedAs, sowDate, plantDate, firstHarvest, lastHarvest, notes)  => {
  console.log('Post to the database');

  // Create a connection to the database database and version we want to use.
  const gardenDb = await openDB('garden', 1);

  // Create a new transaction and specify the database and data privileges.
  const tx = gardenDb.transaction('garden', 'readwrite');

  // Open up the desired object store.
  const store = tx.objectStore('garden');

  // Use the .add() method on the store and pass in the content.
  const request = store.add({ vegetable: vegetable, variety: variety, startedAs: startedAs, sowDate: sowDate, plantDate: plantDate, firstHarvest: firstHarvest, lastHarvest: lastHarvest, notes: notes });

  // Get confirmation of the request.
  const result = await request;
  console.log('🚀 - data saved to the database', result);
};
;

// Export a function we will use to GET to the database.
export const getDb = async () => {
  console.log('GET from the database');

  // Create a connection to the database database and version we want to use.
  const gardenDb = await openDB('garden', 1);

  // Create a new transaction and specify the database and data privileges.
  const tx = gardenDb.transaction('garden', 'readonly');

  // Open up the desired object store.
  const store = tx.objectStore('garden');

  // Use the .getAll() method to get all data in the database.
  const request = store.getAll();

  // Get confirmation of the request.
  const result = await request;
  console.log('result.value', result);
  return result;
};


// Export a function we will use to DELETE to the database.
export const deleteDb = async (id) => {
  console.log('DELETE from the database', id);

  // Create a connection to the database database and version we want to use.
  const gardenDb = await openDB('garden', 1);

  // Create a new transaction and specify the database and data privileges.
  const tx = gardenDb.transaction('garden', 'readwrite');

  // Open up the desired object store.
  const store = tx.objectStore('garden');

  // Use the .delete() method to get all data in the database.
  const request = store.delete(id);

  // Get confirmation of the request.
  const result = await request;
  console.log('result.value', result);
  return result?.value;
};

// Start the database.
initdb();
