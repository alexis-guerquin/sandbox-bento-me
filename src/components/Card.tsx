import React from 'react';
import './Card.css';

type CardProps = {
    size: '1x1' | '2x1' | '1x2' | '2x2';
    logo: string;
    title: string;
    subtitle: string;
    onFollow: () => void;
};

const Card: React.FC<CardProps> = ({ size, logo, title, subtitle, onFollow }) => {
    return (
        <div className={`grid-item size-${size}`}>
            <div className="card-content">
                <img src={logo} alt="logo" className="card-logo" />
                <div className="card-text">
                    <h3 className="card-title">{title}</h3>
                    <p className="card-subtitle">{subtitle}</p>
                </div>
                <button className="card-button" onClick={onFollow}>Follow</button>
            </div>
        </div>
    );
};

export default Card;
