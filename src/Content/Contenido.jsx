import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Imagen from '../Imagen';
import '../Content/contenedorCard.css'

function Contenido() {
  return (
  <>
   <div className='contenedorCard'>
   <Card style={{ width: '18rem'}}>
      <Card.Img variant="top" src="https://img.freepik.com/vector-gratis/diseno-vectores-coloridos-manzana_341269-1123.jpg?size=338&ext=jpg&ga=GA1.1.1880011253.1699747200&semt=sph" />
      <Card.Body>
        <Card.Title>Iphone 14 pro max</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Añadir al carrito</Button>
      </Card.Body>
    </Card>
</div>
  </>
   
  
  );
}

export default Contenido;