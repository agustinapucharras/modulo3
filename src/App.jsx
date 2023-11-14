
import { useState } from 'react'
import Children from './Children'
import './App.css'
import MiComponente from './MiComponente'
import Titulo from './Titulo'
import Button from './boton'
import Navbar from './navbar'
import Imagen from './Imagen'
import BasicExample from './Card'

function App() {
  //iniciar unn estado
  const[pepito, setpepito] = useState('13 de noviembre'); 
  const[cont, setCont] = useState(0)

  function cambiarFecha(){
    setpepito('14 de noviembre')
  }

  function funSum(num){
    return num+2;
  }

  const title = "Hola amigos desde props";
  const content = "Hola desd otro props"

   
  return (
    <>

    <BasicExample/>
    <button onClick={() => setCont(cont + 1)}>{cont}</button>
    <Children title={title} content={content} sum={funSum}/>

    <Imagen/>
    <Navbar/>
      <h1>{pepito}</h1>
      <button onClick={cambiarFecha}>cambiar fecha</button>
      <Titulo description= "el app"/>
      <Titulo description= "el navbar"/>


      <Button/>
      <MiComponente/>
    </>
  )
}

export default App
