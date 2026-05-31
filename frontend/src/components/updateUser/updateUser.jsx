import React from 'react'
import './UpdateUser.css'

const UpdateUser = () => {
    return (
        <form className='updateUserBanner'>
            <div className='updateUserContent'>
                <h2>Update User</h2>
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
                    </div>
                </div>
                <div className='btnSubmit'>
                    <button type="submit">Update User</button>
                </div>
            </div>
        </form>
    )
}

export default UpdateUser