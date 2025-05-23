import { mongoose } from "mongoose";

const Schema = mongoose.Schema;

const prescriptionSchema = new Schema({
  date: {
    type: Date,
    default: Date.now,
    required: [true, "Prescription Date is required"],
  },
  appointmentId: {
    type: String,
    ref: "Appointment",
    required: [true, "Appointment ID is required"],
  },
  medicine: {
    type: String,
    required: [true, "Medicine is required"],
  },
  dosage: {
    type: String,
    required: [true, "Dosage is required"],
  },
  instructions: {
    type: String,
  },
  file: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const prescription = mongoose.model("Prescription", prescriptionSchema);

export default prescription;
