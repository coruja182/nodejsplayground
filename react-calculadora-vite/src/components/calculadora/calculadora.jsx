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
            setSiguiente()
            setOperador()
            setTotal()

        } else if (!isNaN(nombre)) {

            return setSiguiente((siguienteAnterior) => {
                if (!siguienteAnterior) {
                    return nombre === '0' ? undefined : nombre
                } else {
                    return (siguienteAnterior + nombre)
                }
            })
        } else if (nombre === '.') {
            return setSiguiente((siguienteAnterior) => {
                if (siguienteAnterior) {
                    return siguienteAnterior.includes('.') ? siguienteAnterior : siguienteAnterior + nombre
                } else {
                    return '0.'
                }
            })
        } else if (siguiente) {
            // es operador
            setTotal((t) => siguiente)
            setSiguiente()
            setOperador((o) => nombre)
        }
    }

    return <div className="Calculadora">
        <Display valor={siguiente} />
        <Teclado manejoBotones={manejarClickBoton} />
        <div>
            <br />siguiente: {siguiente + ''}
            <br />total: {total + ''}
            <br />operador: {operador + ''}
        </div>
    </div>

}

export default Calculadora
