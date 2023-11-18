import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import EmployeeService from '../services/EmployeeService'

function CreateEmployee() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [emailId, setEmailId] = useState('')

    const navigate = useNavigate()

    const changeFirstName = (e) => {
        // const {name, value} = e.target
        setFirstName(e.target.value)
    }

    const changeLastName = (e) => {
        // const {name, value} = e.target
        setLastName(e.target.value)
    }

    const changeEmailId = (e) => {
        // const {name, value} = e.target
        setEmailId(e.target.value)
    }

    const addEmployee = (e) => {
        e.preventDefault()
        const data = {
            firstName : firstName,
            lastName : lastName,
            emailId : emailId
        }
        console.log(data)
        EmployeeService.createEmployee(data)
        .then((res) => {
            console.log(res.data)
        })
        .catch(err => {
            console.log("Error: ", err)
        })
        navigate('/')
    }

    return (
        <div className='mt-5'>
            <h3 className='my-5 mx-5'>Add Employee</h3>
            <form>
                <input type='text'
                    className='form-control'
                    value={firstName}
                    onChange={changeFirstName}
                    placeholder='First Name'
                />

                <input type='text'
                    className='form-control'
                    value={lastName}
                    onChange={changeLastName}
                    placeholder='Last Name'
                />

                <input type='text'
                    className='form-control'
                    value={emailId}
                    onChange={changeEmailId}
                    placeholder='Email ID'
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

export default CreateEmployee