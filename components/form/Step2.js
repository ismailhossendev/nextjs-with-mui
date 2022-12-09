import { Button, TextField, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { mainContext } from '../../src/contexts/MainContext';

const Step2 = ({ setStep }) => {
    const { signUp, setSingUp } = useContext(mainContext);
    const handleNextStep = e => {
        e.preventDefault();
        setSingUp({
            ...signUp,
            phone_number: e.target[0].value,
            email: e.target[1].value
        })
        setStep(2);

    };
    return (
        <div>
            <form onSubmit={handleNextStep} className="lg:w-[516px] lg:p-20 p-4 lg:mt-28 mx-auto">
                <Typography variant="h4" className='font-bold text-center'>
                    Sign Up
                </Typography>
                <TextField id="standard-basic" label="Phone Number" variant="standard" className='w-full' />
                <TextField id="standard-basic" type="email" label="Email Address" variant="standard" className='w-full' />
                <Button onClick={() => setStep(0)} variant="text" className='mt-4 mr-2'>Back</Button>
                <Button type='submit' variant="contained" className='mt-4  bg-blue-600'>Next Step</Button>
            </form>
        </div>
    );
};

export default Step2;