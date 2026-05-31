import React from 'react'
import './UpdateUserPage.css'
import { Link } from 'react-router-dom'
import UpdateUser from '../../components/updateUser/UpdateUser'

const UpdateUserPage = () => {
    return (
        <div className='updateUserPage'>
            <div className='container'>
                <div className='header'>
                    <div className='headerContent'>
                        <span>User management</span>
                        <h2>Manage your application users and roles</h2>
                    </div>
                    <div className="headerBtn">
                        <Link to="/">User List</Link>
                    </div>
                </div>
                <UpdateUser/>
            </div>
        </div>
    )
}

export default UpdateUserPage