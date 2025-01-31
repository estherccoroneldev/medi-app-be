import {mongoose} from 'mongoose';

const Schema = mongoose.Schema;

const doctorSchema = new Schema({
    // id: { // id is not required because it is automatically generated
    //     type: String,
    //     required: [true, "Doctor ID is required"]
    // }, 
    name: {
        type: String,
        required: [true, "Doctor Name is required"]
    },
    email: {
        type: String,
        required: [true, "Doctor Email is required"],
        unique: true
    },
    phone: {
        type: String,
        required: [true, "Doctor Phone is required"]
    },
    specialization: {
        type: String,
        required: [true, "Doctor Specialization is required"]
    },
    login: {
        type: String,
        required: [true, "Doctor Login is required"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Doctor Password is required"]
    },
    registration: { // registration number 
        type: String,
        required: [true, "Doctor Registration is required"],
        unique: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
})

const Doctor = mongoose.model("Doctor", doctorSchema);

export default Doctor;