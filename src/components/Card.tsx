import React, { useState } from 'react';
import './Card.css';
import CardSizeBar from './CardSizeBar';

type CardProps = {
    initialSize: '1x1' | '2x1' | '1x2' | '2x2';
    logo: string;
    title: string;
    subtitle: string;
    onFollow: () => void;
};

const Card: React.FC<CardProps> = ({ initialSize, logo, title, subtitle, onFollow }) => {
    const [size, setSize] = useState<'1x1' | '2x1' | '1x2' | '2x2'>(initialSize);

    const handleSizeChange = (newSize: '1x1' | '2x1' | '1x2' | '2x2') => {
        setSize(newSize);
    };

    return (
        <div className={`grid-item size-${size}`}>
            <div className={`card-content ${size}`}>
                <div className='card-info'>
                    <img src={logo} alt="logo" className="card-logo" />
                    <div className="card-text">
                        <a className="card-title">{title}</a>
                        <p className="card-subtitle">{subtitle}</p>
                    </div>
                    <button className="card-button" onClick={onFollow}>Follow</button>
                </div>
                {(size === '2x1' || size === '1x2') && (
                    <div className="extra-div"></div>
                )}
                {size === '2x2' && (
                    <div className="extra-2x2"></div>
                )}
            </div>
            <div className="card-trash-button">
                <i className="fas fa-trash-alt"></i>
            </div>
            <CardSizeBar onSizeChange={handleSizeChange} currentSize={initialSize} />
        </div>
    );
};

export default Card;