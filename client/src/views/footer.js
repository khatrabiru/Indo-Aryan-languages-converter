import React from "react";
const Footer = () => {
    return (
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    <p className="col-sm">
                        &copy;{new Date().getFullYear()} All rights reserved |
                        Terms Of Service | Privacy
                    </p>
                </div>
            </div>
        </div>
    );

};

export default Footer;