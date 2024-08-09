// import { Children } from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({ children}) => {
    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                </ul>
                <ul>
                    <li><Link to="/PokemonCard">Card</Link></li>
                </ul>
            </nav>
            <div>
                {children}
            </div>
             
            <footer>
                This the footer
            </footer>
        </div>
    )
}

export default Navbar