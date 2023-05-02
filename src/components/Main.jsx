import React from 'react';
import Header from './Header';
import Banner from './Banner';
import Testimonial from './Testimonial';
import Contact from './Contact';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import Recipe from './Recipe';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <span>
                <Outlet></Outlet>
                <Recipe></Recipe>
            </span>
            <Testimonial></Testimonial>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Main;