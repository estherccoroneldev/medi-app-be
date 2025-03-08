import express from "express";
import jwt from "jsonwebtoken";
import appointmentController from "./AppointmentController.js";
import doctorController from "./DoctorController.js";
import patientController from "./PatientController.js";
import prescriptionController from "./PrescriptionController.js";
import verifyToken from "../middleware/verifyToken.js";
import DoctorService from "../services/DoctorService.js";

let router = express.Router();

router.post("/login", async (req, res) => {
  const { login, password } = req.body;
  try {
    const doctor = await DoctorService.getDoctorByLogin(login);
    if (!doctor) {
      // return res.status(400).send('Doctor not found'); // alternative
      // throw new Error('Doctor not found'); // alternative
      return res.status(400).json({ message: "Doctor not found" });
    }

    const passwordValid = await bcrypt.compare(password, doctor.password);
    if (!passwordValid) {
      // return res.status(400).send('Invalid password'); // alternative
      // throw new Error('Invalid password'); // alternative
      return res.status(400).json({ message: "Invalid password" });
    }

    // const token = jwt.sign({ doctorId: doctor._id }, process.env.TOKEN_SECRET); // for production
    const token = jwt.sign({ doctorId: doctor._id }, "your-secret-key", {
      expiresIn: "1h",
    });
    res.status(200).json({ token });
    // res.status(200).header('Authorization', token).json({ token });
  } catch (error) {
    // res.status(500).send(error.message); // alternative
    res.status(500).json({ message: error.message });
  }
});

router.get("/", (_req, res) => {
  console.log("GET request received");
  res.status(200).json({ message: "GET request received" });
});

router.use("/", verifyToken, appointmentController);
router.use("/", verifyToken, doctorController);
router.use("/", verifyToken, patientController);
router.use("/", verifyToken, prescriptionController);

export default router;
