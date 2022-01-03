import React, { useState, useEffect } from 'react';
import Chart from "./chart";
import axios from "axios";

import { Input, Button } from 'antd';

const Converter = () => {

    const { Search } = Input;

    const [inputText, setInputText] = useState("");
    const [filtered, setFiltered] = useState([]);
    const [converted, setConverted] = useState({});

    useEffect(() => {
    }, converted)

    const handleChangeInput = event => {
        setInputText(event.target.value);
        handleChangeFiltered();
    };
    const handleChangeFiltered = () => {
        if (inputText === "") {
            setFiltered([]);
        }
        else {
            axios.get('http://localhost:3001/top/' + inputText)
                .then(res => {
                    var arr = [];
                    for(let i = 0; i < res.data.length; i++) {
                        arr.push(String(res.data[i].english));
                    }
                    setFiltered(arr);
                })
        };
    };

    const submitHandler = (e) => {
        axios.get('http://localhost:3001/search/' + inputText)
            .then(res => {
                console.log(res.data);
                if(res.data) {
                    setConverted(res.data);
                } else {
                    setConverted({});
                }
            })
    };

    const resetHandler = (e) => {
        setInputText("")
        setConverted({})
        setFiltered([]);
    }

    return (
        <div className="App">
            <Search value={inputText} placeholder="Place a English word" onChange={handleChangeInput} enterButton onSearch={submitHandler} required />
            <Button onClick={resetHandler}>Reset</Button>
            <ul className="list-group">
                {filtered.map(item => (
                    <li className="list-group-item" onClick={() => setInputText(item)} data-category={item} key={item}>{item}</li>
                ))}
            </ul>

            <Chart converted={converted} />
        </div>
    );
}

export default Converter;
