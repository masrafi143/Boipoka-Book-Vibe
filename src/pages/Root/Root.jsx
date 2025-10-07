import React from 'react';
import Header from '../../components/Header/Header';
import { Outlet } from 'react-router';
import Footer from '../../components/Footer/Footer';

const Root = () => {
    return (
        <div>
            <Header/>
            <Outlet>

            </Outlet>
            <Footer/>
        </div>
    );
};

export default Root;