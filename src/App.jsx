
//import { useState } from 'react'
//import Children from './Children'
//import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import Formulario from './Formulario'
import MiComponente from './MiComponente'
//import Titulo from './Titulo'
//import Button from './boton'
//import Navbar from './navbar'
//import Imagen from './Imagen'
//import BasicExample from './Card'
//import Contenido from './Content/Contenido'
import NavBar from './NavBar/Navbar'
//import './Content/contenedorCard.css'

function App() {
  //iniciar unn estado
 /* const[pepito, setpepito] = useState('13 de noviembre'); 
  const[cont, setCont] = useState(0)

  function cambiarFecha(){
    setpepito('14 de noviembre')
  }

  function funSum(num){
    return num+2;
  }

  const title = "Hola amigos desde props";
  const content = "Hola desd otro props"

   */
  return (
    <>
    <Routes>
      <Route path='/contacto' element={NavBar}/>
      <Route path='/sobreNosotros' element={Formulario}/>

    </Routes>

    <Link to=''>Inicio</Link>
    <Link to='./contacto'>Contacto</Link>
    <Link to='./sobreNosotros'>Formulario</Link>

    <h1>Formulario</h1>
    <Formulario/>
     {/*   <MiComponente/>*/}   

    {/*<NavBar/>
    <Contenido/>
    <div className='container '>
      <footer>
        <div className='contenedor'>
        <div >
          <img src="data:image/jpeg;base64,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" alt="" />
        </div>
        <div style={{color:'white'}}>Acerca de Nosotros</div>
        </div>
        
      </footer>
      </div> */}
   {/* <BasicExample/>
    <button onClick={() => setCont(cont + 1)}>{cont}</button>
    <Children title={title} content={content} sum={funSum}/>

    <Imagen/>
    <Navbar/>
      <h1>{pepito}</h1>
      <button onClick={cambiarFecha}>cambiar fecha</button>
      <Titulo description= "el app"/>
      <Titulo description= "el navbar"/>


      <Button/>*/ }
    </>
  )
}

export default App
