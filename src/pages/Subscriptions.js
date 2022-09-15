import React from 'react';
import { Link } from 'react-router-dom';

const Subscriptions = () => (
    <>
        <h1>Fresh Subscriptions</h1>
        <div class='subscription-container'>
            <div class='subscription'>
            <br />
                <h1>6 Meals</h1>
                <p class='sub-sub'>per week</p>
                <h1 class='savings'>Save 8%</h1>
                <p class='sub-sub'>with a subscription</p>
                <input class='sub-select' type='checkbox' />
            </div>
            <div class='subscription'>
            <div class='highlight'>Exceptional Value</div>
                <h1>10 Meals</h1>
                <p class='sub-sub'>per week</p>
                <h1 class='savings'>Save 15%</h1>
                <p class='sub-sub'>with a subscription</p>
                <input class='sub-select' type='checkbox' />
            </div>
            <div class='subscription'>
            <div class='highlight'>Best Value</div>
                <h1>14 Meals</h1>
                <p class='sub-sub'>per week</p>
                <h1 class='savings'>Save 23%</h1>
                <p class='sub-sub'>with a subscription</p>
                <input class='sub-select' type='checkbox' />
            </div>
            <div class='subscription'>
                <br />
                <h1>A La Carte</h1>
                <p>Build Your Own!</p>
                <h1>Customize</h1>
                <p class='sub-sub'>your plan</p>
                <input class='sub-select' type='checkbox' />
            </div>
        </div>
        <Link to='/productlist'><button class='submit-button'>Continue</button></Link>
    </>
);

export default Subscriptions;