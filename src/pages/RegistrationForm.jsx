import React from 'react';
import { Button, Label, TextInput, Select } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { ArrowLeftOnRectangleIcon } from '@heroicons/react/24/solid'


const RegistrationForm = () => {
    return (
        <div className='container mx-auto md:h-5/6 md:my-32'>
            <form className="flex max-w-xl mx-auto flex-col gap-4 ">
                <div className='md:grid grid-cols-3 gap-5'>
                    <div className='md:col-span-2'>
                        <div className="mb-2 block">
                            <Label htmlFor="name" value="Your name" />
                        </div>
                        <TextInput id="name" type="text" placeholder="Name" required shadow />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="bloodGroup" value="Your Blood Group" />
                        </div>
                        <div className="">
                            <Select id="bloodGroup" required>
                                <option className='text-lg '>Blood Group</option>
                                <option className='text-lg '>A+</option>
                                <option className='text-lg '>B+</option>
                                <option className='text-lg '>O+</option>
                                <option className='text-lg '>AB+</option>
                                <option className='text-lg '>A-</option>
                                <option className='text-lg '>B-</option>
                                <option className='text-lg '>O-</option>
                                <option className='text-lg '>AB-</option>
                            </Select>
                        </div>
                    </div>
                </div>
                <div className='md:grid grid-cols-5 gap-5'>
                    <div className='md:col-span-3'>
                        <div className="mb-2 block">
                            <Label htmlFor="email" value="Your email" />
                        </div>
                        <TextInput id="email" type="email" placeholder="example@email.com" required shadow />
                    </div>
                    <div className='md:col-span-2'>
                        <div className="mb-2 block">
                            <Label htmlFor="phone" value="Contact No." />
                        </div>
                        <TextInput id="phone" type="text" placeholder="017XXXXXXXX" required shadow />
                    </div>
                </div>
                <div className='md:grid grid-cols-5 gap-5'>
                    <div className='md:col-span-3'>
                        <div className="mb-2 block">
                            <Label htmlFor="presentAddress" value="Present Address" />
                        </div>
                        <TextInput id="presentAddress" type="text" placeholder="Address" required shadow />
                    </div>
                    <div className='md:col-span-2'>
                        <div className="mb-2 block">
                            <Label htmlFor="donorArea" value="Prefered Area" />
                        </div>
                        <div className="">
                            <Select id="donorArea" required>
                                <option className='text-lg '>Select Area</option>
                                <option className='text-lg '>Kushtia</option>
                                <option className='text-lg '>Jhinaidah</option>
                                <option className='text-lg '>Sheikhpara</option>
                            </Select>
                        </div>
                    </div>
                </div>


                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="password2" value="Your password" />
                    </div>
                    <TextInput id="password2" type="password" required shadow />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="repeat-password" value="Repeat password" />
                    </div>
                    <TextInput id="repeat-password" type="password" required shadow />
                </div>
                <Button color='failure' type="submit">Register new account</Button>
            </form>
            <div className='max-w-xl mx-auto my-5'>
                <h1 className='flex'>Alreay have account?<button className='flex ml-2 font-bold text-green-500'>Login <ArrowLeftOnRectangleIcon className='ml-2 h-6 w-6'></ArrowLeftOnRectangleIcon></button></h1>
            </div>

        </div>
    );
};

export default RegistrationForm;