import './boton.css'

const Boton = ({ nombreBoton, manejoOnClick }) => {
    return <button
        className='Boton'
        onClick={() => manejoOnClick(nombreBoton)} >
        {nombreBoton}
    </button>
}

export default Boton
