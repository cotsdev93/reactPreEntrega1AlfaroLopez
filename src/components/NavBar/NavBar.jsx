import CartWidget from "../CartWidget.jsx/CartWidget"
import "./NavBar.css"


const NavBar = () => {
    return (
        <>
            <nav>
                <div className="navContainer">
                    <h3 className="logo">Lens Decides</h3>
                    <div className="buttons">
                        <button>Cuadros</button>
                        <button>Fotos</button>
                        <button>Expo</button>
                        <button>Inspiracion</button>
                    </div>
                </div>
                <CartWidget />
            </nav>
        </>
    )
}

export default NavBar