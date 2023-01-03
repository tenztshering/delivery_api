import Customer from '../model/Customer';
const mongoose = require('mongoose');
import { RequestHandler } from 'express';

//get all customers
const getCustomers: RequestHandler = async (req, res) => {
  const customers = await Customer.find({}).sort({ createdAt: -1 });

  res.status(200).json(customers);
};

//get a single customer
const getCustomer: RequestHandler = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'no such customer' });
  }

  const customer = await Customer.findById(id);

  if (!customer) {
    return res.status(404).json({ error: 'No such customer' });
  }

  res.status(200).json(customer);
};

//create a new customer
const createCustomer: RequestHandler = async (req, res) => {
  const { name, number, packageType, coordinates, remarks, status } = req.body;
  let emptyFields = [];
  if (!name) {
    emptyFields.push('name');
  }
  if (!number) {
    emptyFields.push('number');
  }
  if (!packageType) {
    emptyFields.push('PackageType');
  }
  if (!remarks) {
    emptyFields.push('Remarks');
  }

  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: 'Please fill in the fields', emptyFields });
  }

  // add doc to db
  try {
    const customer = await Customer.create({
      name,
      number,
      packageType,
      remarks,
      coordinates,
    });
    res.status(200).json(customer);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

//delete a single customer
const deleteCustomer: RequestHandler = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'no such Customer' });
  }

  const customer = await Customer.findOneAndDelete({ _id: id });

  if (!customer) {
    return res.status(404).json({ error: 'No such customer' });
  }
  res.status(200).json(customer);
};

//update a customer
const updateCustomer: RequestHandler = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'no such customer' });
  }

  const customer = await Customer.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );
  if (!customer) {
    return res.status(404).json({ error: 'No such customer' });
  }
  res.status(200).json(customer);
};

module.exports = {
  createCustomer,
  getCustomer,
  getCustomers,
  deleteCustomer,
  updateCustomer,
};
