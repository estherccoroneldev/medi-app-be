import express from 'express';
import AppointmentService from '../services/AppointmentService.js';

let router = express.Router();

router.get('/appointments', async (req, res) => { // get all appointments
   try {
        const appointments = await AppointmentService.getAllAppointments();
        res.send(appointments);
   } catch (error) {
        res.status(500).send(error.message);
   }
});

router.get('/appointments/:id', async (req, res) => { // get appointment by id
    try {
        const appointment = await AppointmentService.getAppointmentById(req.params.id);
        res.send(appointment);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

router.post('/appointment', async (req, res) => { // create appointment
    try {
        const {doctorId, date, patientId} = req.body;
        const newAppointment = await AppointmentService.saveAppointment({doctorId, date, patientId});

        res.send(newAppointment);
    }catch (error) {
        res.status(500).send(error.message);
    }
})

router.put('/appointment/:id', async (req, res) => { // update appointment
    try {
        const {doctorId, date, patientId} = req.body;
        const updatedAppointment = await AppointmentService.updateAppointment(req.params.id, {doctorId, date, patientId});

        res.send(updatedAppointment);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

router.delete('/appointment/:id', async (req, res) => { // delete appointment
    try {
        const result = await AppointmentService.deleteAppointment(req.params.id);
        res.send(result);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

export default router;