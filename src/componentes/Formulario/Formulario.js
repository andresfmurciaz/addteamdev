
import "./Formulario.css"

import CampoTexto from "../CampoTexto/CampoTexto" 
import ListaOpciones from "../ListaOpciones/ListaOpciones"

const Formulario = ()=> { 

return <section className="formulario">
    <form>
        <h2>
            Rellena el formulario para crear el colaborador
        </h2>
        <CampoTexto title='Nombre' placeholder='Ingrese su nombre'></CampoTexto>
        <CampoTexto title='Puesto' placeholder='Ingrese su puesto'></CampoTexto>
        <CampoTexto title='Foto' placeholder='Ingrese su foto'></CampoTexto>
        <ListaOpciones></ListaOpciones>

    </form>
</section>
}


export default Formulario