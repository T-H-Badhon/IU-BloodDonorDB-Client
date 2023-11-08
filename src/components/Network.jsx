import React from 'react';
import { UserGroupIcon,MapPinIcon,MagnifyingGlassPlusIcon } from '@heroicons/react/24/solid'

const Network = () => {
    return (
        <div className='container mx-auto my-20'>
            <h1 className='text-xl md:text-4xl text-red-600 font-bold text-center mb-10' >We are a Network of</h1>
            <div className='flex flex-col md:flex-row justify-evenly items-center'>
                <div className='flex flex-col space-y-3 justify-center items-center'>
                    <UserGroupIcon className='text-red-600 h-20 w-20'></UserGroupIcon>
                    <h1>number of user</h1>
                </div>
                <div className='flex flex-col space-y-3 justify-center items-center'>
                    <MapPinIcon className='text-red-600 h-20 w-20'></MapPinIcon>
                    <h1>2 Districts</h1>
                </div>
                <div className='flex flex-col space-y-3 justify-center items-center'>
                    <MagnifyingGlassPlusIcon className='text-red-600 h-20 w-20'></MagnifyingGlassPlusIcon>
                    <h1>8 Blood Groups</h1>
                </div>
                
            </div>
        </div>
    );
};

export default Network;