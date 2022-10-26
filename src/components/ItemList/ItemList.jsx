import Item from "../Item/Item";
import React from "react";
import { useParams } from "react-router-dom";


const ItemList = ({data}) => {
    
    const {categoryId} = useParams()
    
    return(
        
        categoryId ?
        data
        .filter((machines => machines.category === categoryId))
        .map(machines => <Item key={machines.id} info={machines} />)
        :data
        .map(machines => <Item key={machines.id} info={machines}/>)
    );
}

export default ItemList;