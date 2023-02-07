import { Link } from "react-router-dom";
import "./Button.scss";

const Button = ({ link, className, content }) => {
    return (
        <Link to={link}>
            <button className={className} content={content}>
                {content}
            </button>
        </Link>
    );
};

export default Button;
