import { useCartContext } from 'common/context/CartContext';
import styles from './Menu.module.scss';
import { AiOutlineMenu } from 'react-icons/ai';
import {BsCart4} from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Menu = (props) => {
    const {totalToPay} = useCartContext();   
    return (
        <nav className={styles.menu}>
            <ul className={styles['menu-desktop']}>
                <li>
                    <Link to="/products">Products</Link>
                </li>
                <li>
                    <button className={styles.cart}>
                        <BsCart4 />
                        <p className={styles.counter}>€ {totalToPay}</p>
                    </button>
                </li>
                
            </ul> 
            <ul className={styles['menu-icons']}>
                <li>
                    <button onClick={() => props.menuHandler() }><AiOutlineMenu color="black"/></button>
                </li>
            </ul>  
        </nav>    
    );
}

export default Menu;
