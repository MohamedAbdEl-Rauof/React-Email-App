import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const EmailForm = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');


    const sendEmail = (e) => {

        e.preventDefault();

        const templateParams = {
            from_name: name,
            from_email: email,
            message: message,
        };


        emailjs.send('service_epqgw1w', 'template_2fuqx7u', templateParams, 'aDEejrGXwbo4CekBo')

            .then((result) => {
                console.log(result.text);
                alert('Email sent successfully!');
            },
            
            (error) => {

                console.log(error.text);
                alert('Failed to send email.');
            });


        setName('');
        setEmail('');
        setMessage('');

    };

    return (
        <form onSubmit={sendEmail} className="w-full max-w-lg p-8 bg-white shadow-lg ">

            <div className="mb-6">

                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
                <input

                    id="name"
                    type="text"
                    value={name}
                    
                    onChange={(e) => setName(e.target.value)}
                    required

                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"

                />
            </div>


            <div className="mb-6">

                <label className=" text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
                <input
                    id="email"
                    type="email"
                    value={email}

                    onChange={(e) => setEmail(e.target.value)}
                    required

                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"

                />

            </div>


            <div className="mb-6">
                <label className=" text-gray-700 text-sm font-bold mb-2" htmlFor="message">Message</label>
                <textarea

                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}

                    required

                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"

                >
                    
                </textarea>


            </div>


            <button type="submit" className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Send Email</button>
        
        
        </form>
    );
};

export default EmailForm;
