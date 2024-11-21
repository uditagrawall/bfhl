import React, { useState } from 'react';
import axios from '../services/api';

function InputForm({ setResponse }) {
    const [input, setInput] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const parsedInput = JSON.parse(input);
            const { data } = await axios.post('/bfhl', parsedInput);
            setResponse(data);
            setError('');
        } catch (err) {
            setError('Invalid JSON or API error.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder='Enter JSON input here'
            />
            <button type="submit">Submit</button>
            {error && <p className="error">{error}</p>}
        </form>
    );
}

export default InputForm;
