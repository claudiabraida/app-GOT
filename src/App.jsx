import { useState } from "react";
import charactersGOT from "./data.js";
/* Material UI */

/* Components */
import Header from "./components/Header.jsx";
import ContainCard from "./components/ContainCard.jsx";
import AddCharacter from "./components/AddCharacter.jsx";
import Banner from "./components/Banner.jsx";

function App() {
  
const [characters, setCharacters] = useState(JSON.parse(localStorage.getItem("character")) || charactersGOT);

  console.log(characters);

  function onCharacter (imageUrl) {
   
    const newCharacter = {

    id: crypto.randomUUID(),

//     https://hp-api.onrender.com/api/characters
// https://hp-api.onrender.com/
//     // id:i,
    // firstName: "",
    // lastName: "",
    // fullName: fullName,
    // title: title,
    // family: family,
    // image: "",
    imageUrl:imageUrl,
    }
    const newArray = [...characters, newCharacter]
    localStorage.setItem("character", JSON.stringify(newArray))
    setCharacters(newArray)
  }

  function deleteCharacter (id) {
    const charactersFilter = characters.filter(c => c.id != id)
    localStorage.setItem("character", JSON.stringify(charactersFilter))
    setCharacters(charactersFilter)

  }

  return <>
   <Header />
   <Banner />
   <AddCharacter onCharacter={onCharacter} />
   <ContainCard characters={characters}  deleteCharacter={deleteCharacter}  />
  </>;
}

export default App;
