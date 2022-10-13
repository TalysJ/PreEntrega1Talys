import React from "react";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import Card from "react-bootstrap/Card";

export const Title = (props) => {
    return (

        <p>
           {props.greeting} 
        </p>
    );
  }
  
  export default Title;