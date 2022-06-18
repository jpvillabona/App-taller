import React from 'react'
import { FaEdit, FaTrash } from "react-icons/fa";
import NumberFormat from 'react-number-format';

function Item({ movimiento, deleteMovimiento, setEditMovimiento }) {

  return (
    <>
      <div className='row mb-1'>
        <div className="d-grid gap-1 col-1 align-items-center">
          <button className='btn btn-primary btn-sm' onClick={() => setEditMovimiento(movimiento)}>
            <FaEdit />
          </button>
        </div>
        <div className="d-grid gap-1 col-1 align-items-center">
          <button className='btn btn-danger btn-sm' onClick={() => deleteMovimiento(movimiento)}>
            <FaTrash />
          </button>
        </div>
        <div className="col-6 align-items-center">
          <span>{movimiento.nombre}</span>
        </div>
        <div className="d-grid gap-1 col-4 align-items-center">
          <NumberFormat value={movimiento.cantidad} displayType={'text'} thousandSeparator={true} prefix={'$'} renderText={(value, props) =>
            <button className={`btn btn-sm ${movimiento.tipoMovimiento === "Ingreso" ? "btn-success" : "btn-danger"}`} type="button" {...props}>
              {value}
            </button>
          }/>
        </div>
      </div>
    </>
  )
}

export default Item