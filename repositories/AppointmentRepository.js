import Appointment from "../models/Appointment.js";

const getAllAppointments = async () => {
  try {
    return await Appointment.find();
  } catch (error) {
    throw new Error(error);
  }
};

const getAppointmentById = async (id) => {
  try {
    return await Appointment.findById(id);
  } catch (error) {
    throw new Error(error);
  }
};

const saveAppointment = async (appointment) => {
  try {
    const newAppointment = new Appointment(appointment);
    return await newAppointment.save();

    // return await Appointment.create({date, doctorId, patientId}); // alternative
  } catch (error) {
    throw new Error(error);
  }
};

const updateAppointment = async (id, appointment) => {
  try {
    return await Appointment.findByIdAndUpdate(id, appointment, { new: true });
  } catch (error) {
    throw new Error(error);
  }
};

const deleteAppointment = async (id) => {
  try {
    return await Appointment.findByIdAndDelete(id);
  } catch (error) {
    throw new Error(error);
  }
};

const appointmentRepository = {
  getAllAppointments,
  getAppointmentById,
  saveAppointment,
  updateAppointment,
  deleteAppointment,
};

export default appointmentRepository;
