import "./Footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-content">
                <a className="footer-content__link" href="mailto:contact@dsplaced.co.uk">
                    contact@dsplaced.co.uk
                </a>
                <a className="footer-content__link" href="https://www.instagram.com/dsplaced/">
                    @dsplaced
                </a>
            </div>
        </div>
    );
};

export default Footer;
