import { useCartContext } from "common/context/CartContext";
import styles from "./Menu.module.scss";
import { AiOutlineMenu } from "react-icons/ai";
import { BsCart4 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Badge, Button } from "@mui/material";

const Menu = (props) => {
  const { cart, totalToPay, openCartHandler } = useCartContext();
  return (
    <nav className={styles.menu}>
      <ul className={styles["menu-desktop"]}>
        <li>
          <Link to="/categories/1">Check our products</Link>
        </li>
        <li>
          <Badge
            badgeContent={cart.length}
            color="error"
          >
            <Button className={styles.cart} onClick={openCartHandler} startIcon={<BsCart4 />}>
              <p className={styles.counter}>€ {totalToPay.toFixed(2)}</p>
            </Button>
          </Badge>
        </li>
      </ul>
      <ul className={styles["menu-icons"]}>
        <li>
          <button onClick={() => props.menuHandler()}>
            <AiOutlineMenu color="black" />
          </button>
        </li>
        <li>
          <Badge
            badgeContent={cart.length}
            color="error"
          >
            <Button className={styles.cart} onClick={openCartHandler}>
              <BsCart4 />
            </Button>
          </Badge>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
