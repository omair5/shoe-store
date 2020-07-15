import React from 'react';
import { useParams } from 'react-router-dom'
import { Data } from '../../data'
import './style.css'
const ProductItem = () => {
    // LOGIC
    const { productName } = useParams()
    const [displayData] = Data.filter((value) => (value.name === productName))
    console.log(displayData)

    // UI
    return (
        <div className="container">
            <h1>{displayData.name}</h1>
            <img src={displayData.imageURL} alt="product" style={{ width: "450px", height: "450px" }} />
            <h3>Brand: {displayData.brand}</h3>
            <h3>Price: {`$${displayData.price}`}</h3>
            <h1>DESCRIPTION</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum possimus fugit aliquam libero, incidunt,
                sint velit impedit deserunt, quod nisi at quasi exercitationem. Nostrum libero soluta totam voluptatum,
                 eius ullam.
            </p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum possimus fugit aliquam libero, incidunt,
                sint velit impedit deserunt, quod nisi at quasi exercitationem. Nostrum libero soluta totam voluptatum,
                 eius ullam.
            </p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum possimus fugit aliquam libero, incidunt,
                sint velit impedit deserunt, quod nisi at quasi exercitationem. Nostrum libero soluta totam voluptatum,
                 eius ullam.
            </p>

        </div>
    );
}

export default ProductItem;