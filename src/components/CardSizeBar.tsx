import React, { useState, useEffect } from 'react';

type CardSizeBarProps = {
    onSizeChange: (size: '1x1' | '2x1' | '1x2' | '2x2') => void;
    currentSize: '1x1' | '2x1' | '1x2' | '2x2'; // Ajoutez cette prop pour refléter la taille actuelle
};

const CardSizeBar: React.FC<CardSizeBarProps> = ({ onSizeChange, currentSize }) => {
    const [selectedSize, setSelectedSize] = useState(currentSize);

    useEffect(() => {
        setSelectedSize(currentSize);
    }, [currentSize]);

    const handleSizeChange = (size: '1x1' | '2x1' | '1x2' | '2x2') => {
        setSelectedSize(size);
        onSizeChange(size);
    };

    return (
        <div className="card-size-bar">
            <button
                className={`square-btn ${selectedSize === '1x1' ? 'selected' : ''}`}
                onClick={() => handleSizeChange('1x1')}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32">
                    <rect width="26" height="26" x="3" y="3" stroke="currentColor" strokeWidth="6" rx="5"/>
                </svg>
            </button>
            <button
                className={`rectangle-btn ${selectedSize === '2x1' ? 'selected' : ''}`}
                onClick={() => handleSizeChange('2x1')}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="24" fill="none" viewBox="0 0 48 24">
                    <rect width="19" height="43" x="2.5" y="21.5" stroke="currentColor" strokeWidth="5" rx="4.5" transform="rotate(-90 2.5 21.5)"/>
                </svg>
            </button>
            <button
                className={`rectangle-btn2 ${selectedSize === '1x2' ? 'selected' : ''}`}
                onClick={() => handleSizeChange('1x2')}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="48" fill="none" viewBox="0 0 24 48">
                    <rect width="19" height="43" x="2.5" y="2.5" stroke="currentColor" strokeWidth="5" rx="4.5"/>
                </svg>
            </button>
            <button
                className={`square-btn2 ${selectedSize === '2x2' ? 'selected' : ''}`}
                onClick={() => handleSizeChange('2x2')}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="none" viewBox="0 0 50 50">
                    <rect width="43" height="43" x="3.5" y="3.5" stroke="currentColor" strokeWidth="7" rx="6.5"/>
                </svg>
            </button>
        </div>
    );
};

export default CardSizeBar;
