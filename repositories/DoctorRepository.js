import Doctor from '../models/Doctor.js';
import bcrypt from 'bcrypt';

const getAllDoctors = async () => { 
    try {
        return Doctor.find();
    } catch (error) {
        throw new Error(error);
    }
}

const getDoctorById = async (id) => {
    try {
        return Doctor.findById(id);
    } catch (error) {
        throw new Error(error);
    }
}

const saveDoctor = async (doctor) => {
    try {
        const newDoctor = new Doctor(doctor);
        return newDoctor.save();
    } catch (error) {
        throw new Error(error);
    }
}

const updateDoctor = async (id, doctor) => {
    try {
        return Doctor.findByIdAndUpdate(id, doctor, {new: true});
    } catch (error) {
        throw new Error(error);
    }
}

const deleteDoctor = async (id) => {
    try {
        return Doctor.findByIdAndDelete(id);
    } catch (error) {
        throw new Error(error);
    }
}

const hashPassword = async (password) => {
    return bcrypt.hash(password, 10);
}


const doctorRepository = {
    getAllDoctors,
    getDoctorById,
    saveDoctor,
    updateDoctor,
    deleteDoctor,
    hashPassword,
}

export default doctorRepository;