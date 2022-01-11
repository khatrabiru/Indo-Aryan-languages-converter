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
                <Col md={{ span: 3, offset: 3 }}>
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
            <Row>
                <p>
                    Indo-Aryan languages, also called Indic languages, subgroup of the Indo-Iranian
                    branch of the Indo-European language family. In the early 21st century, Indo-Aryan
                    languages were spoken by more than 800 million people, primarily in India,
                    Bangladesh, Nepal, Pakistan, Sri Lanka and the Maldives. There are 219 Indo-Aryan languages,
                    some of which are yet to be definitively classified.
                </p>
            </Row>
            <Row>
                <table>
                    <tbody>
                        <tr>
                            <th width="25%">
                                <div align="left">Language</div>
                            </th>
                            <th width="44%">
                                <div align="left">Number of speakers</div>
                            </th>
                            <th width="31%">
                                <div align="left">Where spoken primarily</div>
                            </th>
                        </tr>
                        <tr>
                            <td height="32">
                                <div align="left"><a href="/hindi/" target="_top">Hindi</a></div>
                            </td>
                            <td>
                                <div align="left">425 million</div>
                            </td>
                            <td>
                                <div align="left">India, Pakistan</div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div align="left"><a href="/bengali/" target="_top">Bengali</a></div>
                            </td>
                            <td>
                                <div align="left">210 million </div>
                            </td>
                            <td>
                                <div align="left">Bangladesh, India</div>
                            </td>
                        </tr>
                        <tr>
                            <td><a href="/urdu/" target="_top">Urdu</a></td>
                            <td>70 million </td>
                            <td>Pakistan, India</td>
                        </tr>
                        <tr>
                            <td><a href="/marathi/" target="_top">Marathi</a></td>
                            <td>83 million</td>
                            <td>India</td>
                        </tr>
                        <tr>
                            <td>
                                <div align="left"><a href="/punjabi/" target="_top">Punjabi</a></div>
                            </td>
                            <td>
                                <div align="left">122 million</div>
                            </td>
                            <td>
                                <div align="left">India, Pakistan</div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div align="left"><a href="/gujarati/" target="_top">Gujarati</a></div>
                            </td>
                            <td>
                                <div align="left">46 million</div>
                            </td>
                            <td>
                                <div align="left">India</div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div align="left"><a href="https://en.wikipedia.org/wiki/Odia_language" target="_top">Oriya</a></div>
                            </td>
                            <td>
                                <div align="left">50 million</div>
                            </td>
                            <td>
                                <div align="left">India</div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div align="left"><a href="https://en.wikipedia.org/wiki/Bhojpuri_language" target="_top">Bhojpuri</a></div>
                            </td>
                            <td>
                                <div align="left">50 million</div>
                            </td>
                            <td>
                                <div align="left">India</div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div align="left"><a href="/maithili/" target="_top">Maithili</a></div>
                            </td>
                            <td>
                                <div align="left">34 million</div>
                            </td>
                            <td>
                                <div align="left">India</div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div align="left"><a href="https://en.wikipedia.org/wiki/Sindhi_language" target="_top">Sindhi</a></div>
                            </td>
                            <td>
                                <div align="left">23 million</div>
                            </td>
                            <td>
                                <div align="left">Pakistan, India</div>
                            </td>
                        </tr>
                        <tr>
                            <td><a href="/nepali/" target="_top">Nepali</a></td>
                            <td>17 million</td>
                            <td>Nepal, India</td>
                        </tr>
                        <tr>
                            <td><a href="/worldlanguages/assamese/" target="_top">Assamese</a></td>
                            <td>15 million</td>
                            <td>India</td>
                        </tr>
                        <tr>
                            <td><a href="http://www.ethnologue.com/show_language.asp?code=bgc" target="_blank" rel="noopener">Haryanvi</a></td>
                            <td>13 million</td>
                            <td>India</td>
                        </tr>
                    </tbody>
                </table>
            </Row>

        </Container>
    );
}

export default Converter;
