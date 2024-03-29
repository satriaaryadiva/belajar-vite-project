import   { useState } from 'react';
import InputForm from '../input'; // Pastikan path ke komponen InputForm benar
import Button from '../Button/Button'; // Pastikan path ke komponen Button benar
import { Register } from '../../services/register.service'; // Pastikan path ke service Register benar

const FormRegister = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
        phoneNumber: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert("Password and confirm password do not match.");
            return;
        }

        Register(formData, (status, res) => {
            if (status) {
               alert("Registration successful:", res);

               e.preventDefault();
               window.location.href = "/login";
                // Redirect or perform any action upon successful registration
            } else {
                console.error("Registration failed:", res);
                // Handle registration error
            }
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <InputForm 
                label='Full Name'  
                type='text' 
                placeholder='Insert your full name' 
                name='fullName'
                value={formData.fullName}
                onChange={handleChange} />
            <InputForm 
                label='Email'  
                type='email' 
                placeholder='example@gmail.com' 
                name='email'
                value={formData.email}
                onChange={handleChange} />
            <InputForm
                label='Phone Number'
                type='text'
                placeholder='Insert your phone number'
                name='phoneNumber'
                value={formData.phoneNumber}
                onChange={handleChange}
            />
            <InputForm 
                label='Password'  
                type='password' 
                placeholder='******' 
                name='password'
                value={formData.password}
                onChange={handleChange} />
            <InputForm 
                label='Confirm Password'  
                type='password' 
                placeholder='Confirm your password' 
                name='confirmPassword'
                value={formData.confirmPassword}
                onChange={handleChange} />
            <Button type='submit' className='bg-blue-600 w-full'>Register</Button>
        </form>
    );
};

export default FormRegister;
