import React, { useRef, useState } from 'react';

function Login (){
    const formRef = useRef(null);
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(formRef.current);
        alert(`Name: ${formData.get('name')}`);
        console.log(`Name: ${formData.get('name')}`);
    };
    return(
        <form ref={formRef} onSubmit={handleSubmit}>
            <label className='col-lg-4'>Name:
                <input type='text' placeholder='Please input your name' name='name' className='form-control' ></input>
            </label>
            <button type='submit' className='btn btn-danger'>Login</button>
        </form>
        
    )
}
 export default Login;