import { useContext } from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
    const linkCol = null; // useContext(linkColour);
    const lStyle = { color: linkCol };
    return (
        <div className="footer">
            <div className="footer-content">
                <p style={lStyle} className="global_link footer-content__link">
                    FOCUSED ON THE DEVELOPMENT <br /> AND DELIVERY OF IDEAS.
                </p>
                <div className="footer-content__rights">
                    <Link to={"/shop"} style={lStyle} className="global_link footer-content__link footer_right">
                        <p style={lStyle} className="global_link footer-content__link ">
                            SHOP
                        </p>
                    </Link>
                    <Link to={"/info"} style={lStyle} className="global_link footer-content__link footer_right">
                        <p style={lStyle} className="global_link footer-content__link ">
                            INFO
                        </p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;
