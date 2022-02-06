import "./productCard.css";
import React from "react";

const productCard = (props) => {
    return (
        <div className="card-box" onClick={() => props.selectProduct(props.index)}>
            <img src={props.thumbnailURL} alt="Product-Thumbnail" className="thumbnail" />

            <div className="row product-details">
                <div className="product-name">{props.name}</div>
            </div>
        </div>
    );
}

export default productCard;