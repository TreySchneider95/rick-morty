// import { useEffect, useState } from 'react';
import CharacterCard from './CharacterCard';
import { Container, Row, Col } from 'react-bootstrap';

function CharacterTable(props){

    const cards = props.characters.map((character, index)=>{
        return (
            <CharacterCard key={index} character={character}/>
        )
    })

    return (
        <Container>
            <Row>
                <Col>
                    {cards}
                </Col>
            </Row>
        </Container>
    )
}

export default CharacterTable