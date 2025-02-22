import { Link } from "react-router-dom";


const Navbar = () => {
        return (
            <nav className="navbar  nap-pills navbar-expand-lg bg-light py-2 py-lg-0 px-lg-0">
                <div className="container px-2">
                    <button
                            className="navbar-toggler bg-primary border-primary"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon "></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarNav">
                        <ul className="navbar-nav ">
                            <li className="nav-item">
                                <Link className="nav-link px-2" aria-current="page" to={'/'}>
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link px-2" aria-current="page" to={'/spices'}>
                                    Spices
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link px-2" to={'/spicology'} >
                                    Spicology
                                </Link>
                            </li>

                        </ul>
                    </div>

                </div>
            </nav>
        );
}


export default Navbar;