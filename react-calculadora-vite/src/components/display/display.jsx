import './display.css'

// Functional component Display.
const Display = ({ valor }) => {
    console.log('Display: ', valor)
    return <div className='Display' >{valor || "0"}</div>
}

export default Display
