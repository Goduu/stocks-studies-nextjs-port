import React from 'react';
import Header from '../src/home/Header';
import Features from '../src/home/Features';
import Footer from '../src/home/Footer';
import PageDemo from '../src/home/PageDemo';
import Navbar from '../src/home/Navbar';

export default function Index() {
    return (
        <div >
            <Navbar />
            <Header />
            <Features />
            <PageDemo />
            <Footer />
        </ div >
    );
}