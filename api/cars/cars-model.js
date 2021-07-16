const getAll = () => {
  return db('cars');
}

const getById = () => {
  return db('cars')
  .where({ id })
  .first();
}

const create = () => {
  const newlyCreatedCar = getById(id)
  return newlyCreatedCar
}


// Write the following db access functions inside `api/cars/cars-model.js` using Knex:

// - `getAll` resolves to an array of car records (or an empty array)
// - `getById` resolves to a car record by the given id
// - `create` resolves to the newly created car record