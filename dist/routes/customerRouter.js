"use strict";
var express = require('express');
var _a = require('../controllers/customerController'), createCustomer = _a.createCustomer, getCustomer = _a.getCustomer, getCustomers = _a.getCustomers, deleteCustomer = _a.deleteCustomer, updateCustomer = _a.updateCustomer;
var router = express.Router();
//Get all Vehicles
router.get('/', getCustomers);
//Get a single vehicle
router.get('/:id', getCustomer);
//POST a new vehicle
router.post('/', createCustomer);
//DELETE  a vehicle
router.delete('/:id', deleteCustomer);
//UPDATE a vehicle
router.patch('/:id', updateCustomer);
module.exports = router;
