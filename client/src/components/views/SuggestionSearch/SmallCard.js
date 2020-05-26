import React from 'react'

function SmallCard(props) {
    return (
        <a href={`/product/pet/${props.product._id}`} >
            <div className="small-card">
                <div className="small-card-image">
                    <img src={`http://localhost:5000/${props.product.images[0]}`} alt="productImage" />
                </div>
                <div className="small-card-info">
                    <div className="small-card-title" style={{ color: '#000' }}>{props.product.title}</div>
                    <div className="small-card-price">${props.product.price}</div>
                </div>
            </div>
        </a>
    )
}

export default SmallCard
