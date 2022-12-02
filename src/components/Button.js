
import "./Button.scss";

const Button = ({className,btn_name}) => {
    
    return(
        <a className={`custom_btn ${className}`} href="#">
           {btn_name}
            </a>
    );
};
    
    export default Button;