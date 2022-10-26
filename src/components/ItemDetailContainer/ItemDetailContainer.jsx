import React, { useState, useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'


const intro = {id: 1, image: "https://www.masterlogistica.es/wp-content/uploads/2022/02/maquinas-vending.jpeg", 
    title: "Reinassance Vending, la mejor opcion para ti, maquinas adaptables a todo lugar!"};

export const ItemDetailContainer = () => {

    const [data, setData] = useState({});

    useEffect(() => {
        const getData = new Promise(resolve => {
          setTimeout(() => {
            resolve(intro);
          }, 3000);
        });
    
        getData.then(res => setData(res));
    
      }, [])

    return (
        <ItemDetail data={data}/>
    )
}

export default ItemDetailContainer;