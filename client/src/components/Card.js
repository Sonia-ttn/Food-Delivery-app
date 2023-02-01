import React, {useRef, useEffect, useState } from 'react'
import { useCart, useDispatchCart } from './ContextReducer';

function Card(props) {
  let data=useCart();
  const [qty,setQty]=useState(1);
  const [size,setSize]=useState("");
  const priceRef=useRef();
  let options=props.options;
  let priceOptions=Object.keys(options);
  let dispatch=useDispatchCart();


  const handleCart=async()=>{
    await dispatch({type:"ADD",id:props.foodItem._id,
    name:props.foodItem.name,price:price,
    qty:qty,size:size
  })
  console.log(data)
  }
  let price=qty * parseInt(options[size]);

  useEffect(()=>{
    setSize(priceRef.current.value)
  },[])

  return (
    <div>
    <div className="card mt-3 " style={{ width: "19rem","maxHeight":"464px" }}>
      
     <img src={props.foodItem.img} className="card-img-top" alt="..." style={{ "maxHeight":"280px" ,"height":"160px" ,"objectFit":"fill"}}/>
      <div className="card-body"> 
        <h5 className="card-title">{props.foodItem.name}</h5>
        <p className="card-text">{props.foodItem.description}</p>
        <div className="container w-100" >
          <select className="m-2 h-100  bg-success text-white rounded" onChange={(e)=>setQty(e.target.value)}>
            {Array.from(Array(6),(e,i)=>{
              return(
                <option key={i+1} value={i+1}>{i+1}</option>
              )
            })
            }
          </select>

          <select className="m-2 h-100  bg-success text-white rounded" ref={priceRef} onChange={(e)=>setSize(e.target.value)}>{priceOptions}
            {priceOptions.map((data)=>{
              return <option key={data} value={data}>{data}</option>
})}
          </select>

          <div className="d-inline h-100 fs-5">
             ₹ {price} /-
          </div>
        </div>
        <hr/>
        <button className='btn btn-success  text-black justify-center ms-2' onClick={handleCart}>Add to Cart</button>
      </div>
    </div>
  </div>
  )
}

export default Card