import React from 'react';
import styles from './MenuMobile.module.scss';
import { AiOutlineClose } from 'react-icons/ai';

const MenuMobile = (props) => {
    return (
        <div className={`${styles['menu-mobile']} ${props.isMenuOpen ? styles['menu-mobile--open'] : ""}`}>
            <ul>
                <li>
                    <AiOutlineClose onClick={() => props.menuHandler() } className={styles.close}/>
                </li>                   
                <li>
                    <a onClick={() => props.menuHandler() } href="#banner">Home</a>
                </li>
                <li>
                    <a onClick={() => props.menuHandler() } href="#about">About</a>
                </li>
                <li>
                    <a onClick={() => props.menuHandler() } href="#projects">Projects</a>
                </li>
                <li>
                    <a onClick={() => props.menuHandler() } href="#contact">Contact</a>
                </li>
            </ul>
        </div> 
    );
}

export default MenuMobile;
