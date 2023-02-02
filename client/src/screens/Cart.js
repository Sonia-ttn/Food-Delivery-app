import React from 'react'
import { useCart, useDispatchCart } from '../components/ContextReducer';
import trash from "./trash.svg";
function Cart() {
    //data is type of array
    let data=useCart();
    let dispatch=useDispatchCart();

    if(data.length === 0){
        return (
            <div>
                <div className='m-5 w-100 text-center fs-3'>
                    Cart is empty!!
                </div>
            </div>
        )
    }
    let totPrice= data.reduce((total,food)=>total+food.price,0)

    const handleCheckout=async(req,res)=>{
        let userEmail=localStorage.getItem("email");
        let resp=await fetch("http://localhost:5000/api/orderData",{
            method:'POST',
            headers: {
                "Content-type": "application/json; charset=UTF-8",
              },
              body: JSON.stringify(
                // Add parameters here
                { 
                 email: userEmail ,
                 order_data:data,
                 order_date: new Date().toDateString() }
              )
        }
        )
        if(resp.status===200){
            res.send(<div>Order Placed!!</div>)
            dispatch({type:"DROP"})
        }
    }
  return (
    <>
    <div className='container m-auto mt-5 table-responsive table-responsive-sm table-responsive-md'>
      <table className='table table-hover'>
        <thead className='text-success fs-4'>
            <tr >
                <th className='col'>#</th>
                <th className='col'>Name</th>
                <th className='col'>Quantity</th>
                <th className='col'>Option</th>
                <th className='col'>Amount</th>
                <th className='col'></th>
            </tr>
        </thead>
        <tbody className='text-success fs-5'>
            {data.map((food,index)=>(
                <tr>
                    <th scope="row">{index+1}</th>
                    <td>{food.name}</td>
                    <td>{food.qty}</td>
                    <td>{food.size}</td>
                    <td>{food.price}</td>
                    <td>
                        <button type="button" className='btn p-0'>
                           <img alt="delete" src={trash} onClick={
                            ()=>{
                                 dispatch({ type: "REMOVE", index: index }) 
                           }
                        }/>
                            
                        </button>
                    </td>
                </tr>
            ))}
        </tbody>
      </table>
      <div><h1 className='fs-2'>Total Price: {totPrice}/-</h1></div>

      <div>
        <button className='btn bg-success mt-5 text-white' onClick={handleCheckout}>Check Out</button>
      </div>
    </div>
    </>
  )
}

export default Cart
