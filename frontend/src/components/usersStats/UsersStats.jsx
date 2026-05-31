import React from 'react'
import "./UsersStats.css"

const usersStats = () => {
    return (
        <div className='stateBanner'>
            <div className='stateCard'>
                <span>Total Users</span>
                <h3>2</h3>
            </div>
            <div className='stateCard'>
                <span>Total Admin</span>
                <h3>2</h3>
            </div>
            <div className='stateCard'>
                <span>Total Regular Users</span>
                <h3>2</h3>
            </div>
        </div>
    )
}

export default usersStats