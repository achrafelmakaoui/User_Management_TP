import React from 'react'
import "./UsersTable.css"
import { Link } from 'react-router-dom';

const UsersTable = ({ users, onDelete }) => {
    const formatDate = (dateStr) => {
        return new Date(dateStr).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
        });
    };

    return (
        <div className='tableBanner'>
            <table className="usersTable">
                <thead>
                    <tr>
                        <th>User</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Created At</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user._id}>
                            <td>{user.nomComplet}</td>
                            <td>{user.email}</td>
                            <td className={`role ${user.isAdmin ? "admin" : "user"}`}>
                                <span>{user.isAdmin ? "Admin" : "User"}</span>
                            </td>
                            <td>{formatDate(user.createdAt)}</td>
                            <td>
                            <div className="actionBtns">
                                <button className="actionDelete" onClick={() => onDelete(user._id)}>🗑️</button>
                                <Link to={`/updateUser/${user._id}`}className="actionUpdate">✏️</Link>
                            </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default UsersTable