import React from 'react';
import styles from './StandardPage.module.scss';
import { Outlet } from 'react-router-dom';
const StandardPage = () => {
    return (
        <main className={styles.main}>
            <Outlet />
        </main>
    );
}

export default StandardPage;
