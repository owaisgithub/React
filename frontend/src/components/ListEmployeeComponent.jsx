import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'
import { Link } from 'react-router-dom';

export default class ListEmployeeComponent extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            employees : []
        }

        this.updateEmployee = this.updateEmployee.bind(this)
    }

    componentDidMount() {
        EmployeeService.getEmployees()
        .then((res) => {
            this.setState({ employees : res.data })
        });
    }

    render() {
        return (
            <div>
                <h2 className='text-center'>Employees List</h2>
                <Link to='/add-employee' className='btn btn-primary'>Add Employee</Link>
                <table className='table table-striped table-border'>
                    <thead>
                        <tr>
                            <th>Employee First Name</th>
                            <th>Employee Last Name</th>
                            <th>Employee Email ID</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.employees.map(
                                employee => 
                                <tr key={employee.id}>
                                    <td>{ employee.firstName }</td>
                                    <td>{ employee.lastName }</td>
                                    <td>{ employee.emailId }</td>
                                    <td>
                                        <Link className="btn btn-info text-white"
                                            to={`/update-employee/${employee.id}`}
                                        >   
                                            Update
                                        </Link>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
