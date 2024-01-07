import React from 'react';
import Chip from "@/components/atoms/Chip";

const ChipList = ({ chips }) => {
    return (
        <div className="flex flex-nowrap overflow-x-auto">
            {chips.map((chip, index) => (
                <Chip key={index} title={chip.name} />
            ))}
        </div>
    );
};

export default ChipList;
