import React from 'react';

const ModalDetail = ({content,onClose}) => {
    if(!content){
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
                Detail
              </h1>
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={onClose}
              />
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-4">
                    <img width="100%" src={content.image} alt={content.name} />
                </div>
                <div className="col-8">
                    <table className='table'>
                        <tbody>
                            <tr>
                                <td>Name</td>
                                <td>{content.name}</td>
                            </tr>
                            <tr>
                                <td>Alias</td>
                                <td>{content.alias}</td>
                            </tr>
                            <tr>
                                <td>Price</td>
                                <td>{content.price} $</td>
                            </tr>
                            <tr>
                                <td>Description</td>
                                <td>{content.description}</td>
                            </tr>
                            <tr>
                                <td>Short Description</td>
                                <td>{content.shortDescription}</td>
                            </tr>
                            <tr>
                                <td>Quantity</td>
                                <td>{content.quantity}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
              </div>
            </div>
            <div className="modal-footer">
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

      {/* Overlay */}
      <div className="modal-backdrop fade show"></div>
    </div>
  )
};

export default ModalDetail;