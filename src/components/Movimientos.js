import React, { useState } from 'react'
import BarraBusqueda from './BarraBusqueda'
import ListaMovimiento from './ListaMovimiento'
import Badge from 'react-bootstrap/Badge'

const Movimientos = ({
    listaMovimientos,
    setListaMovimientos,
    setEditMovimiento }) => {

    const [filter, setFilter] = useState({ optionFilter: "Todos", text: "" });

    const deleteMovimiento = (movimiento) => {
        const newListaMovimientos = listaMovimientos.filter((item) => item.id !== movimiento.id);
        setListaMovimientos(newListaMovimientos);
    };

    return (
        <>
            <div className="card">
                <div className="card-header">
                    <div className="d-flex d-flex justify-content-between   ">
                        <span>Listado de Movimientos</span>
                        <Badge bg="primary">{listaMovimientos.length}</Badge>
                    </div>
                </div>
                <div className="card-body">
                    <BarraBusqueda
                        filter={filter}
                        setFilter={setFilter}
                    />
                    <ListaMovimiento
                        listaMovimientos={listaMovimientos}
                        deleteMovimiento={deleteMovimiento}
                        setEditMovimiento={setEditMovimiento}
                        filter={filter}
                    />
                </div>
            </div>

        </>
    )
}

export default Movimientos