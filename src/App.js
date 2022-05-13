import './App.css';
import Card from './mycard';

import { useState } from 'react';

function App() {

  const [details,setdetails] = useState([
    {
    imageUrl:"https://cdn.shopify.com/s/files/1/0863/9530/products/TECHNICIAN_BLACK_FRONT_400x.jpg?v=1629239588",
    title:"men shirt",
    price:"$50",
    quantity:"22",
    size:"34",
    description:"THE ULTIMATE LIGHTWEIGHT ACTIVE TEE",},
    {imageUrl:"https://cdn.shopify.com/s/files/1/0863/9530/products/MLS_WHT1_400x.jpg?v=1624486102",
    title:"men shirt",
    price:"$50",
    quantity:"27",
    size:"42",
    description:"THE ULTIMATE LIGHTWEIGHT ACTIVE TEE",
    },
    {imageUrl:"https://cdn.shopify.com/s/files/1/0863/9530/products/MLS_BAH1_400x.jpg?v=1627422733",
    title:"uujjijknkkfv",
    price:"$50",
   quantity:"17",
    size:"44",
    description:"THE ULTIMATE LIGHTWEIGHT ACTIVE TEE",
    },
    {imageUrl:"https://cdn.shopify.com/s/files/1/0863/9530/products/LOW-PRO_HOODY_PHOENIX-LS_FRONT_400x.jpg?v=1627422733",
    title:"men shirt",
    price:"$50",
   quantity:"02",
    size:"38",
    description:"THE ULTIMATE LIGHTWEIGHT ACTIVE TEE",
    },
    {    imageUrl:"https://cdn.shopify.com/s/files/1/0863/9530/products/SKULL_LS_NVY_1_SQ_2048x_70364b03-3e75-4e7d-b582-bcd3c5ce0bc0_400x.jpg?v=1606867069",
title:"men shirt",
    price:"$50",
 quantity:"03",
    size:"48",
    description:"THE ULTIMATE LIGHTWEIGHT ACTIVE TEE",
    },
    {title:"men shirt ",
    price:"$50",
        imageUrl:"https://cdn.shopify.com/s/files/1/0863/9530/products/MLS_CHH1_f2740d83-15e7-45d4-9cbb-39e51298edd6_400x.jpg?v=1627422733",

    quantity:"12",
    size:"32",
    description:"THE ULTIMATE LIGHTWEIGHT ACTIVE TEE",
    },
      ])
    
  return (
    <>
   
  
  <div className='main'>
      {
        details.map((e)=>(
          <Card img={e.imageUrl} 
           description={e.description}
           title={e.title}
           size={e.size}
            price={e.price} 
           
             quan={e.quantity} 
             />
        
        
          ))
        }
       
       </div>
  
    </>
    );
      }

                                                                        export default App;