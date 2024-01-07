import React from 'react';
import { AiOutlineTwitter, AiOutlineGithub, AiFillInstagram } from 'react-icons/ai'; // Importation des icônes

const Footer = () => {
    return (
        <footer className="flex items-center justify-between py-3 px-8 pt-20 text-gray-400 w-full">
            <div className="text-sm font-medium">Copyright © 2024 Nextflix</div>
            <div className="flex space-x-4">
                <a href="lien_vers_instagram" target="_blank" rel="noopener noreferrer"><AiFillInstagram /></a>
                <a href="lien_vers_twitter" target="_blank" rel="noopener noreferrer"><AiOutlineTwitter /></a>
                <a href="lien_vers_github" target="_blank" rel="noopener noreferrer"><AiOutlineGithub /></a>
            </div>
        </footer>
    );
};

export default Footer;