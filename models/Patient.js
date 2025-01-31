import {mongoose} from 'mongoose';

const Schema = mongoose.Schema;

const patientSchema = new Schema({
    name: {
        type: String,
        required: [true, "Patient Name is required"]
    },
    email: {
        type: String,
        required: [true, "Patient Email is required"],
        unique: true
    },
    phone: {
        type: String,
        required: [true, "Patient Phone is required"]
    },
    birthDate: {
        type: Date,
        required: [true, "Patient Birthdate is required"]
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
});

const patient = mongoose.model("Patient", patientSchema);

export default patient;
