import React from 'react'
import './NewUser.css'

const NewUser = () => {
    return (
        <form className='newUserBanner'>
            <div className='newUserContent'>
                <h2>Add User</h2>
                <div className='bannerForm'>
                    <div className='formRow'>
                        <div className='formInput'>
                            <label>Nom Complet</label>
                            <input type='text' placeholder='Entrer Nom complet'/>
                        </div>
                        <div className='formInput'>
                            <label>Email Address</label>
                            <input type='text' placeholder='Entrer Email Address'/>
                        </div>
                    </div>
                    <div className='formRow'>
                        <div className='formInput'>
                            <label>Password</label>
                            <input type='password' placeholder='Entrer Password'/>
                        </div>
                        <div className='formInput'>
                            <label>Role</label>
                            <select>
                                <option>Select User Role</option>
                                <option value="false">User</option>
                                <option value="true">Admin</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className='btnSubmit'>
                    <button type="submit">Add User</button>
                </div>
            </div>
        </form>
    )
}

export default NewUser