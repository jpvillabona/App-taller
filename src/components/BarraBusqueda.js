import React from 'react'

const BarraBusqueda = ({ filter, setFilter }) => {

    const changeText = ({ target }) => {
        setFilter({ ...filter, text: target.value });
    };

    const changeOptions = ({ target }) => {
        setFilter({ ...filter, optionFilter: target.value });
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid-2">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Búsqueda..." aria-label="Buscar" value={filter.text} onChange={changeText} />
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="todos" value="Todos" checked={filter.optionFilter === "Todos"} onChange={changeOptions} />
                                <label className="form-check-label" htmlFor="todos">Todos</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="ingresos" value="Ingreso" checked={filter.optionFilter === "Ingreso"} onChange={changeOptions} />
                                <label className="form-check-label" htmlFor="ingresos">Ingresos</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="gastos" value="Gasto" checked={filter.optionFilter === "Gasto"} onChange={changeOptions} />
                                <label className="form-check-label" htmlFor="gastos">Gastos</label>
                            </div>

                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default BarraBusqueda