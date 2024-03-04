import express from 'express'
import listAll from '../controllers/admin/listAll.js';
import getById from '../controllers/admin/getById.js';
import create from '../controllers/admin/create.js';
import update from '../controllers/admin/update.js';
import remove from '../controllers/admin/remove.js';
const router = express.Router();

// Rotas do admin /admin

router.get('/', listAll)

router.get('/:id', getById)

router.post('/', create)

router.put('/:id', update)

router.delete('/:id', remove)

export default router