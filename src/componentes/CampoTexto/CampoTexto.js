import "./CampoTexto.css"
const CampoTexto = (props)=>{
    const placeholderModificado=  `${props.placeholder}...`
return <div className="campo-texto">

    <label>{props.title}</label>
    <input placeholder={placeholderModificado}/>
</div>

}


export default CampoTexto