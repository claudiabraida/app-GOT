import { useState } from "react";
import charactersGOT from "./data.js";
/* Material UI */

/* Components */
import Header from "./components/Header.jsx";
import ContainCard from "./components/ContainCard.jsx";
import AddCharacter from "./components/AddCharacter.jsx";

function App() {
  
const [characters, setCharacters] = useState(JSON.parse(localStorage.getItem("character")) || charactersGOT);

  console.log(characters);

  function onCharacter () {
    const newCharacter = {

    id: crypto.randomUUID(),
    firstName: "",
    lastName: "",
    fullName: "",
    title: "",
    family: "",
    image: "",
    imageUrl: "",
    }
    const newArray = [...characters, newCharacter]
    localStorage.setItem("character", JSON.stringify(characters))
    setCharacters(newArray)
  }

  function deleteCharacter (id) {
    localStorage.setItem("character", JSON.stringify(characters))
    setCharacters(characters.filter(c => c.id != id))

  }

  return <>
   <Header />
   <AddCharacter onCharacter={onCharacter}  />
   <ContainCard characters={characters}  deleteCharacter={deleteCharacter} />
  </>;
}

export default App;
