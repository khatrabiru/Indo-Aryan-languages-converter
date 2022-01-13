import React from "react";
import './language.css';
import { Container, Row, Col } from 'react-bootstrap';
const IndoAryanLanguages = () => {
    return (
        <div className="container-fluid">
            <Row>
                <p>
                    Indo-Aryan languages, also called Indic languages, subgroup of the Indo-Iranian
                    branch of the Indo-European language family. In the early 21st century, Indo-Aryan
                    languages were spoken by more than 800 million people, primarily in India,
                    Bangladesh, Nepal, Pakistan, Sri Lanka and the Maldives. There are 219 Indo-Aryan languages,
                    some of which are yet to be definitively classified. Some most used languages are following.
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
                            <td><a href="/nepali/" target="_top">Nepali</a></td>
                            <td>17 million</td>
                            <td>Nepal, India</td>
                        </tr>
                    </tbody>
                </table>
            </Row>
        </div>
    );

};

export default IndoAryanLanguages;