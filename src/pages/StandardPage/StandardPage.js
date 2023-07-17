import React from "react";
import styles from "./StandardPage.module.scss";
import { Outlet } from "react-router-dom";
import { Alert, Slide, Snackbar } from "@mui/material";
import { useCartContext } from "common/context/CartContext";

export function TransitionDown(props) {
  return <Slide {...props} direction="down" />;
}

const StandardPage = () => {
  const { showSnackBar, closeSnackBar } = useCartContext();
  return (
    <main className={styles.main}>
      <Outlet />
      <Snackbar
        open={showSnackBar}
        autoHideDuration={2000}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        onClose={closeSnackBar}
        TransitionComponent={TransitionDown}
      >
        <Alert variant="filled" severity="success" className={styles.snackbar}>
          Product added to the cart
        </Alert>
      </Snackbar>
    </main>
  );
};

export default StandardPage;
