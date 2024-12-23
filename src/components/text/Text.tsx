import React from 'react';
import './Text.css';

export const Text: React.FC<{ type?: 'default' | 'paragraph'; className?: string }> = ({ type = 'default', className, children }) => {
    return type === 'default' ? <span className={`text ${className ?? ''}`}>{children}</span> : <p className={`text ${className ?? ''}`}>{children}</p>
}

export const Title: React.FC<{ type?: 'primary' | 'secondary'; className?: string }> = ({ type = 'primary', className, children }) => {
    return type === 'primary' ? <h2 className={`title ${className ?? ''}`}>{children}</h2> : <h3 className={`title ${className ?? ''}`}>{children}</h3>
}