import express from 'express';
import appointmentController from './AppointmentController.js';
import doctorController from './DoctorController.js';
import patientController from './PatientController.js';
import prescriptionController from './PrescriptionController.js';

let router = express.Router();

router.get('/', (_req, res) => {
    console.log('GET request received');
    res.status(200).json({ message: 'GET request received' });
});

router.use('/', appointmentController);
router.use('/', doctorController);
router.use('/', patientController);
router.use('/', prescriptionController);

export default router;