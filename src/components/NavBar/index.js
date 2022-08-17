import { Link } from "react-router-dom";
const NavBar = (props) => {
    if(props.type === "header"){
        return(
            <>
                <nav className="nav">
                    <Link to="/hoodies">Hoodies</Link>
                    <Link to="/camperas">Camperas</Link>
                    <Link to="/remeras">Remeras</Link>
                    <Link to="/carrito"><span class="material-symbols-outlined">shopping_cart</span></Link>
                </nav>
            </>
        )
    }else if(props.type === "footer"){
        return(
            <>
                <nav className="nav">
                    <a href="#">link-footer</a>
                    <a href="#">link-footer</a>
                    <a href="#">link-footer</a>
                </nav>
            </>
        )
    }
    
}

export default NavBar;