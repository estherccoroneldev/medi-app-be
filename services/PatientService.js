import patientRepository from "../repositories/PatientRepository.js";

const getAllPatients = async () => {
    return await patientRepository.getAllPatients();
}

const getPatientById = async (id) => {
    return await patientRepository.getPatientById(id);
}

const savePatient = async (patient) => {
    return await patientRepository.savePatient(patient);
}

const updatePatient = async (id, patient) => {
    return await patientRepository.updatePatient(id, patient);
}

const deletePatient = async (id) => {
    return await patientRepository.deletePatient(id);
}

const patientService = {
    getAllPatients,
    getPatientById,
    savePatient,
    updatePatient,
    deletePatient,
}

export default patientService;