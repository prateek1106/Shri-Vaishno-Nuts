import React from 'react';
import "./productsPage.css";
import Navbar from '../navbar/Navbar';
import ProductCard from '../productCard/productCard';
import products from '../../models/products'; 
import { Link as RouterLink } from 'react-router-dom';
import { useState } from 'react';
import CancelIcon from '@material-ui/icons/Cancel';

const ProductsPage = () => {

    const [selectedProduct,setSelectedProduct] = useState(0);
    const [yOffset,setYOffset] = useState(0);

    const selectProduct = (index) => {
        //console.log(index);
        setYOffset(window.pageYOffset);
        setSelectedProduct(products[index]);
        window.scrollTo({
            top: 150,
            behavior: 'smooth',
        });
    };

    const deselectProduct = () => {
        setSelectedProduct(0);
        window.scrollTo({
            top: yOffset,
            behavior: 'smooth',
        });
        setYOffset(0);
    }

    return (
        <div className='wrapper'>
        
        <Navbar/>

        <div className="products-page ">
            <div className="col-12 content">

                <div className="col-12 heading-box">
                    <div className="heading-productpage">
                    Our Products
                    </div>
                </div>

                {selectedProduct ? (
                    
                    <div className="product-selected-box">  
                    <hr className="line"/>

                    <div className="close-row-mobile">
                        <p className="close-link" onClick={()=> deselectProduct()}>
                            <CancelIcon fontSize="large"/>
                        </p>
                    </div>  

                    <div className="row">
                        <div className="col-xs-12 col-lg-5 selected-image">
                            <ProductCard 
                                key={selectedProduct.id}
                                index={selectedProduct.id-1}
                                name={selectedProduct.name} 
                                thumbnailURL={selectedProduct.thumbnailURL}
                                selectProduct={selectProduct}
                            /> 
                        </div>
                        <div className="col-xs-12 col-lg-7 ">
                                
                            <div className="close-row-desktop">
                                <p className="close-link" onClick={()=> deselectProduct()}>
                                    <CancelIcon fontSize="large"/>
                                </p>
                            </div>  

                            <div className="selected-details">
                                <div className="row selected-details-box">
                                    <br></br>
                                    <div className="attribute-points col-12">
                                        <b>Grade:</b> &nbsp;
                                        {selectedProduct.grade}
                                    </div>
                                    <div className="attribute-points col-12">
                                        <b>Color:</b> &nbsp;
                                        {selectedProduct.color}
                                    </div>
                                    <div className="attribute-points col-12">
                                        <b>Processing Type:</b> &nbsp;
                                        {selectedProduct.processingtype}
                                    </div>
                                    <div className="attribute-points col-12">
                                        <b>Broken %age:</b> &nbsp;
                                        {selectedProduct.brokenage}
                                    </div>
                                    <div className="attribute-points col-12">
                                        <b>Cultivation Type:</b> &nbsp;
                                        {selectedProduct.cultivationtype}
                                    </div>
                                    <div className="attribute-points col-12">
                                        <b>Packaging Type:	</b> &nbsp;
                                        {selectedProduct.packagingtype}
                                    </div>
                                        	
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="line"/>
                </div>
                ):(
                    <div></div>
                )}

                <div className="software-box">
                <div className="row">
                    {products.map((product) => (
                        <div className="col-xs-12 col-sm-6 col-sm-6 col-md-4 col-lg-3">   
                            <ProductCard 
                                key={product.id}
                                index={product.id-1}
                                name={product.name} 
                                thumbnailURL={product.thumbnailURL}
                                selectProduct={selectProduct}
                            />  
                        </div>
                    ))}

                    </div>
                </div>
            </div>
        </div>  
        </div>
    )
}

export default ProductsPage;