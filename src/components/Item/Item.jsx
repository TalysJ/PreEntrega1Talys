import './item.scss'
import React from 'react'
import ItemList from '../ItemList/ItemList'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const Item = ({info}) => {

    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={info.image} />
        <Card.Body>
          <Card.Title>{info.id}</Card.Title>
          <Card.Text>
            "Modelo:" {info.title}
            "Precio $:" {info.price}
          </Card.Text> 
          <Button variant="primary">Conocer mas</Button>
        </Card.Body>
      </Card>
    )

}

export default Item;