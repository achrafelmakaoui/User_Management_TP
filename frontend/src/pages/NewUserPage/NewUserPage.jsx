import React from 'react'
import './NewUserPage.css'
import { Link } from 'react-router-dom'
import NewUser from '../../components/newUser/NewUser'

const NewUserPage = () => {
    return (
        <div className='newUserPage'>
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
                <NewUser/>
            </div>
        </div>
    )
}

export default NewUserPage