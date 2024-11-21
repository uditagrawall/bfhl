import React, { useState } from 'react';
import InputForm from './components/InputForm';
import ResponseDisplay from './components/ResponseDisplay';
import './App.css';

function App() {
    const [response, setResponse] = useState(null);

    return (
        <div className="App">
            <h1>BFHL Frontend</h1>
            <InputForm setResponse={setResponse} />
            {response && <ResponseDisplay response={response} />}
        </div>
    );
}

export default App;
