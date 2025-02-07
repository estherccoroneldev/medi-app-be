import prescriptionRepository from "../repositories/PrescriptionRepository.js";
import appointmentService from "./AppointmentService.js";
import doctorService from "./DoctorService.js";
import patientService from "./PatientService.js";
import PDFDocument from 'pdfkit';
import fs from 'fs';

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

const generatePrescriptionFile = async (prescription) => {
    const appointment = await appointmentService.getAppointmentById(prescription.appointmentId);
    const patient = await patientService.getPatientById(appointment.patientId);
    const doctor = await doctorService.getDoctorById(appointment.doctorId);
    const id = prescription._id;
    const recipe = "Medicine: " + prescription.medicine + "\n" + "Dosage: " + prescription.dosage + "\n" + "Instructions: " + prescription.instructions;
    const document = new PDFDocument({font: 'Courier'});
    const filePath = `./prescriptions/${id}.pdf`;

    document.pipe(fs.createWriteStream(filePath));
    document.fontSize(16).text('Patient Name:' + patient.name, {align: 'center'});
    document.fontSize(16).text('Doctor Name:' + doctor.name, {align: 'center'});
    document.fontSize(12).text(recipe);
    document.end();

    return prescription; // REVIEW LATER: should return the document path?
}

const prescriptionService = {
    getAllAppointments,
    getPrescriptionById,
    savePrescription,
    updatePrescription,
    deletePrescription,
    generatePrescriptionFile
}

export default prescriptionService;