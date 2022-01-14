import React, { useState, useEffect } from 'react';
import Chart from "./chart";
import axios from "axios";
import { Container, Row, Col } from 'react-bootstrap';

const Converter = () => {

    const [inputText, setInputText] = useState("");
    const [filtered, setFiltered] = useState([]);
    const [converted, setConverted] = useState({});

    useEffect(() => {
    }, [converted])

    const handleChangeInput = (event) => {
        var inp = event.target.value;
        setInputText(inp);
        setFiltered([]);
        setConverted({});
        if (inp === "") {
            return;
        }

        const url = 'https://whispering-chamber-31613.herokuapp.com/top/';
        // const url = 'http://localhost:3001/top/';

        axios.get(url + inp)
            .then(res => {
                var arr = [];
                console.log(res.data);
                const regex = new RegExp(inp);
                for (let i = 0; i < res.data.length; i++) {
                    console.log(regex.test(String(res.data[i].english)));
                    if (regex.test(String(res.data[i].english))) {
                        arr.push(String(res.data[i].english));
                    } else if (regex.test(String(res.data[i].hindi))) {
                        arr.push(String(res.data[i].hindi));
                    } else if (regex.test(String(res.data[i].urdu))) {
                        arr.push(String(res.data[i].urdu));
                    } else if (regex.test(String(res.data[i].bengali))) {
                        arr.push(String(res.data[i].bengali));
                    } else if (regex.test(String(res.data[i].punjabi))) {
                        arr.push(String(res.data[i].punjabi));
                    } else if (regex.test(String(res.data[i].gujarati))) {
                        arr.push(String(res.data[i].gujarati));
                    } else if (regex.test(String(res.data[i].marathi))) {
                        arr.push(String(res.data[i].marathi));
                    } else if (regex.test(String(res.data[i].nepali))) {
                        arr.push(String(res.data[i].nepali));
                    }
                }
                setFiltered(arr);
            })
    };

    function unique(a) {
        return a.sort().filter(function (value, index, array) {
            return (index === 0) || (value !== array[index - 1]);
        });
    }

    const submitHandler = (e) => {
        const url = 'https://whispering-chamber-31613.herokuapp.com/search/';
        // const url = 'http://localhost:3001/search/';
        axios.get(url + inputText)
            .then(res => {
                if (res.data) {
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

        <Container fluid>
            <Row>
                <Col md={{ span: 4, offset: 3 }}>
                    <div className='row formRow'>
                        <div className='col'>
                            <input
                                type='text'
                                value={inputText}
                                className='form-control formInput'
                                placeholder='Place a word that you want to seach'
                                onChange={handleChangeInput}
                            ></input>
                        </div>
                    </div>
                </Col>
                <Col>
                    <button className='search-btn' type='submit' onClick={submitHandler} >
                        Search
                    </button>
                </Col>

            </Row>
            <Row>
                <Col md={{ span: 4, offset: 3 }}>
                    <ul className="list-group">
                        {unique(filtered).map(item => (
                            <li className="list-group-item" onClick={onclickHandler} data-category={item} key={item.id}>{item}</li>
                        ))}
                    </ul>
                </Col>

            </Row>
            <Row>
                <Col md={{ span: 10, offset: 1 }}>
                    <Chart converted={converted} />
                </Col>

            </Row>
        </Container>
    );
}

export default Converter;
