import { useState } from "react";

export const useForm = (initialState = {}) => {

    const [values, setValues] = useState(initialState);

    const handlerChange = (name, value) => {
        setValues({ ...values, [name]: value });
    };

    const cleanValues = () => {
        setValues({ id: "", tipoMovimiento: "", nombre: "", cantidad: 0 });
    };

    const editValues = (valueForEdit) => {
        setValues({ ...values, tipoMovimiento: valueForEdit.tipoMovimiento, nombre: valueForEdit.nombre, cantidad: valueForEdit.cantidad });
    }

    return [values, handlerChange, cleanValues, editValues];
};