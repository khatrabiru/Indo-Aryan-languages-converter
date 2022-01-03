import React, { useState, useEffect } from 'react';
import Chart from "./chart";
import axios from "axios";

import { Input, Button } from 'antd';

const Converter = () => {

    const { Search } = Input;


    const [inputText, setInputText] = useState("");
    const [converted, setConverted] = useState([]);

    useEffect(() => {
    }, [converted])

    const handleChange = event => {
        setInputText(event.target.value);
    };
    const lowercased = inputText.toLowerCase();
    const filteredData = () => {
        if (inputText === "") return [];
        else {
            var cnt = 0;
            var arr = [];
            return arr;
        };
    };

    const submitHandler = (e) => {
        axios.get('')
            .then(res => {
                setConverted(res.data)
            })
    };

    const resetHandler = (e) => {
        setInputText("")
        setConverted([])
    }

    return (

        <div className="App">
            <Search value={inputText} placeholder="Place a English word" onChange={handleChange} enterButton onSearch={submitHandler} required />
            <Button onClick={resetHandler}>Reset</Button>
            <ul className="list-group">
                {filteredData().map(item => (
                    <li className="list-group-item" onClick={() => setInputText(item)} data-category={item} key={item}>{item}</li>
                ))}
            </ul>

            <Chart converted={converted} />
        </div>
    );
}

export default Converter;
