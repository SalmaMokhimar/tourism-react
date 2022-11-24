
import "./Button.scss";

const Button = (props) => {
    
    return(
        <a className={`custom_btn ${props.className}`} href="#">
           {props.btn_name}
            </a>
    );
};
    
    export default Button;