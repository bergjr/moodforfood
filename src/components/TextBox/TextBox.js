import React from 'react';
import styles from './TextBox.module.scss'

const TextBox = (props) => {
    return (
        <div className={styles['text-box']}>
            <h1>{props.title}</h1>
        </div>
    );
}

export default TextBox;
