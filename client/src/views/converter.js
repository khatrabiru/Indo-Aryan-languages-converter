import React, { useState, useEffect } from 'react';
import Chart from "./chart";
import axios from "axios";

import { Input } from 'antd';

const Converter = () => {

    const { Search } = Input;

    const [inputText, setInputText] = useState("");
    const [filtered, setFiltered] = useState([]);
    const [converted, setConverted] = useState({});

    useEffect(() => {
    }, converted)

    const handleChangeInput = (event) => {
        var inp = event.target.value;
        setInputText(inp);
        if(inp === "") {
            setFiltered([]);
            setConverted({});
            return;
        }

        axios.get('http://localhost:3001/top/' + inp)
            .then(res => {
                var arr = [];
                for(let i = 0; i < res.data.length; i++) {
                    arr.push(String(res.data[i].english));
                }
                setFiltered(arr);
            })
    };

    const submitHandler = (e) => {
        axios.get('http://localhost:3001/search/' + inputText)
            .then(res => {
                if(res.data) {
                    setConverted(res.data);
                } else {
                    setConverted({});
                }
                setFiltered([]);
            })
    };

    const onclickHandler = (event) => {
        setInputText(event.target.innerText);
        setFiltered([]);
    }

    return (
        <div className="inputField">
            <Search value={inputText} placeholder="Place a English word" onChange={handleChangeInput} enterButton="Search" onSearch={submitHandler} required />
            <ul className="list-group">
                {filtered.map(item => (
                    <li className="list-group-item" onClick={onclickHandler} data-category={item} key={item}>{item}</li>
                ))}
            </ul>

            <Chart converted={converted} />
        </div>
    );
}

export default Converter;
