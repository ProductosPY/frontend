import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';
import { BrowserRouter as Router } from 'react-router-dom';
import SidebarProducts from './SidebarProducts'; 
function Products() {
    return (
        <Router>
    
            <div className="ProducstView"> 
                <div class="container">

                <div class="row no-gutters">
                    <div class="col-6 col-md-4">
                        <SidebarProducts></SidebarProducts>
                    </div>

                <div class="col-12 col-md-8">
                
                    
                    <div class="card-deck">
                        
                        <div class="card">
                            <img class="card-img-top" src="" alt="Card image cap"/>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>

                        <div class="card">
                            <img class="card-img-top" src="..." alt="Card image cap"/>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>

                        <div class="card">
                            <img class="card-img-top" src="..." alt="Card image cap"/>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>

                        
                    </div>
                    </div>


                    </div>
        
                </div>
                </div>
            
        
               
    
            
        
        </Router> 
    )
}


export default Products 

