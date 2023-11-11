import React from 'react';

import { Button, Label, TextInput } from 'flowbite-react';

const Login = () => {
    return (
        <div className='container max-w-md mx-auto h-3/4 md:my-36'>
            <h1 className='text-center font-bold text-red-600 text-xl mb-10'>LOGIN</h1>
            <div>
                <form className="flex  mx-auto flex-col gap-4">
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="email1" value="Your email" />
                        </div>
                        <TextInput id="email1" type="email" placeholder="example@gmail.com" required />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="password1" value="Your password" />
                        </div>
                        <TextInput id="password1" type="password" required />
                    </div>
                    <Button color='failure' type="submit">Submit</Button>
                </form>
            </div>
            <div><h1 className='text-lg text-red-600 text-center font-bold my-3'>OR</h1></div>
            <div>
                <Button color='failure' className='w-full'>Login with Google</Button>
            </div>
        </div>
    );
};

export default Login;