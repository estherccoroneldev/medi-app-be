import {mongoose} from 'mongoose';

const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
    date: {
        type: Date,
        required: [true, "Appointment Date is required"]
    },
    patientId: {
        type: String,
        // ref: "Patient",
        required: [true, "Patient ID is required"]
    },
    doctorId: {
        type: String,
        // ref: "Doctor",
        required: [true, "Doctor ID is required"]
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
})

const Appointment = mongoose.model("Appointment", appointmentSchema);

export default Appointment;