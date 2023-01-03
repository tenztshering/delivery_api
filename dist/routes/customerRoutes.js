"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var _a = require('../controllers/customerController'), createCustomer = _a.createCustomer, getCustomer = _a.getCustomer, getCustomers = _a.getCustomers, deleteCustomer = _a.deleteCustomer, updateCustomer = _a.updateCustomer;
var router = (0, express_1.Router)();
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
exports.default = router;
