import React from 'react';

export default (props) => {

    const [formData, setFormData] = React.useState('');

    const handleChange = (event) => {
        setFormData({ ...formData, [event.currentTarget.name]: event.currentTarget.value });
    };


    return (
        <div className="formContainer">
            <h1>Reverse Your Interger</h1>
            <form onSubmit={(event) => {
                event.preventDefault();
                props.createAccount(formData)
            }}>
                <label htmlFor="integer">Integer:</label>
                <input
                    type="text"
                    name="integer"
                    value={formData.integer}
                    onChange={handleChange}    
                />
                <input className="submit" type="submit" value="Submit"/>
            </form>
        </div>
    );
};