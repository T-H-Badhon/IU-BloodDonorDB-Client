import React from 'react';
import NavBar from '../components/Navbar';
import SliderComp from '../components/SliderComp';
import WhyWhoBlock from '../components/WhyWhoBlock';
import DonorSearch from '../components/DonorSearch';


const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <SliderComp></SliderComp>
            <WhyWhoBlock></WhyWhoBlock>
            <DonorSearch></DonorSearch>
        </div>
    );
};

export default Home;