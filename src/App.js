import React from 'react';
import './style.css';
import Prodect from './Prodect';

export default function App() {
 const data=["nithish","react","javascript"]
 
  return (
    <div>


      {data.map(i=>{
       return  <Prodect item={i} />
      })
      }
     
    </div>
  );
}
