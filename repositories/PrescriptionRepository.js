import Prescription from "../models/Prescription.js";

const getAllPrescriptions = async () => {
  try {
    return Prescription.find();
  } catch (error) {
    throw new Error(error);
  }
};

const getPrescriptionById = async (id) => {
  try {
    return Prescription.findById(id);
  } catch (error) {
    throw new Error(error);
  }
};

const savePrescription = async (prescription) => {
  try {
    const newPrescription = new Prescription(prescription);
    return newPrescription.save();
  } catch (error) {
    throw new Error(error);
  }
};

const updatePrescription = async (id, prescription) => {
  try {
    return Prescription.findByIdAndUpdate(id, prescription, { new: true });
  } catch (error) {
    throw new Error(error);
  }
};

const deletePrescription = async (id) => {
  try {
    return Prescription.findByIdAndDelete(id);
  } catch (error) {
    throw new Error(error);
  }
};

const prescriptionRepository = {
  getAllPrescriptions,
  getPrescriptionById,
  savePrescription,
  updatePrescription,
  deletePrescription,
};

export default prescriptionRepository;
