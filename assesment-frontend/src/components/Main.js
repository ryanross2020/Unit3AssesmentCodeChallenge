import React from 'react';
import ReactDOM from 'react-dom';
import Interger from './IntegerForm';
import Char from './CharForm';

export default (props) => {
    return (
        <>
            <div className="container">
                <ul>
                    {props.integer.map((integer, index) => {
                        return (
                            <li key={index} className="items">
                                <h2>{integer}</h2>
                            </li>
                        )
                    })}
                </ul>
                <Interger />
            </div>
            <div className="container">
                <ul>
                    {props.char.map((char, index) => {
                        return (
                            <li key={index} className="items">
                                <h2>{char}</h2>
                            </li>
                        )
                    })}
                </ul>
                <Char />
            </div>
        </>
    );
};
