import React, { useState } from 'react';

function ContactForm() {
    const [fromState, setFromState] = useState({ name: '', email: '', message:'' });
    const { name, email, message } = fromState;

    function handleChange(e) {
        setFromState({...fromState, [e.target.name]: e.target.value })
    }
    // console.log(fromState);

    function handleSubmit(e) {
        e.preventDefault();
        console.log(fromState);
    }
    
    
    // make contact form
    return (
        <section>
            <h1>Contact me</h1>
            <form id='contact-form' onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='name'>Name:</label>
                    <input type='text' defaultValue={name} onChange={handleChange} name='name' />
                </div>

                <div>
                    <label htmlFor='email'>Email address:</label>
                    <input type='email' defaultValue={email} onChange={handleChange} name='email' />
                </div>

                <div>
                    <label htmlFor='message'>Message:</label>
                    <textarea name='message' defaultValue={message} onChange={handleChange} rows='5' />
                </div>

                <button type='submit'>Submit</button>
            </form>
        </section>
    )
}

export default ContactForm;