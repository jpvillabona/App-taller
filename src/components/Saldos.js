import React, { useEffect } from 'react';
import NumberFormat from 'react-number-format';

const Saldos = ({
    saldoInicial, setSaldoInicial,
    saldoFinal, calcularSaldoFinal
}) => {

    const changeSaldoInicial = (value) => {
        setSaldoInicial(value);
    }

    useEffect(() => {
        calcularSaldoFinal();
    }, [calcularSaldoFinal])


    return (
        <>
            <div className="d-flex justify-content-end">
                <div className="col-6 p-2">
                    <label htmlFor="saldoInicial" className="form-label">Saldo Inicial:</label>
                    <NumberFormat id="saldoInicial" name="saldoInicial" className='form-control'
                        displayType="input" thousandSeparator={true} prefix={'$'}
                        allowNegative={false} onValueChange={({ value }) => changeSaldoInicial(value)} value={saldoInicial}
                        fixedDecimalScale={false} decimalScale={0} />

                </div>
                <div className="col-6 p-2">
                    <label htmlFor="saldoFinal" className="form-label">Saldo Final:</label>
                    <NumberFormat id="saldoFinal" name="saldoFinal" className='form-control' displayType="input" thousandSeparator={true} prefix={'$'}
                        allowNegative={false} value={saldoFinal} fixedDecimalScale={false} decimalScale={0} disabled />
                </div>
            </div>

        </>
    )
}

export default Saldos

