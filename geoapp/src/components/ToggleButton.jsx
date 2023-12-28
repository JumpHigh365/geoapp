import { useState } from 'react'


const Switch = ({ onClick }) => {

    const [isSelected, setIsSelected] = useState(false);

    const handleSwitchClick = () => {
        setIsSelected(!isSelected);
        onClick();
    };
    
    return (
        <div className={`flex w-20 h-10 bg-gray-400 cursor-pointer select-none transition-all duration-500 rounded-full ${isSelected ? 'bg-green-500' : ''}`} onClick={handleSwitchClick} >
            <span className={`h-10 w-10 bg-white border-2 border-gray-400 rounded-full transition-all duration-500 shadow-2xl ${isSelected ? 'ml-10 border-green-500' : ''}`}></span>
        </div>
    )
};

export default Switch;