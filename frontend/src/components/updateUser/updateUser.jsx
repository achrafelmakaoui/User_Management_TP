import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './UpdateUser.css'

const UpdateUser = () => {
    const { id } = useParams();

    const [formData, setFormData] = useState({
        nomComplet: '',
        email: '',
        password: ''
    });
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await fetch(`http://localhost:5000/users/find/${id}`);
                const data = await res.json();

                if (res.ok) {
                    setFormData({
                        nomComplet: data.nomComplet || '',
                        email: data.email || '',
                        password: ''
                    });
                } 
                else {
                    console.log(data.message || "User not found");
                }
            } 
            catch (err) {
                console.error(err);
            }
        };

        fetchUser();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const payload = { ...formData };

            if (!payload.password) {
                delete payload.password;
            }

            const res = await fetch(`http://localhost:5000/users/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            const data = await res.json();

            console.log("User updated successfully!");
            console.log("Updated user:", data);

            navigate("/")
        } 
        catch (err) {
            console.error(err);
        }
    };

    return (
        <form className='updateUserBanner' onSubmit={handleSubmit}>
            <div className='updateUserContent'>
                <h2>Update User</h2>
                <div className='bannerForm'>
                    <div className='formRow'>
                        <div className='formInput'>
                            <label>Nom Complet</label>
                            <input
                                type='text'
                                name="nomComplet"
                                value={formData.nomComplet}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='formInput'>
                            <label>Email Address</label>
                            <input
                                type='text'
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
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
                                placeholder='Leave empty to keep current password'
                            />
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