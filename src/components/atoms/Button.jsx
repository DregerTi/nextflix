import React from 'react';
import Link from "next/link";

const Button = ({ title, icon, onClick, hasBackground, href, className, type }) => {
    const buttonStyle = hasBackground
        ? 'bg-white hover:bg-gray-400 text-black'
        : 'bg-transparent text-white';

    const handleClick = () => {
        if (onClick) {
            onClick();
        }
    };

    return href ? (
        <Link
            href={href}
            className={`py-2 px-4 rounded-lg w-min ${buttonStyle} flex items-center transition-all cursor-pointer justify-center ${className ?? ''}`}
        >
            {icon && <span className="mr-2">{icon}</span>}
            <span className="whitespace-nowrap">{title}</span>
        </Link>
    ) : (
        <button
            onClick={handleClick ?? null}
            type={type ?? 'button'}
            className={`py-2 px-4 rounded-lg w-min ${buttonStyle} flex items-center transition-all cursor-pointer justify-center ${className ?? ''}`}
        >
            {icon && <span className="mr-2">{icon}</span>}
            <span className="whitespace-nowrap">{title}</span>
        </button>
    );
};

export default Button;