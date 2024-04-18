import './styles/Button.css'
import propTypes from 'prop-types'

const Button = (props) => {
    return ( 
        <button className="btn">{props.text}</button>
     );
}

Button.propTypes ={
    text: propTypes.string,
}

Button.defaultProps= {
    text: "Button",
}
 
export default Button;