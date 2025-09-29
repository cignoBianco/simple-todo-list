import React from 'react';

import styles from './Button.module.css';

interface ButtonProps extends React.ComponentPropsWithRef<'button'> {
    color: 'orange' | 'blue' | 'red'
}

const Button:React.FC<ButtonProps> = ({ children, color, onClick, className = '', ...props }) => {
    const baseClassName = `${styles.button} ${styles[`button_${color}`]}`;

    return (
        <button className={`${baseClassName} ${className}`.trim()} onClick={onClick} {...props}>
            {children}
        </button>
    );
};

export default Button;