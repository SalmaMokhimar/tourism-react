
import {BsStar,BsStarHalf,BsStarFill} from "react-icons/bs"

const Rate = ({rating}) => {
    const stars=[];
    rating= (rating<=5)?rating:5;
    const filledStars=Math.trunc(rating);
    
        for (let i = 1; i <= filledStars; i++) {
            stars.push(<BsStarFill style = {{ color: "#ffc63f", fontSize: "1.2rem" }}/>);
        }
        if(rating !== filledStars)
        {
            stars.push(<BsStarHalf style = {{ color: "#ffc63f", fontSize: "1.2rem" }}/>);
        }
        for (let i = 1; i <= 5-rating; i++) {
            stars.push(<BsStar style = {{ color: "#ffc63f", fontSize: "1.2rem" }}/>);
        }
        
     
        
    
    return(
        stars
        
    );
};
    
    export default Rate;