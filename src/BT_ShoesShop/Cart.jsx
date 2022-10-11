import React from "react";

const Cart = ({ isOpen, onClose, carts, onChangeQuantity, calcTotal,payment }) => {

  if (!isOpen) {
    return null;
  }
  
  return (
    <div>
      <div
        className="modal fade show d-block"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Shop cart
              </h1>
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={onClose}
              />
            </div>
            <div className="modal-body modal__carts">
              <table className="table text-center">
                <thead>
                  <tr>
                    <th>STT</th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Price</th>

                  </tr>
                </thead>
                <tbody>
                  {carts.map((item, index) => (
                    <tr key={item.id}>
                      <td>{index + 1}</td>
                      <td>
                        <img width="60px" src={item.image} alt={item.name} />
                      </td>
                      <td>{item.name}</td>
                      <td>
                        <i
                          className="fa fa-angle-left"
                          onClick={() => onChangeQuantity(item.id, -1)}
                        ></i>
                        <span>{item.quantity}</span>
                        <i
                          className="fa fa-angle-right"
                          onClick={() => onChangeQuantity(item.id, 1)}
                        ></i>
                      </td>
                      <td>{item.price} $</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="modal-footer d-flex justify-content-between">
              <h4 className="text-danger">Total: <span className="text-dark">{calcTotal} $</span> </h4>
              <div>
                <button
                  type="button"
                  className="btn btn-success me-2"
                  onClick={payment}
                >
                  Payment
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={onClose}
                >
                  Close
                </button>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;