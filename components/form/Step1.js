import { Button, TextField, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { mainContext } from '../../src/contexts/MainContext';

const Step1 = ({ setStep }) => {
    const { signUp, setSingUp } = useContext(mainContext);
    const handleNextStep = e => {
        e.preventDefault();
        setSingUp({
            ...signUp,
            first_name: e.target[0].value,
            last_Name: e.target[1].value
        })
        setStep(1);
    };
    return (
        <div>
            <form onSubmit={handleNextStep} className="lg:w-[516px] lg:p-20 p-4 lg:mt-28 mx-auto">
                <Typography variant="h4" className='font-bold text-center'>
                    Sign Up
                </Typography>
                <TextField id="standard-basic" label="First Name" variant="standard" className='w-full' />
                <TextField id="standard-basic" label="Last Name" variant="standard" className='w-full' />
                <Button type='submit' variant="contained" className='mt-4 mx-auto block bg-blue-600'>Next Step</Button>
            </form>
        </div>
    );
};

export default Step1;