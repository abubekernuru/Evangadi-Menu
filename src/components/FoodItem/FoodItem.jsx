import React, { Component } from 'react'
import './FoodItem.css'
class FoodItem extends Component {
    render() {
        const { title, price, description, img, category } = this.props;
        return (
            <div className="single-food">
                <div className="img">
                    <img
                        src={img}
                        alt={title}
                    />
                </div>
                <div className="title-price">
                    <h3>{title}</h3>
                    <p>${price}</p>
                </div>
                <div className="food-desc">
                    {description}
                    <span className="category">{category}</span>
                </div>
            </div>
        );
    }
}

export default FoodItem;