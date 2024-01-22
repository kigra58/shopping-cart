import React, { useContext } from "react";
import { Context } from "../../reducer/context";




const Checkout: React.FC = () => {
  const products = useContext(Context);

  const subTotalHandler=()=>{
    let sum=0;
     products.forEach((i)=>{
        sum +=i.price*i.quantity;
     });
     return +sum.toFixed(2);
  };

  return (
    <div className="card">
    <div className="card-header">
     <h5 className="card-title"> Order Summary </h5>

  </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item"> Subtotal     : {"  "}{subTotalHandler()} </li> 
        <li className="list-group-item"> Sales Tax    : {"  "} </li>
        <li className="list-group-item"> Coupon Code  : {"  "} </li>
        <li className="list-group-item"> Shipping Amount    : {"  "} </li>
        <li className="list-group-item"> Grand Total  : {"  "} </li>
        <button> Checkout </button>
      </ul>

    </div>
  );
};

export default Checkout;
