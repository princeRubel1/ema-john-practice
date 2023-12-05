import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';

const Shop = () => {
    const [products, setProduct] = useState([]);
    const [cart ,setCart] = useState([]);

    useEffect(() =>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProduct(data))

    },[])
    
    useEffect(() =>{
        const storedCart = getShoppingCart();
        const savedCart = [];
        // step 1
        for(const id in storedCart){
            // step 2 get the product by id 
            const addedProduct = products.find(product => product.id === id)
            console.log(addedProduct);
            // step 3 get quantity of the product 
         if(addedProduct){
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            // step 5 add the added product to the saved cart
            savedCart.push(addedProduct);
         }
        }
        setCart(savedCart);
        
    },[products])

        const handleAddToCart=(product)=>{
            // cart.push(product);
            let newCart = [];
            // const newCart =[...cart, product];
            // if product doesnt exist in the cart, then set quantity =1
            // if exist update quantity by 1
            const exists = cart.find(pd => pd.id === product.id);
            if(!exists){
                product.quantity = 1;
                newCart = [...cart, product]
            }
            else{
                exists.quantity = exists.quantity + 1;
                const remaining = cart.filter(pd => pd.id !== product.id);
                newCart = [...remaining, exists]
            }
            setCart(newCart)
            addToDb(product.id)
        }

    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Product
                      key ={product.id}
                      product ={product}
                    handleAddToCart={handleAddToCart}
                    ></Product>)
                }
              
             </div>
             <div className="cart-container">
                <Cart cart={cart}></Cart>
             </div>
        </div>
        
    );
};

export default Shop;