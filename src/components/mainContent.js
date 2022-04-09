import React from 'react'

const MainContent = ({id, product_name, description, thumb, price, addToBasket}) => {

    return (
        <div className="card" key={id}>
            <div className="card_img">
                <img src={thumb} />
            </div>
            <div className="card_header">
                <h2>{product_name}</h2>
                <p>{description}</p>
                <p className="price">{price}<span>$</span></p>
                <div className="btn" onClick={() => addToBasket({id, product_name, price, thumb})}>Add to cart</div>
            </div>
        </div>
    )
}
export default MainContent;
