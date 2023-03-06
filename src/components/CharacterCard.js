// import { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';


function CharacterCard(props){
    return (
        <Card>
            <img className='card-img-top' src={props.character.image} alt=""></img>
            <div className='card-body'>
                <h5 className='card-title'>{props.character.name}</h5>
                <p className='card-text'>Number of episodes: {props.character.episode.length}</p>
                <p className='card-text'>Location: {props.character.location.name}</p>
                <p className='card-text'>Origin: {props.character.origin.name}</p>
            </div>
        </Card>
    )
}

export default CharacterCard