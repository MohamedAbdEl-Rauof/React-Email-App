import React from 'react';
import './index.css';  
import EmailForm from './EmailForm';


function App() {
    return (

        <div className="App min-h-screen flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold mb-10">React Email App</h1>


            <EmailForm />
        </div>
    );
}


export default App;
