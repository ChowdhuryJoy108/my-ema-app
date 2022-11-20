import React from 'react';
import { useParams } from 'react-router-dom';
import fakaData from '../../fakeData/products.json'
import Product from '../Product/Product';

const ProductDetail = () => {
    const {productid} = useParams();
    const product = fakaData.find(pd => pd.id === productid);
    console.log(product);
    return (
        <div>
            <p>{productid} Details of {product.name} comming Soon!</p>
            <Product showAddToCartButton={false} product={product} />
        </div>
    );
};

export default ProductDetail;