import React from 'react';
import styles from './Banner.module.scss';
import img from 'assets/app.png';
import appStore from 'assets/app-store.jpg';
import googlePlay from 'assets/google-play.jpg';

const Banner = () => {
    return (
        <section id="banner" className={styles.banner}>
            <div className={styles.container}>
                <div className={styles['img-box']}>
                    <img src={img} alt="Phone with the shop logo" />
                </div>
                <div className={styles['text-box']}>
                    <h2>Mood For Food's App</h2>
                    <p>The best place for exclusive deals and offers. We've got a €10 Value Meal with your name on it - all you need to do is register with the app and off you go.</p>
                    <div className={styles['shop-box']}>
                        <img src={appStore} alt="Icon of the App Store" />
                        <img src={googlePlay} alt="Icon of Google Play" />
                    </div> 
                </div>
            </div>
        </section>
    );
}

export default Banner;
