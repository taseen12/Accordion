import React, { useState } from 'react'
import data from './data';
import './styles.css';

const Accordian = () => {
  const [item,setItem] = useState(null); 
  function handleClick(current_id){
   setItem(current_id == item ? null:current_id)
  }
    return (
        <div className='wrapper'>
          <div className='accordian'>
            {data  && data.length > 0 ?
            data.map(dataItem => <div className='item'><div onClick ={()=>handleClick(dataItem.id)}className='title'><h3>{dataItem.question}</h3>{item == dataItem.id ? <span>(-)</span>:null }
            {item == dataItem.id ? null : <span>+</span>}
            </div>
            {
              item == dataItem.id ? <div className='answer'>
                {dataItem.answer}</div> : null
              
            }</div> 
            )
             : <div>data not found</div>}
          </div>
      
      </div>
    )
  }

export default Accordian