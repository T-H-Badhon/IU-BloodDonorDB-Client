import React from 'react';
import NavBar from '../components/Navbar';
import SliderComp from '../components/SliderComp';
import WhyWhoBlock from '../components/WhyWhoBlock';
import DonorSearch from '../components/DonorSearch';
import Network from '../components/Network';
import BDFooter from '../components/BDFooter';


const Home = () => {
    return (
        <div>
            <SliderComp></SliderComp>
            <WhyWhoBlock></WhyWhoBlock>
            <DonorSearch></DonorSearch>
            <Network></Network>
        </div>
    );
};

export default Home;