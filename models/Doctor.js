import {mongoose} from 'mongoose';

const Schema = mongoose.Schema;

const doctorSchema = new Schema({
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
        required: [true, "Doctor Phone is required"],
        validate: {
            validator: function(v) {
                return /\d{2} 9\d{4}-\d{4}/.test(v)
            },
            message: (props) => `${props.value} This is not a valid phone value. Please, use the following format 99 91234-4567`
        }
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