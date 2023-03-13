import { useState } from "react"
import Display from "../display/display"
import Teclado from "../teclado/teclado"
import './calculadora.css'

// componente funcional Calculadora
const Calculadora = (props) => {

    console.log('Calculadora')

    const [siguiente, setSiguiente] = useState()
    const [total, setTotal] = useState()
    const [operador, setOperador] = useState()


    const manejarClickBoton = (nombre) => {
        console.log('manejarClickBoton', nombre)

        if (nombre === 'CE') {

            console.log('limpiar')
            return setSiguiente(() => undefined)
        } else if (!isNaN(nombre)) {

            // FIXME: la app deja meter el número '000222' después de presionar el '0' más de una vez
            console.log('apretou algún numero en el teclado')
            return setSiguiente((siguienteAnterior) => siguienteAnterior ? siguienteAnterior + nombre : nombre)
        }
    }

    return (
        <div className="Calculadora">
            <Display valor={siguiente} />
            <Teclado manejoBotones={manejarClickBoton} />
        </div>
    )
}

export default Calculadora
