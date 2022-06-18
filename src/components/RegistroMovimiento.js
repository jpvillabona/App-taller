import React, { useEffect, useState } from 'react';
import { useForm } from '../hooks/useForm';
import { v4 as uuidv4 } from 'uuid'
import ModalMessage from './Message';
import NumberFormat from 'react-number-format';

const RegistroMovimiento = ({
  listaMovimientos,
  setListaMovimientos,
  editMovimiento,
  setEditMovimiento,
  saldoFinal
}) => {

  const [values, handlerChange, cleanValues, editValues] = useForm({ id: "", tipoMovimiento: "", nombre: "", cantidad: 0 });

  //States for Message Modal
  const [showModal, setShowModal] = useState(false);
  const handleModalClose = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);
  const [mensaje, setMensaje] = useState("");
  const [titulo, setTitulo] = useState("");

  const addOrEditMovimiento = (e) => {
    e.preventDefault();
    if (restriccionMovimiento()) {

      if (editMovimiento) {
        editarMovimiento();
      } else {
        agregarMovimiento();
      }
    }
  };

  function mostrarMensaje(titulo, mensaje) {
    setTitulo(titulo);
    setMensaje(mensaje);
    handleShowModal();
  }

  const cancelar = () => {
    cleanValues();
    setEditMovimiento(null);
  }

  const changeCantidad = ({ value }) => {
    handlerChange("cantidad", value)
  }

  function agregarMovimiento() {
    const nuevoMovimiento = {
      id: uuidv4(),
      tipoMovimiento: values.tipoMovimiento,
      nombre: values.nombre,
      cantidad: values.cantidad
    };

    setListaMovimientos([...listaMovimientos, nuevoMovimiento]);
    cleanValues();

    mostrarMensaje("Registro Exitoso", `El ${nuevoMovimiento.tipoMovimiento} ${nuevoMovimiento.nombre} ha sido registrado con éxito.`);
  }

  function restriccionMovimiento() {

    if (values.tipoMovimiento === "") {
      mostrarMensaje("Error", "Debe seleccionar un tipo de movimiento");
    } else if (values.nombre === "") {
      mostrarMensaje("Error", "Debe ingresar el nombre de un movimiento");
    } else if (values.cantidad === 0) {
      mostrarMensaje("Error", "La cantidad no puede ser cero (0). Debe ingresar una cantidad al movimiento");
    } else if (values.tipoMovimiento === "Gasto") {
      const nuevoSaldoEstimado = saldoFinal - values.cantidad;
      if (nuevoSaldoEstimado < 0) {
        mostrarMensaje("Error", "No cuenta con saldo suficiente para realizar este movimiento");
        return false;
      }

      return true;
    } else {
      return true;
    }
  }

  function editarMovimiento() {
    const newListaMovimientos = listaMovimientos.map((item) => {
      if (item.id === editMovimiento.id) {
        return { id: editMovimiento.id, tipoMovimiento: values.tipoMovimiento, nombre: values.nombre, cantidad: values.cantidad };
      } else {
        return item;
      }
    });
    setListaMovimientos(newListaMovimientos);
    cleanValues();
    setEditMovimiento(null);
  }

  useEffect(() => {
    if (editMovimiento) {
      editValues(editMovimiento);
    } else {
      cleanValues();
    }
  }, [editMovimiento]);

  return (
    <>

      <div className="card">
        <div className="card-header">
          Registrar Movimientos
        </div>
        <div className="card-body">
          <form onSubmit={addOrEditMovimiento}>
            <div className="row">
              <div className="col-lg-12 mb-3">
                <label for="size" className='form-label' htmlFor='tipoMovimiento'>Tipo de Movimiento:</label>
                <select class="form-control" id="tipoMovimiento" name="tipoMovimiento" className="form-select" aria-label="Default select example" value={values.tipoMovimiento} onChange={({ target }) => handlerChange(target.name, target.value)}>
                  <option value="seleccione">Seleccione ...</option>
                  <option value="Ingreso">Ingreso</option>
                  <option value="Gasto">Gasto</option>
                </select>  
              </div>
              <div className="col-lg-12 mb-3">
                <label htmlFor="nombre" className="form-label">Descripción:</label>
                <input id="nombre" type="text" name="nombre" className='form-control' value={values.nombre} onChange={({ target }) => handlerChange(target.name, target.value)} />
              </div>
              <div className="col-lg-12 mb-3">
                <label htmlFor="cantidad" className="form-label">Valor:</label>
                <NumberFormat id="cantidad" name="cantidad" className='form-control'
                  displayType="input" thousandSeparator={true} prefix={'$'}
                  allowNegative={false} value={values.cantidad} onValueChange={changeCantidad}
                  fixedDecimalScale={false} decimalScale={0} />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 text-center">
                <button type='button' className="btn btn-secondary" onClick={() => cancelar}>Cancelar</button>
                <button type='submit' className="btn btn-primary">{editMovimiento ? "Editar movimiento" : "Agregar movimiento"}</button>
              </div>
            </div>
          </form>

        </div>
      </div>
      <ModalMessage titulo={titulo} mensaje={mensaje} showModal={showModal} handleModalClose={handleModalClose} />
    </>
  )
}

export default RegistroMovimiento

