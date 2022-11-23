import { Link } from "react-router-dom"

    const NavBar = () => {
        return (
            <nav className="navbar">
                <h2>
                   <Link to={'/'}>Nome</Link>
                </h2>
                <ul>
                    <li>
                        <Link to={'/'}>Início</Link>
                    </li>

                    <li>
                        <Link to={'/about'}>Sobre</Link>
                    </li>
                </ul>
            </nav>
        )
    }