import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => (
    <>
    <h1>Chef Crafted Meals Deliciously Delivered!</h1>
    <p>You're just two steps away from fresh, tasty meals for you and your whole family.</p>
    <div class='getstarted'>
        <input class='input-field' id='email' type='email' name='email' required placeholder='example@mail.com' />
        <input class='input-field' id='zip' type='text' name='zip' required placeholder='your zip code' />
        <Link to='/subscriptions'><button class='submit-button'>Let's Get Fresh</button></Link>
        <p>Already have an account? <Link to='/subscriptions'>Log In</Link></p>
    </div>
    </>
);

export default HomePage;