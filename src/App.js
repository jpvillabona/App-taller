import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Movimientos from './components/Movimientos';
import RegistroMovimiento from './components/RegistroMovimiento';

function App() {

  const [saldoInicial, setSaldoInicial] = useState(0);
  const [saldoFinal, setSaldoFinal] = useState(0);
  const [listaMovimientos, setListaMovimientos] = useState([]);
  const [editMovimiento, setEditMovimiento] = useState(null);

  const calcularSaldoFinal = () => {

    const totalGastos = listaMovimientos
      .filter(x => x.tipoMovimiento === "Gasto")
      .reduce((valorActual, { cantidad }) => parseInt(valorActual) + parseInt(cantidad), 0);

    const totalIngresos = listaMovimientos
      .filter(x => x.tipoMovimiento === "Ingreso")
      .reduce((valorActual, { cantidad }) => parseInt(valorActual) + parseInt(cantidad), 0);

    const total = parseInt(saldoInicial) + (totalIngresos - totalGastos);

    setSaldoFinal(total);
  }

  return (
    <>
      <div className="container">
        <div className="app-wrapper">
          <div>
            <Header
              saldoInicial={saldoInicial}
              setSaldoInicial={setSaldoInicial}
              saldoFinal={saldoFinal}
              calcularSaldoFinal={calcularSaldoFinal}
            />
          </div>
          <div className='container-body'>
            <div className="row">
              <div className="col-lg-6">
                <RegistroMovimiento
                  listaMovimientos={listaMovimientos}
                  setListaMovimientos={setListaMovimientos}
                  editMovimiento={editMovimiento}
                  setEditMovimiento={setEditMovimiento}
                  saldoFinal={saldoFinal}
                />
              </div>
              <div className="col-lg-6">
                <Movimientos
                  listaMovimientos={listaMovimientos}
                  setListaMovimientos={setListaMovimientos}
                  setEditMovimiento={setEditMovimiento}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default App;
