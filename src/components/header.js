import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addedItems } from '../redux/actions/cart';

export default function Header() {
    const [isCartOpen, setCartOpen] = useState(false)
    const carts = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const cartToAdd = carts.carts

    const totalPrice = cartToAdd.reduce((sum, el) => {
        return sum + el.price * el.quantity
    }, 0)

    const removeItem = (itemId) => {
        const newCartFilter = cartToAdd.filter(item => item.id !== itemId)
        dispatch(addedItems(newCartFilter))
    }

    const renderCart = (arr) => {
        if (arr.length === 0) {
            return <h4 style={{color: "white"}}>Cart is empty</h4>
        }
        return arr.map((item, index) => {
            return (
                <li className="clearfix" key={index}>
                    <img src={item.thumb} alt="item1" width={70} />
                    <span className="item-name">{item.product_name}</span>
                    <span className="item-price">${item.price}</span>
                    <span className="item-quantity">Quantity:{item.quantity}</span>
                    <button className="delBtn" onClick={() => removeItem(item.id)}>
                        <i className="fa-solid fa-trash-can delIcon"></i>
                    </button>
                </li>
            )
        })
      }

    const element = renderCart(cartToAdd)

    return (
        <>
            <nav>
                <div className="logo">Rayes.</div>
                <ul>
                    <li>Home</li>
                    <li>Our Products</li>
                    <li>About Us</li>
                    <li>Contact</li>
                </ul>
                <div className="search">
                    <button className="navBtn searchBtn">
                        <i className="fa fa-search"></i>
                    </button>
                    <button onClick={() => setCartOpen(!isCartOpen)} className="navBtn cartBtn">
                        <i className="fa fa-shopping-basket"></i>
                        <span className="numAddedCarts">{cartToAdd.length}</span>
                    </button>
                </div>
            </nav>
            <div className={"shopping-cart" + (isCartOpen ? " isCartOpen" : " closeCart")}>
                <div className="shopping-cart-header">
                    <i className="fa fa-shopping-cart cart-icon"></i><span className="badge">{cartToAdd.length}</span>
                    <div className="shopping-cart-total">
                        <span className="lighter-text">Total:</span>
                        <span className="main-color-text"> {totalPrice} $</span>
                    </div>
                </div>
                <ul className="shopping-cart-items">
                    {element}
                </ul>
                <a href="#" className="button">Buy Now</a>
            </div>
        </>
    )
}
