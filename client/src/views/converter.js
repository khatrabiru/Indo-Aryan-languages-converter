import React, { useState, useEffect } from 'react';
import Chart from "./chart";
import axios from "axios";

import { Input, Button } from 'antd';
import InternalPreviewGroup from 'antd/lib/image/PreviewGroup';

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
            })
    };

    const resetHandler = (e) => {
        setInputText("")
        setConverted({})
        setFiltered([]);
    }

    return (
        <div class="inputField">
            <Search value={inputText} placeholder="Place a English word" onChange={handleChangeInput} enterButton onSearch={submitHandler} required />
            <Button onClick={resetHandler}>Reset</Button>
            <ul class="list-group">
                {filtered.map(item => (
                    <li class="list-group-item" onClick={() => setInputText(item)} data-category={item} key={item}>{item}</li>
                ))}
            </ul>

            <Chart converted={converted} />
        </div>
    );
}

export default Converter;
