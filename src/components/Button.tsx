import React, { ReactNode } from 'react';

// Defining type for props using TypeScript interface
interface ButtonProps {
    type?: 'submit' | 'button'; // Allow only 'submit' or 'button' for type
    children: ReactNode;
    className?: string; // Change type to lowercase 'string'
}

const Button = ({
    type = 'submit', // Default type is 'submit'
    children,
    className = '',
}: ButtonProps) => {
    return (
        <button
		id='btn'
            type={type} // Assigning the 'type' prop to the button element
            className={`z-0 uppercase px-12 py-2.5 border border-primary tracking-widest font-sen text-sm cursor-pointer text-black btn ${className}`}
            // Applying classes from props.className in addition to existing classes
        >
            {children}
        </button>
    );
};

export default Button;
