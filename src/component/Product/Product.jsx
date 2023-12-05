import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {
    // console.log(props)
    const{img, name, seller, price, ratings} = props.product;

    const handleAddToCart =props.handleAddToCart
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <h4 className='product-name'>{name}</h4>
                <h3>Price : ${price}</h3>
                <p>Manufacture : {seller}</p>
                <p>Rating : {ratings} star</p>
                <button onClick={()=>handleAddToCart(props.product)} className='btn-cart'>
                    Add to Cart
                    <FontAwesomeIcon icon={faShoppingCart} />
                    </button>
            </div>
        </div>
    );
};

export default Product;