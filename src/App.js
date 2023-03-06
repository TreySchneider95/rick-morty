import './App.css';
import { useEffect, useState } from 'react';
import CharacterTable from './components/CharacterTable'

const DATA_URL = "https://rickandmortyapi.com/api/character"

function App() {

  const [characters, setCharaters] = useState()

  useEffect(()=>{
    fetch(DATA_URL)
    .then((result)=>result.json())
    .then((result)=>{
      setCharaters(result.results)
    })
  }, [])

  return (
    <div className="App">
      <h1>Rick & Morty</h1>
      <CharacterTable characters={characters || []}/>
    </div>
  );
}

export default App;
