import React from 'react'
import Item from './Item'

function ListaMovimiento({ listaMovimientos, deleteMovimiento, setEditMovimiento, filter }) {

    return (
        <>
            <div className='mt-3'>
                {(filter.optionFilter !== "Todos" && filter.text !== ""
                    ? listaMovimientos.filter((item) => item.nombre.includes(filter.text) && item.tipoMovimiento === filter.optionFilter)
                    : filter.optionFilter !== "Todos" && filter.text === ""
                        ? listaMovimientos.filter((item) => item.tipoMovimiento === filter.optionFilter)
                        : filter.optionFilter === "Todos" && filter.text !== ""
                            ? listaMovimientos.filter((item) => item.nombre.includes(filter.text))
                            : listaMovimientos).map((movimiento) => (
                                <Item
                                    key={movimiento.id}
                                    movimiento={movimiento}
                                    setEditMovimiento={setEditMovimiento}
                                    deleteMovimiento={deleteMovimiento}
                                />
                            ))}
            </div>
        </>
    )
}

export default ListaMovimiento