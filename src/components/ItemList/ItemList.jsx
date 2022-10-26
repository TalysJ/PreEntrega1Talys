import Item from "../Item/Item";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import React from "react";

const ItemList = ({data = []}) => {
    return(
        data.map(machines => <Item key={machines.id} info={machines} />)
    );
}

export default ItemList;