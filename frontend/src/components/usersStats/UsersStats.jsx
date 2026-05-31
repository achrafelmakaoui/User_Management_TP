import React, { useEffect, useState } from 'react'
import "./UsersStats.css"
import axios from 'axios';

const UsersStats = () => {
    const [stats, setStats] = useState({
        totalUsers: 0,
        totalAdmins: 0,
        totalRegularUsers: 0,
    });

    useEffect(() => {
        const fetchUsersStats = async () => {
        try {
            const res = await axios.get("http://localhost:5000/users");

            const users = res.data;

            const totalUsers = users.length;
            const totalAdmins = users.filter((user) => user.isAdmin).length;
            const totalRegularUsers = users.filter((user) => !user.isAdmin).length;

            setStats({
                totalUsers,
                totalAdmins,
                totalRegularUsers,
            });
        } 
        catch (err) {
            console.error("Error fetching stats:", err);
        }
        };

        fetchUsersStats();
    }, []);

    return (
        <div className='stateBanner'>
            <div className='stateCard'>
                <span>Total Users</span>
                <h3>{stats.totalUsers}</h3>
            </div>
            <div className='stateCard'>
                <span>Total Admin</span>
                <h3>{stats.totalAdmins}</h3>
            </div>
            <div className='stateCard'>
                <span>Total Regular Users</span>
                <h3>{stats.totalRegularUsers}</h3>
            </div>
        </div>
    )
}

export default UsersStats