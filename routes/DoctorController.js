import express from "express";
import DoctorService from "../services/DoctorService.js";
import Appointment from "../models/Appointment.js";

let router = express.Router();

router.get("/doctors", async (req, res) => {
  // get all doctors
  try {
    const doctors = await DoctorService.getAllDoctors();
    res.send(doctors);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.get("/doctors/:id", async (req, res) => {
  // get doctor by id
  try {
    const doctor = await DoctorService.getDoctorById(req.params.id);
    res.send(doctor);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.post("/doctor", async (req, res) => {
  // create doctor
  const { name, login, password, specialization, registration, phone } =
    req.body;
  try {
    const hashedPassword = await DoctorService.hashPassword(password);
    const newDoctor = await DoctorService.saveDoctor({
      name,
      specialization,
      registration,
      login,
      password: hashedPassword,
      phone,
    });
    res.status(201).send(newDoctor);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.put("/doctor/:id", async (req, res) => {
  // update doctor
  try {
    const { name, specialization, registration, phone } = req.body;
    const updatedDoctor = await DoctorService.updateDoctor(req.params.id, {
      name,
      specialization,
      registration,
      phone,
    });

    res.send(updatedDoctor);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.delete("/doctor/:id", async (req, res) => {
  // delete doctor
  try {
    const result = await DoctorService.deleteDoctor(req.params.id);
    res.send(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

export default router;
