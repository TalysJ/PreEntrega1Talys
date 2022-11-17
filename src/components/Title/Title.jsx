import './Title.css'
import React from "react";
// import ItemListContainer from "../ItemListContainer/ItemListContainer";
// import Card from "react-bootstrap/Card";
// import ItemCount from "../ItemCount/ItemCount";
// import BodyContent from "../BodyContent/BodyContent";

export const Title = ({texto}) => {

    return (

        <h3 className='bg-dark text-light'>
           {texto = `Haz que comprar sea una gran experiencia!`} 
        </h3>
    );
  }
  
  export default Title;