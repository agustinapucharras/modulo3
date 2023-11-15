import { useState } from "react";
import { Form } from "react-bootstrap";

function MiComponente(){

    const [field, setField] = useState('')
    function handleChange(e){
        setField(e.target.value) //obtengo el valor
    }
    return(
        <>
        <h2>Formulario de contacto</h2>
        <Form>
        <div className="mb-3"> 
        <label htmlFor="message">Mensaje:</label>
            <input type="text" id="message" name="message" onChange={handleChange} className="form-control" value={field} placeholder="escribe algo"/>
        </div>
      
        </Form>
      
        
        </>
    )
}
export default MiComponente;