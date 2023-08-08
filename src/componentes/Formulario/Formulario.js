
import "./Formulario.css"

import CampoTexto from "../CampoTexto/CampoTexto" 
import ListaOpciones from "../ListaOpciones/ListaOpciones"
import Boton from "../Boton/Boton"
const Formulario = ()=> { 

const manejarEnvio =(event)=>{
    // nos ayudo para que no se recargue el formulario
event.preventDefault()
console.log('manejando envio',event)

}


return <section className="formulario">
    <form onSubmit={manejarEnvio}>
        <h2>
            Rellena el formulario para crear el colaborador
        </h2>
        <CampoTexto title='Nombre' placeholder='Ingrese su nombre'></CampoTexto>
        <CampoTexto title='Puesto' placeholder='Ingrese su puesto'></CampoTexto>
        <CampoTexto title='Foto' placeholder='Ingrese su foto'></CampoTexto>
        <ListaOpciones></ListaOpciones>
        <Boton>
            crear
            </Boton>
    </form>
</section>
}


export default Formulario