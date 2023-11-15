import { useState } from "react";
import { Form, Button } from "react-bootstrap";
function Formulario(){
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        mensaje: ''
    })

    function handleChange(e){
        const{name, value} = e.target
        setFormData({
            [name]:value
        })
    }

    function handleSubmit(e){
        e.preventDefault();
        console.log(formData)
    }

    return(
        <>
        <Form action="" onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label htmlFor="nombre">Nombre:</Form.Label>
                <Form.Control 
                type="text" 
                name="nombre" 
                id="nombre" 
                className=""
                placeholder="Ingrese su nombre"
                value={formData.nombre}
                onChange={handleChange} />
                
            </Form.Group>
            <Form.Group>
                <Form.Label htmlFor="email">Email:</Form.Label>
                <Form.Control 
                type="email" 
                name="email" 
                id="email" 
                className="" 
                placeholder="Ingrese su email"
                value={formData.email}
                onChange={handleChange}/>
            </Form.Group>
            <Form.Group>
                <Form.Label htmlFor="mensaje">Mensaje:</Form.Label>
                <Form.Control 
                type="text" 
                name="mensaje" 
                id="mensaje" 
                className="" 
                placeholder="Ingrese su mensaje"
                value={formData.mensaje}
                onChange={handleChange}/>
            </Form.Group>
            <Button variant="success" type="submit">Enviar mensaje</Button>

        </Form>
        </>
    )
}

export default Formulario;