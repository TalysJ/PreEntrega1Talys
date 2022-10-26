// import { useState, useEffect, useParams } from "react";
// import ItemListContainer from "../ItemListContainer/ItemListContainer";
// import Menu from "../Menu/Menu";

// const machines = [
//     {id: 1, image: "https://www.coffeestore.com/pub/media/catalog/product/cache/36df071a6a74d076e30c6d739663438d/b/i/bianchi-vending-lei400-sawaria-l-evo-master-ic01-coffeestore.jpeg", category: 'snack',
//     title: "Bianchi", price: 1000},
//     {id: 2, image: "https://revistamundovending.com/wp-content/uploads/2018/03/Vending_Machine_Selecta_Unicum_partnership.jpg", category: 'snack',
//     title: "Selecta", price: 1500},
//     {id: 3, image: "https://cdn11.bigcommerce.com/s-xun5w23utl/images/stencil/400x400/products/7311/12561/ams-39-outdoor-snack-bottle-vending-machine__95958.1658495597.jpg?c=1", category: 'snack',
//     title: "AMS", price: 1200},
//     {id: 4, image: "https://www.vendtrade.co.uk/wp-content/media/product-images/Azkoyen_Palma_H87_Image.jpg", category: 'snack',
//     title: "Azkoyen", price: 2000},
//     {id: 5, image: "https://newebcdn-necta.evocagroup.com/sites/necta/files/images/family/2018_2526_0001_b_6.png", category: 'coffe',
//     title: "Brio Up", price: 1800},
//     {id: 6, image: "https://csa.lavazza.com/content/dam/lavazza/business/caffe/nuove-whumb-png-400x400/macchine-grandi-spazi-thumb/CONCERTO_X2_400.png.transform/9399e3b0ef5ea51f59780ce75e7107dd2e2826d4/img.png", category: 'coffe',
//     title: "Concerto", price: 2200},
//     {id: 7, image: "https://img.yumpu.com/19515964/1/500x640/manual-prezentare-automate-cafea-necta-kikko-max.jpg", category: 'coffe',
//     title: "Kikko Max", price: 2500},
//     {id: 8, image: "https://veq.ru/files/equip-dopfoto/equip-dopfoto-13602.png", category: 'coffe',
//     title: "SL1000", price: 1000},
//   ];


// function Home() {
//     const [filter, setFilter] = useState("");
//     const [machines, setVending] = useState([]);

//     const getData = async () => {
//         setTimeout(() => {
//             const machinesx =  machines;
//             setVending(vending);
//         }, 3000);

//     };

//     useEffect(() => {
//         getData();
//     }, []);

//     return (
//         <div className="principal_container">
//             <input
//             id="filter"
//             image="filter"
//             title="text"
//             price={filter}
//             onChange={(event) => setFilter(event.target.value)}
//             />

//             <div className="cards-container">
//                 {machines
//                     .filter((machines) => machines.title.incluides(filter))
//                     .map((machines, i) => (
//                         <card
//                             id={i}
//                             key={i}
//                             title={machines.title}
//                             image={machines.image}
//                             price={machines.price}
//                         />

//                     ))}
//             </div>
//         </div>
//     );
// }

// export default Home;