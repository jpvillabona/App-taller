import Saldos from './Saldos'

const Header = (
    {
        saldoInicial, setSaldoInicial,
        saldoFinal, calcularSaldoFinal
    }
) => {

    return (
        <>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="https://getbootstrap.com/">
                        <img
                            alt="logo"
                            src="https://cdn-icons-png.flaticon.com/128/1611/1611179.png"
                            width="70"
                            height="70"
                            className='p-2'
                        />
                        <h4 className="d-inline-block align-center">Finanzas Personales</h4>
                    </a>
                    <Saldos

                        saldoInicial={saldoInicial}
                        setSaldoInicial={setSaldoInicial}
                        saldoFinal={saldoFinal}
                        calcularSaldoFinal={calcularSaldoFinal}
                    />
                </div>
            </nav>
        </>
    )
}

export default Header