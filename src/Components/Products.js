import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';

function Products() {
    return (
       
    <div className="ContentProduct">
<div class="container">
        <div className="ProducstView"> 
            <div class="row">
                <div class="col-12 col-sm-6 col-lg-4">
                    <div class="card-body">
                        <Card style={{ width: '18rem' }} className="item">
                            <Card.Img variant="top" src="https://source.unsplash.com/user/erondu/600x400" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                Some Custom text one can write here
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>

                <div class="col-12 col-sm-6 col-lg-4">
                    <div class="card-body">
                        <Card style={{ width: '18rem' }} className="item">
                            <Card.Img variant="top" src="https://source.unsplash.com/user/erondu/600x400" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                Some Custom text one can write here
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>

                <div class="col-12 col-sm-6 col-lg-4">
                    <div class="card-body">
                        <Card style={{ width: '18rem' }} className="item">
                            <Card.Img variant="top" src="https://source.unsplash.com/user/erondu/600x400" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                Some Custom text one can write here
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>

            <div class="col-12 col-sm-6 col-lg-4">
                <div class="card-body">
                    <Card style={{ width: '18rem' }} className="item">
                        <Card.Img variant="top" src="https://source.unsplash.com/user/erondu/600x400" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some Custom text one can write here
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    </div>
    
    
  </div>
  </div>
      
    )
}


export default Products 

