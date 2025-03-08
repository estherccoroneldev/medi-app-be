import express from "express";
import PatientService from "../services/PatientService.js";

let router = express.Router();

router.get("/patients", async (req, res) => {
  try {
    const patients = await PatientService.getAllPatients();
    res.send(patients);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.get("/patients/:id", async (req, res) => {
  // get patient by id
  try {
    const patient = await PatientService.getPatientById(req.params.id);
    res.send(patient);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.post("/patient", async (req, res) => {
  // create patient
  try {
    const { name, email, phone, address, birthDarte } = req.body;
    const newPatient = await PatientService.savePatient({
      name,
      email,
      phone,
      address,
      birthDarte,
    });
    res.send(newPatient);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.put("/patient/:id", async (req, res) => {
  // update patient
  try {
    const { name, email, phone, address, birthDarte } = req.body;
    const updatedPatient = await PatientService.updatePatient(req.params.id, {
      name,
      email,
      phone,
      address,
      birthDarte,
    });
    res.send(updatedPatient);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.delete("/patient/:id", async (req, res) => {
  // delete patient
  try {
    const result = await PatientService.deletePatient(req.params.id);
    res.send(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

export default router;
