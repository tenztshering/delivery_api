"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var UserSchema = new mongoose_1.Schema({
    name: { type: String },
    number: { type: Number, unique: true },
    packageType: { type: String },
    remarks: { type: String },
    coordinates: { type: Object },
});
exports.default = (0, mongoose_1.model)('Package', UserSchema);
