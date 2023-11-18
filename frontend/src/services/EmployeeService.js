import axios from 'axios';

const url = "http://localhost:8080/api/v1/employees";

class EmployeeService {
    getEmployees() {
        return axios.get(url);
    }

    createEmployee(employee) {
        return axios.post(url, employee);
    }

    getEmployee(id) {
        const newUrl = url.concat(`/${id}`);
        return axios.get(newUrl);
    }

    updateEmployee(employee, id) {
        const newUrl = url.concat(`/${id}`);
        console.log(newUrl);
        return axios.put(newUrl, employee);
    }
}

export default new EmployeeService();