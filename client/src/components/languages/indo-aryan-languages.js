import React from "react";
import './language.css';
import { Row} from 'react-bootstrap';
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
                                <div className="header1">Language</div>
                            </th>
                            <th width="44%">
                                <div className="header1">Number of speakers</div>
                            </th>
                            <th width="31%">
                                <div className="header1">Where spoken</div>
                            </th>
                        </tr>
                        <tr className="header1">
                            <td height="32">
                                <div ><a href="/hindi/">Hindi</a></div>
                            </td>
                            <td>
                                <div >425 million</div>
                            </td>
                            <td>
                                <div >India, Pakistan</div>
                            </td>
                        </tr>
                        <tr className="header1">
                            <td>
                                <div ><a href="/bengali/" >Bengali</a></div>
                            </td>
                            <td>
                                <div >210 million </div>
                            </td>
                            <td>
                                <div >Bangladesh, India</div>
                            </td>
                        </tr>
                        <tr className="header1">
                            <td>
                                <div ><a href="/punjabi/" >Punjabi</a></div>
                            </td>
                            <td>
                                <div >122 million</div>
                            </td>
                            <td>
                                <div >India, Pakistan</div>
                            </td>
                        </tr>
                        <tr className="header1">
                            <td><a href="/marathi/" >Marathi</a></td>
                            <td>83 million</td>
                            <td>India</td>
                        </tr>
                        <tr className="header1">
                            <td><a href="/urdu/" >Urdu</a></td>
                            <td>70 million </td>
                            <td>Pakistan, India</td>
                        </tr>
                        <tr className="header1">
                            <td>
                                <div ><a href="/gujarati/" >Gujarati</a></div>
                            </td>
                            <td>
                                <div >46 million</div>
                            </td>
                            <td>
                                <div >India</div>
                            </td>
                        </tr>
                        <tr className="header1">
                            <td><a href="/nepali/" >Nepali</a></td>
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