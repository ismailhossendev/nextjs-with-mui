import { Button, TextField, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { mainContext } from '../../src/contexts/MainContext';

const Step3 = ({ setStep }) => {
    const { signUp, setSingUp } = useContext(mainContext);
    const handleNextStep = e => {
        e.preventDefault();
        setSingUp({
            ...signUp,
            password: e.target[0].value
        })

    };
    console.log(signUp)
    return (
        <div>
            <form onSubmit={handleNextStep} className="lg:w-[516px] lg:p-20 p-4 lg:mt-28 mx-auto">
                <Typography variant="h4" className='font-bold text-center'>
                    Sign Up
                </Typography>
                <TextField id="standard-basic" type="password" label="Password" variant="standard" className='w-full' />
                <Button type='submit' variant="contained" className='mt-4 mx-auto block bg-blue-600'>Sign Up</Button>
            </form>
        </div>
    );
};

export default Step3;