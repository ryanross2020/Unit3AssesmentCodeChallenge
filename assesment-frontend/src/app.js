import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main.js';;
import './css/style.css';

const App = (props) => {
    const [integers, setIntegers, char, setChar] = React.useState(null);

    const [editIntegers, setEditIntegers] = React.useState({
        
    });
    const [editChar, setEditChar] = React.useState({
        string:''
    });
    
    const blankInteger = {
        integer:''
    };
    const blankChar = {
        string:''
    };

    const getInfo = async () => {
        const response = await fetch('http://localhost:3000/assesment');
        const result = await response.json();
        console.log(result);
        setIntegers(result);
        setChar(result);
    };
    

    React.useEffect(() => {
        getInfo();
    }, []); 
    
    //handleCreate function
    const handleCreate = async (data) => {
        const response = await fetch (`${baseURL}/assesment`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        getInfo(); //Update list
    };
    
    //delete function
    const handleDelete = async (id) =>{
        const response = await fetch (`${baseURL}/assesment/${id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        getInfo();
    }

    const handleSelect = async (interger, char) => {
        setEditInteger(integer);
        setEditChar(char);
    };

    const handleEdit = async (data) => {
        const response = await fetch(
            `http://localhost:3000/assesment/${data._id}`,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            }
        );
        getInfo();
    };


    return (
        <>
           <Main />
        </>
    );
};

const target = document.getElementById('app');
ReactDOM.render(<App />, target);
