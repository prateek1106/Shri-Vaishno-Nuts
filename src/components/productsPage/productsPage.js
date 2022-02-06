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

        <div className="page row">
            <div className="col-md-2">
            </div>
            <div className="col-12 content">
                <div className="col-12 heading-box">
                    <div className="heading-productpage">
                    Our Products
                    </div>
                    <div className="back-home">
                    <RouterLink exact to="/" style={{color: 'blue' ,textDecoration: 'underline' }}>Back To Home Page</RouterLink>
                    </div>
                </div>

                <hr className="line"/>

                {selectedProduct ? (
                    <div className="product-selected-box">  

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
                                    <div className="col-6 attribute-box">
                                        <div className="attribute">Grade:</div>
                                        <div className="attribute">Color:</div>
                                        <div className="attribute">Packaging Type:	</div>
                                        <div className="attribute">Processing Type:</div>
                                        <div className="attribute">Broken %age:	</div>
                                        <div className="attribute">Cultivation Type:</div>	
                                    </div>
                                    <div className="col-5 value-box">
                                        <div className="value">{selectedProduct.grade}</div>	
                                        <div className="value">{selectedProduct.color}</div>	
                                        <div className="value">{selectedProduct.packagingtype}</div>	
                                        <div className="value">{selectedProduct.processingtype}</div>	
                                        <div className="value">{selectedProduct.brokenage}</div>	
                                        <div className="value">{selectedProduct.cultivationtype}</div>	
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                ):(
                    <div></div>
                )}

                <hr className="line"/>

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