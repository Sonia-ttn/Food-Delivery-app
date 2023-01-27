import React from 'react'

function Card() {
  return (
    <div>
    <div className="card mt-3 " style={{ width: "18rem","maxHeight":"450px" }}>
      <img src="https://source.unsplash.com/random/" className="card-img-top" alt="..." style={{ "maxHeight":"280px" }}/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is imp text.</p>
        <div className="container w-100" >
          <select className="m-2 h-100  bg-success rounded">
            {Array.from(Array(6),(e,i)=>{
              return(
                <option key={i+1} value={i+1}>{i+1}</option>
              )
            })
            }
          </select>

          <select className="m-2 h-100  bg-success rounded">
            <option value="half">Half</option>
            <option value="half">Full</option>

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