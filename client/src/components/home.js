import React from "react";
import Converter from "./converter";
import IndoAryanLanguages from './languages/indo-aryan-languages'
const Home = () => {
    return (
        <div className="container-fluid">
            <div className="container2">
                <h2>Indo Aryan Languages</h2>
                <IndoAryanLanguages />
            </div>
            <div className="container2">
                <h2>Converter</h2>
                <div className="container3">
                    <p>Please place a word in any language ( English, Hindi, Urdu, Nepali, Bengali, Marathi or Gujarati ) and find out the meaning in Indo Aryan Languages.</p>
                </div>
                <Converter />
            </div>
        </div>
    );

};

export default Home;