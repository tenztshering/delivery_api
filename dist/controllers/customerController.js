"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Customer_1 = __importDefault(require("../model/Customer"));
var mongoose = require('mongoose');
//get all customers
var getCustomers = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var customers;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, Customer_1.default.find({}).sort({ createdAt: -1 })];
            case 1:
                customers = _a.sent();
                res.status(200).json(customers);
                return [2 /*return*/];
        }
    });
}); };
//get a single customer
var getCustomer = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, customer;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                if (!mongoose.Types.ObjectId.isValid(id)) {
                    return [2 /*return*/, res.status(404).json({ error: 'no such customer' })];
                }
                return [4 /*yield*/, Customer_1.default.findById(id)];
            case 1:
                customer = _a.sent();
                if (!customer) {
                    return [2 /*return*/, res.status(404).json({ error: 'No such customer' })];
                }
                res.status(200).json(customer);
                return [2 /*return*/];
        }
    });
}); };
//create a new customer
var createCustomer = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, name, number, packageType, coordinates, remarks, status, emptyFields, customer, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, name = _a.name, number = _a.number, packageType = _a.packageType, coordinates = _a.coordinates, remarks = _a.remarks, status = _a.status;
                emptyFields = [];
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
                    return [2 /*return*/, res
                            .status(400)
                            .json({ error: 'Please fill in the fields', emptyFields: emptyFields })];
                }
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                return [4 /*yield*/, Customer_1.default.create({
                        name: name,
                        number: number,
                        packageType: packageType,
                        remarks: remarks,
                        coordinates: coordinates,
                    })];
            case 2:
                customer = _b.sent();
                res.status(200).json(customer);
                return [3 /*break*/, 4];
            case 3:
                error_1 = _b.sent();
                res.status(400).json({ error: error_1.message });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
//delete a single customer
var deleteCustomer = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, customer;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                if (!mongoose.Types.ObjectId.isValid(id)) {
                    return [2 /*return*/, res.status(404).json({ error: 'no such Customer' })];
                }
                return [4 /*yield*/, Customer_1.default.findOneAndDelete({ _id: id })];
            case 1:
                customer = _a.sent();
                if (!customer) {
                    return [2 /*return*/, res.status(404).json({ error: 'No such customer' })];
                }
                res.status(200).json(customer);
                return [2 /*return*/];
        }
    });
}); };
//update a customer
var updateCustomer = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, customer;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                if (!mongoose.Types.ObjectId.isValid(id)) {
                    return [2 /*return*/, res.status(404).json({ error: 'no such customer' })];
                }
                return [4 /*yield*/, Customer_1.default.findOneAndUpdate({ _id: id }, __assign({}, req.body))];
            case 1:
                customer = _a.sent();
                if (!customer) {
                    return [2 /*return*/, res.status(404).json({ error: 'No such customer' })];
                }
                res.status(200).json(customer);
                return [2 /*return*/];
        }
    });
}); };
module.exports = {
    createCustomer: createCustomer,
    getCustomer: getCustomer,
    getCustomers: getCustomers,
    deleteCustomer: deleteCustomer,
    updateCustomer: updateCustomer,
};
