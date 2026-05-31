import React from 'react'
import "./UsersStats.css"

const UsersStats = ({ users }) => {
    const totalUsers = users.length;
    const totalAdmins = users.filter((user) => user.isAdmin).length;
    const totalRegularUsers = users.filter((user) => !user.isAdmin).length;

    return (
        <div className='stateBanner'>
            <div className='stateCard'>
                <span>Total Users</span>
                <h3>{totalUsers}</h3>
            </div>
            <div className='stateCard'>
                <span>Total Admin</span>
                <h3>{totalAdmins}</h3>
            </div>
            <div className='stateCard'>
                <span>Total Regular Users</span>
                <h3>{totalRegularUsers}</h3>
            </div>
        </div>
    )
}

export default UsersStats