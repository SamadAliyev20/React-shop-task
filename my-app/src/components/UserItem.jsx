import React from 'react'

const UserItem = (props) => {
   const { id,image,title,price,description} = props.pr
  return (

                <div className="col-lg-4 cards " key={id}>
                <div className="card mycard my-5">
                <img className="card-img-top" src={image} alt="Card image cap"/>
                 <div className="card-body">
                  <h5 className="card-title">{title}</h5>
                  <p style={price > 100 ? {color:"red"} : {color:"green"}} className="card-text fw-bold">{price} AZN</p>
                  <p className="card-text">{description.length > 10 ? description.slice(0, 50) + "..." : description}</p>
                  </div>
                </div>
                </div>
  )
}

export default UserItem