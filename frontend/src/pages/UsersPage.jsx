import React, { useEffect, useState } from 'react'
import './UsersPage.css'
import UsersStats from "../components/usersStats/UsersStats"
import UsersTable from "../components/usersTable/UsersTable"
import axios from 'axios'

const UsersPage = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await axios.get("http://localhost:5000/users");
                setUsers(res.data);
            } 
            catch (err) {
                console.error("Error fetching users:", err);
            }
            finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    if (loading) {
        return <p>Loading users...</p>;
    }

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
                <UsersStats users={users}/>
                <UsersTable users={users}/>
            </div>
        </div>
    )
}

export default UsersPage