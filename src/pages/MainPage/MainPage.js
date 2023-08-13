import React, { useEffect } from 'react';
import CategoriesGallery from 'components/Categories/CategoriesGallery';
import Banner from 'components/Banner/Banner';
import styles from './MainPage.module.scss';
import BigBox from 'components/BigBox/BigBox';

const MainPage = () => {
    useEffect(() => {
        window.scrollTo(0,0);
    }, [])
    
    return (
        <>
            <CategoriesGallery />
            <Banner />
            <section className={styles.middle}>
                <BigBox img="delivery.png" alt="" title="MoodForFood Delivery" text="MoodForFood delivered to you. We've partnered with Uber Eats, Just Eat and Deliveroo to deliver your favourites." link="#asdasd" buttonText="Learn more" />
                <BigBox img="chef.png" alt="" title="Our Plan for Change" text="We use quality produce, sourced locally wherever possible to make your favourites" link="#asdasd" buttonText="Find out more" />
            </section>
        </>
    );
}

export default MainPage;
