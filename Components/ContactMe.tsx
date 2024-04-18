/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
};

const ContactMe: React.FC = () => {
    const { handleSubmit, register, reset } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = async (formData) => {
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                // If you want to perform some action on success, you can do it here
                console.log('Form submitted successfully');
                reset(); // Reset the form after successful submission
            } else {
                console.error('Failed to submit form');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <div
            className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
            <h3 className='absolute top-14 mt-[10px] uppercase tracking-[20px] text-gray-500 text-2xl'>
                Contact Me
            </h3>
            <div className='flex flex-col space-y-10 mt-[100px]'>
                <h4 className='text-4xl font-semibold text-center'>
                    You want to hear more about me?{' '}
                    <span className='decoration-[#F7AB0A]/50 underline'>Lets Talk!</span>
                </h4>
                <div className='flex flex-row items-center space-x-2 justify-center'>
                    <div className='flex flex-col items-center space-y-5'>
                        <img src='/telefon.png' alt='phone' className='h-10 w-10 border-4 border-black bg-yellow-400 rounded-full animate-pulse' />
                        <img src='/email.png' alt='email' className='h-10 w-10 border-4 border-black bg-yellow-400 rounded-full animate-pulse' />
                        <img src='/map.png' alt='location' className='h-10 w-10 border-4 border-black bg-yellow-400 rounded-full animate-pulse' />

                    </div>
                    <div className='flex flex-col items-start space-y-7'>
                        <p className='text-2xl'>+12343224</p>
                        <p className='text-2xl'>+lamecet@gmail.com</p>
                        <p className='text-2xl'>+Tirona Kapital</p>
                    </div>
                </div>


                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
                    <div className='flex space-x-2 mt-[-25px]'>
                        <input {...register('name')} placeholder='Name' className='contactInput' type='text' />
                        <input {...register('email')} placeholder='Email' className='contactInput' type='email' />
                    </div>

                    <input {...register('subject')} placeholder='Subject' className='contactInput' type='text' />

                    <textarea {...register('message')} placeholder='Message' className='contactInput' />
                    <button type='submit' className='bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold'>
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactMe;