import React from 'react'
import './UsersPage.css'
import UsersStats from "../components/usersStats/UsersStats"
import UsersTable from "../components/usersTable/UsersTable"

const UsersPage = () => {
    return (
        <div className='userPage'>
            <div className='container'>
                <div className='header'>
                    <div className='headerContent'>
                        <span>User management</span>
                        <h2>Manage your application users and roles</h2>
                    </div>
                    <div className="headerBtn">
                        <button>Add user</button>
                    </div>
                </div>
                <UsersStats/>
                <UsersTable/>
            </div>
        </div>
    )
}

export default UsersPage