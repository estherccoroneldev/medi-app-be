import express from 'express';
import multer from 'multer';
import PrescriptionService from '../services/PrescriptionService.js';

let router = express.Router();

const storage = multer.diskStorage({
    destination: function (_req, _file, callback) {
        callback(null, './prescriptions')
    },
    filename: function (_req, file, callback) {
        callback(null, file.originalname)
    }
});

const upload = multer({ storage: storage });

router.post('/uploadPrescription/:id', upload.single('prescription'), async (req, res) => { // upload prescription
    try {
        const { id } = req.params;
        const prescription = await PrescriptionService.getPrescriptionById(id);

        const file = "./prescriptions/" + req.file.originalname;
        prescription = await PrescriptionService.updatePrescription(id, { file });
        
        res.status(200).send(prescription);
    } catch (error) {
        res.status(500).send(error.message);
    }
})


router.get('/prescriptions', async (req, res) => { // get all prescriptions
    try {
        const prescriptions = await PrescriptionService.getAllPrescriptions();
        res.send(prescriptions);
    } catch (error) {
        res.status(500).send(error.message);
    }
})

router.get('/prescriptions/:id', async (req, res) => { // get prescription by id
    try {
        const prescription = await PrescriptionService.getPrescriptionById(req.params.id);
        res.send(prescription);
    } catch (error) {
        res.status(500).send(error.message);
    }
})

router.post('/prescription', async (req, res) => { // create prescription
    try {
        const {doctorId, patientId, prescription} = req.body;
        const newPrescription = await PrescriptionService.savePrescription({doctorId, patientId, prescription});

        res.send(newPrescription);
    } catch (error) {
        res.status(500).send(error.message);
    }
})

router.put('/prescription/:id', async (req, res) => { // update prescription
    try {
        const {doctorId, patientId, prescription} = req.body;
        const updatedPrescription = await PrescriptionService.updatePrescription(req.params.id, {doctorId, patientId, prescription});
        res.send(updatedPrescription);
    } catch (error) {
        res.status(500).send(error.message);    
    }
})

router.delete('/prescription/:id', async (req, res) => { // delete prescription
    try {
        const deletedPrescription = await PrescriptionService.deletePrescription(req.params.id);
        res.send(deletedPrescription);
    } catch (error) {
        res.status(500).send(error.message);
    }
})

router.get('/generatePrescription/:id', async (req, res) => { // generate prescription
    try {
        const prescription = await PrescriptionService.getPrescriptionById(req.params.id);
        const generatedPrescription = await PrescriptionService.generatePrescriptionFile(prescription);
        res.send(generatedPrescription);
    } catch (error) {
        res.status(500).send(error.message);
    }
})

export default router;