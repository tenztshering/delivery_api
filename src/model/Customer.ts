import { Schema, model, Document } from 'mongoose';

export interface IPackage extends Document {
  name: string;
  number: number;
  packageType: string;
  remarks: string;
  coordinates: object;
  status: boolean;
}

const CustomerSchema: Schema = new Schema({
  name: { type: String },
  number: { type: Number, unique: true },
  packageType: { type: String },
  remarks: { type: String },
  coordinates: { type: Object },
  status: { type: Boolean, default: true },
});

export default model<IPackage>('Customer', CustomerSchema);
// module.exports = mongoose.model<IPackage>('Customer', CustomerSchema);
