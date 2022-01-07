import React, { useState, useEffect } from 'react';
import Chart from "./chart";
import axios from "axios";
import { Container, Form, Row, Col, Button } from 'react-bootstrap';

const Converter = () => {

    const [inputText, setInputText] = useState("");
    const [filtered, setFiltered] = useState([]);
    const [converted, setConverted] = useState({});

    useEffect(() => {
    }, converted)

    const handleChangeInput = (event) => {
        var inp = event.target.value;
        setInputText(inp);
        if (inp === "") {
            setFiltered([]);
            setConverted({});
            return;
        }

        axios.get('https://whispering-chamber-31613.herokuapp.com/top/' + inp)
            .then(res => {
                var arr = [];
                for (let i = 0; i < res.data.length; i++) {
                    arr.push(String(res.data[i].english));
                }
                setFiltered(arr);
            })
    };

    const submitHandler = (e) => {
        axios.get('https://whispering-chamber-31613.herokuapp.com/search/' + inputText)
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
                <Col md={{ span: 4, offset: 4 }}>
                    <Form >
                        <Form.Group>
                            <Row>
                                <Col >
                                    <Form.Control name="inputText" placeholder="Place a English word" onChange={handleChangeInput} />
                                </Col>
                                <Col >
                                    <Button type="button" onClick={submitHandler}>Search</Button>
                                </Col>
                            </Row>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
            <Row>
                <Col md={{ span: 3, offset: 4 }}>
                    <ul className="list-group">
                        {filtered.map(item => (
                            <li className="list-group-item" onClick={onclickHandler} data-category={item} key={item}>{item}</li>
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
