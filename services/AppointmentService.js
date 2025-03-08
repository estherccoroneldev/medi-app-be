import appointmentRepository from "../repositories/AppointmentRepository.js";

const getAllAppointments = async () => {
  return appointmentRepository.getAllAppointments();
};

const getAppointmentById = async (id) => {
  return appointmentRepository.getAppointmentById(id);
};

const saveAppointment = async (appointment) => {
  return appointmentRepository.saveAppointment(appointment);
};

const updateAppointment = async (id, appointment) => {
  return appointmentRepository.updateAppointment(id, appointment);
};

const deleteAppointment = async (id) => {
  return appointmentRepository.deleteAppointment(id);
};

const appointmentService = {
  getAllAppointments,
  getAppointmentById,
  saveAppointment,
  updateAppointment,
  deleteAppointment,
};

export default appointmentService;
