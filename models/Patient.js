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
        required: [true, "Patient Phone is required"],
        validate: {
            validator: function(v) {
                return /\d{2} 9\d{4}-\d{4}/.test(v)
            },
            message: (props) => `${props.value} This is not a valid phone value. Please, use the following format 99 91234-4567`
        }
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
