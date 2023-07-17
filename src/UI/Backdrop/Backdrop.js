import React from "react";
import styles from './Backdrop.module.scss';

const Backdrop = ({onClose}) => {
  return <div className={styles.backdrop} onClick={() => onClose()}></div>;
};

export default Backdrop;
