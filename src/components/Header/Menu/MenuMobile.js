import React from 'react';
import styles from './MenuMobile.module.scss';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const MenuMobile = (props) => {
    return (
        <div className={`${styles['menu-mobile']} ${props.isMenuOpen ? styles['menu-mobile--open'] : ""}`}>
            <ul>
                <li>
                    <AiOutlineClose onClick={() => props.menuHandler() } className={styles.close}/>
                </li>                   
                <li>
                    <Link onClick={() => props.menuHandler() } to="/">Home</Link>
                </li>
                <li>
                    <Link onClick={() => props.menuHandler() } to="/categories">Categories</Link>
                </li>
            </ul>
        </div> 
    );
}

export default MenuMobile;
