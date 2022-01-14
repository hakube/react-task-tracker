import PropTypes from 'prop-types'


const Button = ({color, text, onClick}) => {
    
    return (
        <button onClick={onClick} style={{background: color}} className="btn">{text}</button>
    )
}

Button.defaultProps = {
    color: 'green',
    text: 'Add'
}

Button.propTypes = {
    text: PropTypes.string,
    backgroundColor: PropTypes.string,
    onClick: PropTypes.func
}

export default Button
