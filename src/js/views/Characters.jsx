// src/components/Characters.jsx
import React, { useState, useEffect, useContext } from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import injectContext from '../store/appContext';
import { Link } from 'react-router-dom';

export const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const { favorites, addFavorite, removeFavorite } = useContext(injectContext);

  useEffect(() => {
    fetch('https://www.swapi.tech/api/people')
      .then(response => response.json())
      .then(data => setCharacters(data.results));
  }, []);

  const handleFavorite = (character) => {
    if (favorites.includes(character)) {
      removeFavorite(character);
    } else {
      addFavorite(character);
    }
  };

  return (
    <Container>
      <h2>Characters</h2>
      <Row>
        {characters.map(character => (
          <Col md={4} key={character.uid}>
            <Card className="mb-4">
              <Card.Img variant="top" src="https://via.placeholder.com/400x200" />
              <Card.Body>
                <Card.Title>{character.name}</Card.Title>
                <Card.Text>
                  Gender: {character.gender}<br />
                  Hair Color: {character.hair_color}<br />
                  Eye Color: {character.eye_color}
                </Card.Text>
                <Link to={`/character/${character.uid}`}>
                  <Button variant="primary">Learn more!</Button>
                </Link>
                <Button
                  variant={favorites.includes(character) ? 'danger' : 'outline-warning'}
                  onClick={() => handleFavorite(character)}
                  className="ml-2"
                >
                  {favorites.includes(character) ? 'Unfavorite' : 'Favorite'}
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
