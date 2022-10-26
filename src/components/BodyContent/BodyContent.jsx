import './BodyContent.scss';
import Card from "react-bootstrap/Card";
import Title from '../Title/Title';
import ItemCount from '../ItemCount/ItemCount';

const BodyContent = ({greeting}) => {

  return (
    <div className='slogan'>
    <br/>
            <Card style={{ width: '18rem' }}>
        <Card.Body className='slogan-card'>
          <Card.Title>Renaissance Vending</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">El mejor cafe en todo lugar</Card.Subtitle>
          <Card.Text>
            Las Vending Machines son el futuro y es por eso que en Renaissance Vending te ofrecemos el mejor cafe con la mejor experiencia
          </Card.Text>
          <Card.Link href="#">Maquinas cafe</Card.Link>
          <Card.Link href="#">Maquinas Sandwiches</Card.Link>
        </Card.Body>
      </Card>
    </div>
);

}

export default BodyContent;