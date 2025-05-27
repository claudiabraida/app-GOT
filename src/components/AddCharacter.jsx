import {TextField, Box, Button, Stack} from "@mui/material"
import { useState } from "react";

  function AddCharacter({onCharacter}) {
    const [nombre, setNombre] = useState("")
    // const [imagen, setImagen] = useState("")
    // const [titulo, setTitulo] = useState("")
    // const [familia, setFamilia] = useState("")
    const [mensaje, setMensaje] = useState("")
      
    function cosa(e){
      e.preventDefault()
      // onCharacter(titulo)
      // onCharacter(familia)&& titulo.trim() === "" && familia.trim() === ""
      if(nombre.trim() === ""  ) {
        setMensaje("Completa todos los campos")
      } 
      
      else {
        onCharacter(nombre)
        setMensaje("")
        setNombre("")
        setTitulo("")
        setFamilia("")
      }
    }

  return (
    <form onSubmit={cosa}>
      <Box
       sx={{ 
      
        w: "38",
        display: "flex",
        gap:2,
        m: "auto"
        }}>
        <TextField id="Nombre" label="Nombre" variant="standard" value={nombre} size="small" onChange={(e) => setNombre(e.target.value)}/>
        {/* <TextField id="Título" label="Título"  variant="standard" value={titulo} size="small" onChange={(e) => setTitulo(e.target.value)} /> */}
        {/* <TextField id="Familia" label="Familia" variant="standard" value={familia} size="small" onChange={(e) => setFamilia(e.target.value)} /> */}
      </Box>
     
        <Stack sx={{m:2}}>
          <Button type="submit" variant="contained" sx={{ w: 102, m: "auto"}} onChange={()=> cosa(nombre)}  >Click me</Button>
        </Stack>
        <Box>
          {mensaje && <p>{mensaje}</p>}
        </Box>
    </form>
  
  );
}

export default AddCharacter