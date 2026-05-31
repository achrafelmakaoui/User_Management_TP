import React from 'react'
import "./UsersTable.css"

const usersTable = () => {
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
                <tr>
                    <td>Achraf El Makoui</td>
                    <td>elmakaouiachraf@gmail.com</td>
                    <td className="role admin">
                        <span>Admin</span>
                    </td>
                    <td>12/04/2026</td>
                    <td>
                      <div className='actionBtns'>
                          <button className='actionDelete'>🗑️</button>
                          <button className='actionUpdate'>✏️</button>
                      </div>
                    </td>
                </tr>
                <tr>
                    <td>Achraf El Makoui</td>
                    <td>elmakaouiachraf@gmail.com</td>
                    <td className="role user">
                        <span>User</span>
                    </td>
                    <td>12/04/2026</td>
                    <td>
                      <div className='actionBtns'>
                          <button className='actionDelete'>🗑️</button>
                          <button className='actionUpdate'>✏️</button>
                      </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default usersTable