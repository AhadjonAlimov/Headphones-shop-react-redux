import React from 'react'
import product_card from "../data/product_data";
import { useSelector, useDispatch } from 'react-redux';
import { addedItems } from '../redux/actions/cart';
import MainContent from "./mainContent";

const CardList = () => {
    const carts = useSelector(state => state.cart);
    const cartToAdd = carts.carts
    const dispatch = useDispatch();

    const addToBasket = (item) => {
        const itemIndex = cartToAdd.findIndex(
            (cardItem) => cardItem.id === item.id
        );
        if (itemIndex < 0) {
            const newItem = {
                ...item,
                quantity: 1
            };
            dispatch(addedItems([...cartToAdd, newItem]));
            // sessionStorage.setItem('myData', JSON.stringify([...cartToAdd, newItem]));
        } else {
            const newCart = cartToAdd.map((cartItem, index) => {
                if (index === itemIndex) {
                    return {
                        ...cartItem,
                        quantity: cartItem.quantity + 1
                    }
                } else {
                    return cartItem;
                }
            })
            dispatch(addedItems(newCart));
            // sessionStorage.setItem('myData', JSON.stringify(newCart));
        }
    }

  
    return (
        <div className="main_content">
            <p></p>
            <h3>Headphones</h3>
            {
                product_card.map((item) => {
                    return (
                        <MainContent key={item.id} {...item} addToBasket={addToBasket} />
                    )
                })
            }
        </div>
    )
}
export default CardList;
