import React from 'react';
import { Card, Button } from 'react-bootstrap';

const News = (props) => {
    

    return (
        <div>

                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                                <Card.Title>title</Card.Title>
                                <Card.Text>
                                    <h5>DetailedHTMLPropsReact.HTMLAttributes HTML HeadingElement</h5>
                                    description
                                </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>


                {/* <Card>
                    <Card.Header>Featured</Card.Header>
                        <Card.Body>
                            <Card.Title>Special title treatment</Card.Title>
                            <Card.Text>
                            With supporting text below as a natural lead-in to additional content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card> */}
        </div>
    );
};

export default News;