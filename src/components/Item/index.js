import { Link, NavLink } from "react-router-dom"

const Item = ({producto}) => {
    
    return(
        
        <section className="item">
            <div>{producto.nombre}</div>
            <img src={producto.imagen} alt={producto.nombre} />
            <div>${producto.precio}</div>
            <NavLink to={`/detalle/${producto.id}`}><button>Ver detalle</button></NavLink>
        </section>
        
    )
}
export default Item