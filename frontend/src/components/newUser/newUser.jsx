import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './NewUser.css'

const NewUser = () => {
    const [formData, setFormData] = useState({
        nomComplet: '',
        email: '',
        password: '',
        isAdmin: false
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleRoleChange = (e) => {
        const value = e.target.value;

        setFormData((prev) => ({ ...prev, isAdmin: value === "true" }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('http://localhost:5000/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const data = await res.json();
            console.log("Created user:", data);
            navigate("/");
        } 
        catch (err) {
            console.error(err);
        }
    };
    return (
        <form className='newUserBanner' onSubmit={handleSubmit}>
            <div className='newUserContent'>
                <h2>Add User</h2>
                <div className='bannerForm'>
                    <div className='formRow'>
                        <div className='formInput'>
                            <label>Nom Complet</label>
                            <input
                                type='text'
                                name="nomComplet"
                                value={formData.nomComplet}
                                onChange={handleChange}
                                placeholder='Entrer Nom complet'
                            />
                        </div>
                        <div className='formInput'>
                            <label>Email Address</label>
                            <input
                                type='text'
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder='Entrer Email Address'
                            />
                        </div>
                    </div>
                    <div className='formRow'>
                        <div className='formInput'>
                            <label>Password</label>
                            <input
                                type='password'
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder='Entrer Password'
                            />
                        </div>
                        <div className='formInput'>
                            <label>Role</label>
                            <select onChange={handleRoleChange} value={formData.isAdmin}>
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