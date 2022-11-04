import mongoose from "mongoose";

const MSchema = new mongoose.Schema({
  _id: String,
  name: String,
  ts: Number,
  unit: String,
  value: String,
});

const serviceSchema = new mongoose.Schema({
  _id: String,
  mac: {
    type: String,
    unique: true,
  },
  email: String,
  M15: MSchema,
  M16: MSchema,
  M17: MSchema,
});

export const Service = mongoose.model("Service", serviceSchema);
