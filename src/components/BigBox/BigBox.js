import React from 'react'
import styles from './BigBox.module.scss';


function BigBox(props) {
  const img = require(`assets/${props.img}`)
  return (
    <div className={styles.container}>
      <div className={styles['img-box']}>
       <img src={img} alt={props.alt} /> 
      </div>
      <div className={styles['text-box']}>
        <h2>{props.title}</h2>
        <p>{props.text}</p>
        <a href={props.link}>{props.buttonText}</a>
      </div>
    </div>
  );
}

export default BigBox