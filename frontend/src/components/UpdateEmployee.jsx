import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import EmployeeService from '../services/EmployeeService'

function UpdateEmployee(props) {
    const {id} = useParams()
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [emailId, setEmailId] = useState('')

    const [data, setData] = useState({})

    const navigate = useNavigate()

    useEffect(() => {
        EmployeeService.getEmployee(id)
            .then(res => {
                setFirstName(res.data.firstName)
                setLastName(res.data.lastName)
                setEmailId(res.data.emailId)
            })
            .catch(err => {
                console.log("Error:\n", err)
            })
    }, [])

    const changeFirstName = (e) => {
        setFirstName(e.target.value)
    }

    const changeLastName = (e) => {
        setLastName(e.target.value)
    }

    const changeEmailId = (e) => {
        setEmailId(e.target.value)
    }

    const upadteEmployee = (e) => {
        e.preventDefault()
        const data = {
            firstName : firstName,
            lastName : lastName,
            emailId : emailId
        }
        console.log(data)
        EmployeeService.updateEmployee(data, id)
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
                        <button className='btn btn-success' onClick={upadteEmployee}>Save</button>
                    </div>
                    <div className='col-2'>
                        <Link className='btn btn-danger' to="/">Cancel</Link>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default UpdateEmployee