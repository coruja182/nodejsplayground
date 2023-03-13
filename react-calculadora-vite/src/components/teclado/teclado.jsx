import Boton from '../boton/boton'
import './teclado.css'

const Teclado = ({manejoBotones}) => {
    return <div className='Teclado'>
        <Boton nombreBoton={"9"} manejoOnClick={manejoBotones} />
        <Boton nombreBoton={"8"} manejoOnClick={manejoBotones} />
        <Boton nombreBoton={"7"} manejoOnClick={manejoBotones} />
        <Boton nombreBoton={"+"} manejoOnClick={manejoBotones} />
        <Boton nombreBoton={"6"} manejoOnClick={manejoBotones} />
        <Boton nombreBoton={"5"} manejoOnClick={manejoBotones} />
        <Boton nombreBoton={"4"} manejoOnClick={manejoBotones} />
        <Boton nombreBoton={"-"} manejoOnClick={manejoBotones} />
        <Boton nombreBoton={"3"} manejoOnClick={manejoBotones} />
        <Boton nombreBoton={"2"} manejoOnClick={manejoBotones} />
        <Boton nombreBoton={"1"} manejoOnClick={manejoBotones} />
        <Boton nombreBoton={"*"} manejoOnClick={manejoBotones} />
        <Boton nombreBoton={"CE"} manejoOnClick={manejoBotones} />
        <Boton nombreBoton={"0"} manejoOnClick={manejoBotones} />
        <Boton nombreBoton={"."} manejoOnClick={manejoBotones} />
        <Boton nombreBoton={"/"} manejoOnClick={manejoBotones} />
    </div>
}

export default Teclado
