const express = require('express');
const router = express.Router();

const { getPeople, craetePerson, createPersonPostman, updatePerson, deletePerson } = require('../Controllers/prople');



// router.get('/', getPeople);

// router.post('/', craetePerson);

// router.post('/postman', createPersonPostman);

// router.put('/:id', updatePerson);

// router.delete('/:id', deletePerson);


// YOU CAN AS WELL USE THE MOTHOD CHAINING TO SET UP THE ROUTER.
router.route('/').get(getPeople).post(craetePerson);

router.route('/postman').post(createPersonPostman)

router.route('/:id').put(updatePerson).delete(deletePerson)

module.exports = router;