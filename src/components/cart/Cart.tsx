import React, { useContext} from "react";
import { Context, DispatchContext, IProduct } from "../../reducer/context";
import Checkout from "./Checkout";

const Cart: React.FC = () => {
  const products = useContext(Context);
  const dispatch = useContext(DispatchContext);
 

  const quantityHandler = (product: IProduct, from: string) => {
    switch (from) {
      case "INC":
        dispatch({
          type: "updateQuantity",
          currData: { ...product, quantity: product.quantity + 1 , total:+(product.quantity+1*product.total).toFixed(2)},
        });
        break;
      case "DEC":
        if (product.quantity > 1) {
          dispatch({
            type: "updateQuantity",
            currData: { ...product, quantity: product.quantity - 1,total:+(product.quantity-1*product.total).toFixed(2) },
          });
        }
        break;
      default:
        break;
    }
  };

  const inputQuantityHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
    product: IProduct
  ) => {
    /**
     *  HANDLE FOR ZERO QUANTITY
     */
    dispatch({
      type: "updateQuantity",
      currData: { ...product, quantity: +e.target.value  },
    });
  };

  const removeProduct = (product: IProduct) => {
    dispatch({
      type: "removeItem",
      currData: product,
    });
  };



  return (
    // <div className="mx-auto card text-dark bg-light mb-3 " style={{height:500, width:1000}}>
    <div >
      <div className="row">
        {/* CART DETAILS  */}
        <div className="col-10">
          <div className="card text-dark bg-light mb-3 shadow">
            <div className="card-header ">
            <h5 className="card-title">Shopping Cart </h5>
            </div>
            <div className="card-body">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">SN</th>
                    <th scope="col">Product</th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {products &&
                    products.length > 0 &&
                    products.map((it: IProduct, index) => {
                      return (
                        <tr key={it?.id}>
                          <th scope="row">{index + 1}</th>
                          <td>
                            <img
                              className="p-1"
                              width={100}
                              height={100}
                              src={it?.image}
                              alt=""
                            />
                            <br />
                            {it?.title}
                          </td>
                          <td>{it?.price}</td>
                          <td>
                            <button onClick={() => quantityHandler(it, "DEC")}>
                              <strong> - </strong>{" "}
                            </button>

                            <input
                              className="text-center"
                              style={{ width: 50 }}
                              type="text"
                              value={it?.quantity}
                              onChange={(e) => inputQuantityHandler(e, it)}
                            />
                            <button onClick={() => quantityHandler(it, "INC")}>
                              <strong> + </strong>{" "}
                            </button>
                          </td>
                          <td>
                            {+(it?.price * it.quantity).toFixed(2)}
                            <button onClick={() => removeProduct(it)}>
                               X 
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* CHECKOUT  */}
        <div className="col-2">
          <Checkout  />
        </div>
      </div>
    </div>
  );
};

export default Cart;
