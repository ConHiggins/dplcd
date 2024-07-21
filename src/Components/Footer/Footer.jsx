import "./Footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-content">
                <p className="footer-content__link">FOCUSED ON THE DEVELOPMENT <br /> AND DELIVERY OF IDEAS.</p>
                <div className="footer-content__rights">
                    <Link to={"/shop"} className="footer-content__link footer_right">
                            <p className="footer-content__link ">SHOP</p>
                    </Link>
                    <Link to={"/info"} className="footer-content__link footer_right">
                            <p className="footer-content__link ">INFO</p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;
