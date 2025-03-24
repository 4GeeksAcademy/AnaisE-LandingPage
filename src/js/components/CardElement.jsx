import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CardElement = () => {
  return (
    <Card className="w-25 mx-auto m-3">
      <Card.Img className="img-thumbnail" variant="top" src="https://picsum.photos/500/325" />
      <Card.Body>
        <Card.Title className="d-flex justify-content-center">Card Title</Card.Title>
        <Card.Text className="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium nihil delectus eaque laboriosam officia blanditiis.
        </Card.Text>
        <div className="d-flex justify-content-center">
          <Button variant="primary">Find out more!</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardElement;