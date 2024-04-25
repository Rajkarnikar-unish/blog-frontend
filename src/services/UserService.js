import axios from "axios";
import EmployeeComponent from "../components/EmployeeComponent";

const BASE_URL = "http://localhost:8080/api";

// export const listEmployees = () => axios.get(BASE_URL+'auth/use');

export const listRoles = () => axios.get(`${BASE_URL}/role/all`);

export const loginUserAPI = (user) => axios({
    method: 'post',
    url: `${BASE_URL}/auth/login`,
    headers: {},
    data: user,
});

export const signUpUser = (user) => axios({
    method: 'post',
    url: `${BASE_URL}/auth/register`,
    headers: {},
    data: user,
});

export const getAllUser = () => axios({
    method: 'get',
    url: `{BASE_URL}/users/user-role?roleName=ROLE_USER`,
    headers: {},
});

export const addNewEmployee = (employee) => axios.post(`${BASE_URL}/new-employee`, employee);

export const getEmployee = (id) => axios.get(`${BASE_URL}/${id}`);

export const updateEmployee = (employeeId, employee) => axios.put(`${BASE_URL}/${employeeId}`, employee);

export const deleteEmployee = (employeeId) => axios.delete(BASE_URL + '/' + employeeId);