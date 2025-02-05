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
        required: [true, "Patient ID is required"],
        validate: {
            validator: function(v){
                const id = new mongoose.Types.ObjectId(v);
                return Doctor.exists({_id: id})
            },
            message: props => `PatientID ${props.value} not found.`
        }
    },
    doctorId: {
        type: String,
        // ref: "Doctor",
        required: [true, "Doctor ID is required"],
        validate: {
            validator: function(v){
                const id = new mongoose.Types.ObjectId(v);
                return Doctor.exists({_id: id})
            },
            message: props => `DoctorID ${props.value} not found.`
        }
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
})

const Appointment = mongoose.model("Appointment", appointmentSchema);

export default Appointment;