import { useRef } from 'react';
import PropTypes from 'prop-types';

import './Button.css'

const Button = ({ text, activeInput, hasError, isInactive, onFilesUploaded, onClick }) => {
    const ref = useRef(null);

    const inputTrigger = (e) => {
        if (activeInput) {
            ref.current.querySelector('input').click();

        } else {
            onClick();
        }

        e.target.blur();
    }

    return (
        <div className="button" ref={ref}>
            <input 
                className="button--input" 
                type="file" 
                name="images" 
                id="images" 
                multiple 
                accept="image/*" 
                onChange={(e) => onFilesUploaded(e.target.files)} 
            />
            <button 
                className={`button--btn ${hasError ? 'error' : ''} ${isInactive ? 'inactive' : ''}`} 
                htmlFor="images" 
                onClick={inputTrigger}
            >
                { text }
            </button>
        </div>
    );
}

Button.defaultProps = {
    text: 'Submit',
    activeInput: true,
    hasError: false,
    isInactive: false,
}

Button.propTypes = {
    text: PropTypes.string,
    activeInput: PropTypes.bool,
    hasError: PropTypes.bool,
    isActive: PropTypes.bool,
}

export default Button;