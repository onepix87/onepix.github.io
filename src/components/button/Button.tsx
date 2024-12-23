import * as React from 'react';
import './Button.css';

export const Button: React.FC<{ type?: 'transparent' | 'contrast'; className?: string }> = ({ type = 'transparent', className, children }) => (
    <button className={`button ${type} ${className ?? ''}`}>
        {children}
    </button>
)