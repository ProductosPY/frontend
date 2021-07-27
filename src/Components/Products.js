import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';
import { BrowserRouter as Router } from 'react-router-dom';
import SidebarProducts from './SidebarProducts';

function Products() {
    return (
        <Router>
            <div class="row no-gutters">
                {/* <div class="col-6 col-md-4">
                    <SidebarProducts></SidebarProducts>
                </div> */}
                <div class="col-12 col-md-8">
                    <div class="card-deck"> 
                        <div class="card" style={{ width: '20rem' }}>
                            <img class="card-img-top" src="https://cdn.shopify.com/s/files/1/0501/3218/9340/products/IMG-20210129-WA0031.jpg?v=1611964113" alt="Card image cap"/>
                            <div class="card-body">
                                <h5 class="card-title">Tapabocas KN95</h5>
                                <p class="card-text">Comercial ABC S.A</p>
                                
                            </div>
                        </div>

                        <div class="card" style={{ width: '20rem' }}>
                            <img class="card-img-top" src="https://cdn.shopify.com/s/files/1/0501/3218/9340/products/IMG-20210129-WA0031.jpg?v=1611964113" alt="Card image cap"/>
                            <div class="card-body">
                                <h5 class="card-title">Tapabocas KN95</h5>
                                <p class="card-text">Comercial ABC S.A</p>
                                
                            </div>
                        </div>

                        <div class="card" style={{ width: '20rem' }}>
                            <img class="card-img-top" src="https://cdn.shopify.com/s/files/1/0501/3218/9340/products/IMG-20210129-WA0031.jpg?v=1611964113" alt="Card image cap"/>
                            <div class="card-body">
                                <h5 class="card-title">Tapabocas KN95</h5>
                                <p class="card-text">Comercial ABC S.A</p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Router> 
    )
}

export default Products;