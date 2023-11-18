import React, { useState } from 'react'

import EmployeeService from '../services/EmployeeService'
import { Link, useNavigate } from 'react-router-dom'

function CreateEmployeeComponet() {
    const {data, setData} = useState({
        firstName : '',
        lastName : '',
        emailId : ''
    })

    const navigate = useNavigate()

    const changeInput = (e) => {
        const { name, value } = e.target

        setData({...data, [name]: value})
    }

    const addEmployee = (e) => {
        e.preventDefault()
        console.log('employee => ' + JSON.stringify(data))
        console.log(data)
        EmployeeService.createEmployee(data)
        .then((res) => {
            console.log(res.data)
            // this.props.history.push('/')
            navigate('/')
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (
        <div className='mt-5'>
            <h3 className='my-5 mx-5'>Add Employee</h3>
            <form>
                <input type="text" 
                    className='form-control'
                    value={data.firstName}
                    onChange={changeInput}
                    placeholder="First Name"
                />

                <input type="text" 
                    className='form-control'
                    value={data.lastName}
                    onChange={changeInput}
                    placeholder="Last Name"
                />

                <input type="text" 
                    className='form-control'
                    value={data.emailId}
                    onChange={changeInput}
                    placeholder="Email Id"
                />
                <div className='row mt-3'>
                    <div className='col-2'>
                        <button className='btn btn-success' onClick={addEmployee}>Save</button>
                    </div>
                    <div className='col-2'>
                        <Link className='btn btn-danger' to="/">Cancel</Link>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CreateEmployeeComponet
