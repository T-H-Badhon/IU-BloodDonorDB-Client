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
            <NavBar></NavBar>
            <SliderComp></SliderComp>
            <WhyWhoBlock></WhyWhoBlock>
            <DonorSearch></DonorSearch>
            <Network></Network>
            <BDFooter></BDFooter>
        </div>
    );
};

export default Home;