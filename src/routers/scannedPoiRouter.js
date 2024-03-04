import express from 'express'
import listAll from '../controllers/scannedPoi/listAll.js';
import getById from '../controllers/scannedPoi/getById.js';
import create from '../controllers/scannedPoi/create.js';
import update from '../controllers/scannedPoi/update.js';
import remove from '../controllers/scannedPoi/remove.js';
const router = express.Router();

// Rotas do scannedPoi /scanned-poi

router.get('/', listAll)

router.get('/:id', getById)

router.post('/', create)

router.put('/:id', update)

router.delete('/:id', remove)

export default router