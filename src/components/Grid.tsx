import React from 'react';
import Card from './Card';
import './Grid.css';

type GridItemProps = {
    size: '1x1' | '2x1' | '1x2' | '2x2';
    logo: string;
    title: string;
    subtitle: string;
    onFollow: () => void;
};

type GridProps = {
    items: GridItemProps[];
};

const Grid: React.FC<GridProps> = ({ items }) => {
    return (
        <div className="grid-container">
            {items.map((item, index) => (
                <Card
                    key={index}
                    size={item.size}
                    logo={item.logo}
                    title={item.title}
                    subtitle={item.subtitle}
                    onFollow={item.onFollow}
                />
            ))}
        </div>
    );
};

export default Grid;
