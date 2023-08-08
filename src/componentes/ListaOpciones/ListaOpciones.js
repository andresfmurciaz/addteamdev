import './ListaOpciones.css'
const ListaOpciones = ()=>{

    const equipos =[
        "Programacion",
        "Front end",
        "Data Science",
        "Devops",
        "UX y diseño",
        "Movil",
        "Gestion y innovacion"
    ]
return <div className='lista-opciones'>
    <label>Equipos</label> 
    <select>
        {/* importamteeeeeeeeeeeee */}
        {equipos.map((equipo,index)=>{
            return <option key={index}>{equipo}</option>
        })}

</select>
</div>

}
export default ListaOpciones