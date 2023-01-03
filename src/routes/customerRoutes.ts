import { Router } from 'express';
const {
  createCustomer,
  getCustomer,
  getCustomers,
  deleteCustomer,
  updateCustomer,
} = require('../controllers/customerController');

const router = Router();

//Get all Vehicles

router.get('/customers', getCustomers);
//Get a single vehicle
router.get('/customer:id', getCustomer);
//POST a new vehicle
router.post('/customer', createCustomer);
//DELETE  a vehicle
router.delete('/customer:id', deleteCustomer);

//UPDATE a vehicle
router.patch('/customer:id', updateCustomer);

export default router;
