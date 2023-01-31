import React from 'react'

function Card(props) {
  let options=props.options;
  let priceOptions=Object.keys(options);
  

  return (
    <div>
    <div className="card mt-3 " style={{ width: "19rem","maxHeight":"464px" }}>
      <img src="https://source.unsplash.com/random/" className="card-img-top" alt="..." style={{ "maxHeight":"280px" }}/>
      <div className="card-body">
        <h5 className="card-title">{props.foodName}</h5>
        <p className="card-text">{props.description}</p>
        <div className="container w-100" >
          <select className="m-2 h-100  bg-success rounded">
            {Array.from(Array(6),(e,i)=>{
              return(
                <option key={i+1} value={i+1}>{i+1}</option>
              )
            })
            }
          </select>

          <select className="m-2 h-100  bg-success rounded">{priceOptions}
            {priceOptions.map((data)=>{
              return <option key={data} value={data}>{data}</option>
})}
          </select>

          <div className="d-inline h-100 fs-5">
            Total price
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Card