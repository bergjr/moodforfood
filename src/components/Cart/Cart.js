import { useCartContext } from 'common/context/CartContext';
import React from 'react';
import ModalCart from './ModalCart';
// import Backdrop from 'UI/Backdrop/Backdrop';
import { Backdrop } from '@mui/material';

const Cart = () => {
    const { showCart, openCartHandler } = useCartContext();
    
    return (
        <>
            <Backdrop open={showCart} onClick={openCartHandler} sx={{zIndex: "99999"}}>
                <ModalCart />
            </Backdrop>
            {/* {showCart && ReactDOM.createPortal(<Backdrop onClose={openCartHandler}/>, document.getElementById("backdrop-root"))}
            {showCart && ReactDOM.createPortal(<ModalCart />, document.getElementById("overlay-root"))} */}
        </>
    );
}

export default Cart;

