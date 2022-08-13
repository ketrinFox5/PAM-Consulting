import React from 'react';
import { IButton } from '../../../interfaces/Button.interface';
import './Button.scss';

const Button = ({text, size, textSize}: IButton) => {
    let buttonSizeClass: string;
    if (size === 'small') {
        buttonSizeClass = 'Button-small';
    } else if (size === 'middle') {
        buttonSizeClass = 'Button-middle';
    } else {
        buttonSizeClass = 'Button-big';
    };

    return (
        <button className={"Button title " + textSize + " " + buttonSizeClass} >
            {text}
        </button>
    )
}

export default Button;