import Patient from '../models/Patient.js';

const getAllPatients = async () => {
    try {
        return await Patient.find();
    } catch (error) {
        throw new Error(error);
    }
}

const getPatientById = async (id) => {
    try {
        return await Patient.findById(id);
    } catch (error) {
        throw new Error(error);
    }
}

const savePatient = async (patient) => {
    try {
        const newPatient = new Patient(patient);
        return await newPatient.save();
    } catch (error) {
        throw new Error(error);
    }
}


const updatePatient = async (id, patient) => {
    try {
        return await Patient.findByIdAndUpdate(id, patient, {new: true});       
    } catch (error) {
        throw new Error(error);
    }
}

const deletePatient = async (id) => {
    try {
        return await Patient.findByIdAndDelete(id);
    } catch (error) {
        throw new Error(error);
    }
}

const patientRepository = {
    getAllPatients,
    getPatientById,
    savePatient,
    updatePatient,
    deletePatient,
}

export default patientRepository;