import doctorRepository from "../repositories/DoctorRepository.js";

const getAllDoctors = async () => {
  return doctorRepository.getAllDoctors();
};

const getDoctorById = async (id) => {
  return doctorRepository.getDoctorById(id);
};

const saveDoctor = async (doctor) => {
  return doctorRepository.saveDoctor(doctor);
};

const updateDoctor = async (id, doctor) => {
  return doctorRepository.updateDoctor(id, doctor);
};

const deleteDoctor = async (id) => {
  return doctorRepository.deleteDoctor(id);
};

const hashPassword = async (password) => {
  return doctorRepository.hashPassword(password);
};

const getDoctorByLogin = async (login) => {
  return doctorRepository.getDoctorByLogin(login);
};

const doctorService = {
  getAllDoctors,
  getDoctorById,
  saveDoctor,
  updateDoctor,
  deleteDoctor,
  hashPassword,
  getDoctorByLogin,
};

export default doctorService;
