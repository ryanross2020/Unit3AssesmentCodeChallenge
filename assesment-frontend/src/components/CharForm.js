import React from 'react';

export default (props) => {

    const [formData, setFormData] = React.useState('');

    const handleChange = (event) => {
        setFormData({ ...formData, [event.currentTarget.name]: event.currentTarget.value });
    };


    return (
        <div className="formContainer">
            <h1>Return the most commonly used character in the 'string'</h1>
            <form onSubmit={(event) => {
                event.preventDefault();
                props.createAccount(formData)
            }}>
                <label htmlFor="string">String:</label>
                <input
                    type="text"
                    name="string"
                    value={formData.string}
                    onChange={handleChange}    
                />
                <input className="submit" type="submit" value="Submit"/>
            </form>
        </div>
    );
};