// src/components/Grid.tsx
import React from 'react';
import './Grid.css';

type GridItemProps = {
    size: '1x1' | '2x1' | '1x2' | '2x2';
};

type GridProps = {
    items: GridItemProps[];
};

const Grid: React.FC<GridProps> = ({ items }) => {
    return (
        <div className="grid-container">
            {items.map((item, index) => (
                <div key={index} className={`grid-item size-${item.size}`}>
                </div>
            ))}
        </div>
    );
};

export default Grid;
