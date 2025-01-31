import prescriptionRepository from "../repositories/PrescriptionRepository.js";

const getAllAppointments = async () => {
    return prescriptionRepository.getAllPrescriptions();
}

const getPrescriptionById = async (id) => {
    return prescriptionRepository.getPrescriptionById(id);
}

const savePrescription = async (prescription) => {
    return prescriptionRepository.savePrescription(prescription);
}

const updatePrescription = async (id, prescription) => {
    return prescriptionRepository.updatePrescription(id, prescription);
}

const deletePrescription = async (id) => {
    return prescriptionRepository.deletePrescription(id);
}

const prescriptionService = {
    getAllAppointments,
    getPrescriptionById,
    savePrescription,
    updatePrescription,
    deletePrescription,
}

export default prescriptionService;