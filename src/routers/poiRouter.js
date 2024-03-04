import express from 'express'
import listAll from '../controllers/poi/listAll.js';
import getById from '../controllers/poi/getById.js';
import create from '../controllers/poi/create.js';
import update from '../controllers/poi/update.js';
import remove from '../controllers/poi/remove.js';
const router = express.Router();

// Rotas do poi /poi

router.get('/', listAll)

router.get('/:id', getById)

router.post('/', create)

router.put('/:id', update)

router.delete('/:id', remove)

export default router