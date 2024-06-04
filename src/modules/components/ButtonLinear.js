import './styles/ButtonLinear.css'
import propTypes from 'prop-types'

const ButtonLinear = (props) => {
    return ( 
        <button className="btn-linear btn-l">
            <span class="btn-text">{props.text}</span>
        </button>
     );
}

ButtonLinear.propTypes ={
    text: propTypes.string,
}

ButtonLinear.defaultProps= {
    text: "Button",
}
 
export default ButtonLinear;