import axios from "axios";
import EmployeeComponent from "../components/EmployeeComponent";

const BASE_URL = "https://ems-backend.azurewebsites.net/api/employees";

export const listEmployees = () => axios.get(BASE_URL);

export const addNewEmployee = (employee) => axios.post(`${BASE_URL}/new-employee`, employee);

export const getEmployee = (id) => axios.get(`${BASE_URL}/${id}`);

export const updateEmployee = (employeeId, employee) => axios.put(`${BASE_URL}/${employeeId}`, employee);

export const deleteEmployee = (employeeId) => axios.delete(BASE_URL + '/' + employeeId);