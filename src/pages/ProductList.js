import React from 'react';
import { Link } from 'react-router-dom';
import allProducts from './products-content';
import filterIcon from '../assets/filter.png';

const ProductList = ({ ProductList }) => (
    <>
    <div class='product-filter'>
        <ul>
            <img src={filterIcon} alt='filter icon' class='filter-icon' />
            <li class='navlink'>
                <p>Filter by...</p>
            </li>
            <li class='navlink'>
                <Link to='/'>All Meals</Link>
            </li>
            <li class='navlink'>
                <Link to='/subscriptions'>Traditional</Link>
            </li>
            <li class='navlink'>
                <Link to='/productlist'>Lean & Mean</Link>
            </li>
            <li class='navlink'>
                <Link to='/productlist'>Keto</Link>
            </li>
            <li class='navlink'>
                <Link to='/productlist'>Paleo</Link>
            </li>
        </ul>
    </div>
    <h1>All Meals</h1>
    <div class='product-container'>
        <div class='product'>
            <h2>Bison Burger Club</h2>
            <img class='product-image' src="https://cdn.shopify.com/s/files/1/0509/5040/6310/products/M11339.png?v=1606886017&_accept=image/avif" />
            <p>Bison patty, pita bread, fresh vegetables, fries</p><br /><br />
            <Link to='/subscriptions'>More Info</Link><br />
            <Link to='/subscriptions'><button class='add-button'>Add to Order</button></Link>
        </div>
        <div class='product'>
            <h2>Cheese Blintzes with Wild Blueberry Sauce</h2>
            <img class='product-image' src="https://cdn.shopify.com/s/files/1/0509/5040/6310/products/B691.png?v=1606886051&_accept=image/avif" />
            <p>Cheese blintzes, blueberry sauce, fresh fruit, bacon</p>
            <Link to='/subscriptions'>More Info</Link><br />
            <Link to='/subscriptions'><button class='add-button'>Add to Order</button></Link>
        </div>
        <div class='product'>
            <h2>Chicken Bruscetta</h2>
            <img class='product-image' src="https://cdn.shopify.com/s/files/1/0509/5040/6310/products/M722.png?v=1606885994&_accept=image/avif" />
            <p>Chicken, lentils, rice, fresh vegetables</p><br /><br />
            <Link to='/subscriptions'>More Info</Link><br />
            <Link to='/subscriptions'><button class='add-button'>Add to Order</button></Link>
        </div>
        <div class='product'>
            <h2>Chicken Parmesan</h2>
            <img class='product-image' src="https://cdn.shopify.com/s/files/1/0509/5040/6310/products/M8231.png?v=1606885971&_accept=image/avif" />
            <p>Chicken, parmesan, marinara sauce, fresh vegetables, pasta, garlic toast</p>
            <Link to='/subscriptions'>More Info</Link><br />
            <Link to='/subscriptions'><button class='add-button'>Add to Order</button></Link>
        </div>
    </div>
    <div class='product-container'>
    <div class='product'>
            <h2>Grilled Tailgate Chicken</h2>
            <img class='product-image' src="https://cdn.shopify.com/s/files/1/0509/5040/6310/products/M8475.png?v=1606885940&_accept=image/avif" />
            <p>Chicken, roasted potatoes, fresh vegetables, bread</p>
            <Link to='/subscriptions'>More Info</Link><br />
            <Link to='/subscriptions'><button class='add-button'>Add to Order</button></Link>
        </div>
        <div class='product'>
            <h2>Red Velvet Pancakes</h2>
            <img class='product-image' src="https://cdn.shopify.com/s/files/1/0509/5040/6310/products/B3124.png?v=1606886079&_accept=image/avif" />
            <p>Pancakes, fresh fruit topping, fresh fruit, bacon</p><br />
            <Link to='/subscriptions'>More Info</Link><br />
            <Link to='/subscriptions'><button class='add-button'>Add to Order</button></Link>
        </div>
        <div class='product'>
            <h2>Steakhouse Sirloin Steak Sandwich</h2>
            <img class='product-image' src="https://cdn.shopify.com/s/files/1/0509/5040/6310/products/M8603.png?v=1606885914&_accept=image/avif" />
            <p>Sirloin strips, roasted potatoes, pita bread, fresh vegetables</p>
            <Link to='/subscriptions'>More Info</Link><br />
            <Link to='/subscriptions'><button class='add-button'>Add to Order</button></Link>
        </div>
    </div>
    {/* {allProducts.map((product, key) => (
        <Link key={key} to={`/product/${product.title}}`}>
        <h1>{product.title}</h1>
        </Link>
    ))} */}
    </>
);

export default ProductList;