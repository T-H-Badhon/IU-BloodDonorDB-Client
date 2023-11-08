import React from 'react';
import NavBar from '../components/Navbar';
import SliderComp from '../components/SliderComp';
import WhyWhoBlock from '../components/WhyWhoBlock';


const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <SliderComp></SliderComp>
            <WhyWhoBlock></WhyWhoBlock>
        </div>
    );
};

export default Home;