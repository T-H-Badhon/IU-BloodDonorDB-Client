import React from 'react';

import { Button, Label, Radio, Dropdown } from 'flowbite-react';

const DonorSearch = () => {
    return (
        <div className='container mx-auto md:h-36 my-20 rounded-lg bg-red-600'>
            <form className="flex flex-col gap-5 p-5 md:flex-row justify-around items-center">
                <div className="mb-2 block ">
                    <Label className='text-xl text-white' value="Blood Group" />
                    <fieldset className="grid grid-cols-4 max-w-md gap-4">
                        <div className="flex items-center gap-2">
                            <Radio id="A+" name="countries" value="A+" defaultChecked />
                            <Label className=' text-white' htmlFor="A+">A+</Label>
                        </div>
                        <div className="flex items-center gap-2">
                            <Radio id="B+" name="countries" value="B+" />
                            <Label className=' text-white' htmlFor="B+">B+</Label>
                        </div>
                        <div className="flex items-center gap-2">
                            <Radio id="AB+" name="countries" value="AB+" />
                            <Label className=' text-white' htmlFor="AB+">AB+</Label>
                        </div>
                        <div className="flex items-center gap-2">
                            <Radio id="O+" name="countries" value="O+" />
                            <Label className=' text-white' htmlFor="O+">O+</Label>
                        </div>
                        <div className="flex items-center gap-2">
                            <Radio id="A-" name="countries" value="A-" defaultChecked />
                            <Label className=' text-white' htmlFor="A-">A-</Label>
                        </div>
                        <div className="flex items-center gap-2">
                            <Radio id="B-" name="countries" value="B-" />
                            <Label className=' text-white' htmlFor="B-">B-</Label>
                        </div>
                        <div className="flex items-center gap-2">
                            <Radio id="AB-" name="countries" value="AB-" />
                            <Label className=' text-white' htmlFor="AB-">AB-</Label>
                        </div>
                        <div className="flex items-center gap-2">
                            <Radio id="O-" name="countries" value="O-" />
                            <Label className=' text-white' htmlFor="O-">O-</Label>
                        </div>
                    </fieldset>
                </div>
                <div>
                    <Dropdown outline color='failure' label="Request Area">
                        <Dropdown.Item>Kushtia</Dropdown.Item>
                        <Dropdown.Item>Jhinaidah</Dropdown.Item>
                        <Dropdown.Item>Seikhpara</Dropdown.Item>
                        <Dropdown.Item>Shailkupa</Dropdown.Item>
                    </Dropdown>
                </div>
                <div>
                <Dropdown outline color='failure' label="Donor Type">
                        <Dropdown.Item>All</Dropdown.Item>
                        <Dropdown.Item>Active</Dropdown.Item>
                    </Dropdown>
                </div>
                <div><Button outline color='failure' type="submit">Search</Button></div>
            </form>
        </div>
    );
};

export default DonorSearch;