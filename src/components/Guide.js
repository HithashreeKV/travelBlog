// Guide.js
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './Guide.css'; // Ensure you have the correct path to your CSS file

const teachers = [
  {
    name: 'Mary',
    description: 'Expert in uncovering the rich history and cultural heritage of ancient cities and landmarks.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpi8AqjACwjlOOKIcaoGfIvDS4van81wHLfA&s', // Update with your image path
  },
  {
    name: 'Jane Smith',
    description: 'Focuses on city tours, highlighting modern attractions, vibrant nightlife, and culinary experiences.',
    image: 'https://cdn3.vectorstock.com/i/1000x1000/43/42/happy-cartoon-boy-young-character-portrait-vector-18964342.jpg', // Update with your image path
  },
  {
    name: 'Emily Johnson',
    description: 'Specializes in guiding through national parks, wildlife sanctuaries, and scenic natural landscapes.',
    image: 'https://thumbs.dreamstime.com/b/kid-boy-portrait-person-cartoon-child-cute-illustration-happy-male-character-school-face-young-smile-childhood-funny-hair-head-249590110.jpg', // Update with your image path
  },
];

const Guide = () => {
  return (
    <div className="guide-bg App-header">
      <Container className="guide-container">
        <h2>Meet Our Guides</h2>
        <Row>
          {teachers.map((teacher, index) => (
            <Col key={index} sm={12} md={6} lg={4}>
              <Card className="teacher-card">
                <Card.Img variant="top" src={teacher.image} alt={teacher.name} />
                <Card.Body>
                  <Card.Title>{teacher.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{teacher.subject}</Card.Subtitle>
                  <Card.Text>{teacher.description}</Card.Text>
                  <button class="btn" type="submit">Click here</button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Guide;
