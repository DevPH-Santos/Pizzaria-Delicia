function Header() {
    return (

        <nav id="home" className="navbar navbar-expand-lg navbar-light d-flex align-items-center justify-content-between px-4 border position-fixed z-3 bg-white w-100 top-0">

            <a className="navbar-brand d-flex align-items-center gap-2" href="/">

                <img src="./logo.png" alt="Logo" />

                <span className="fw-semibold fs-5 text-nowrap">
                    Pizzaria Delícia
                </span>

            </a>

            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarContent"
                aria-controls="navbarContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-end" id="navbarContent">
                
                <ul className="navbar-nav align-items-lg-center gap-lg-4 mt-3 mt-lg-0">

                    <li className="nav-item">
                        <a className="nav-link fw-semibold" href="/">Home</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link fw-semibold" href="#menu">Menu</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link fw-semibold" href="#encomendar">Encomendar</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link fw-semibold" href="#testemunhas">Avaliações</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link fw-semibold" href="#localizacao">Localização</a>
                    </li>

                    {/* BOTÃO */}
                    <li className="nav-item">
                        <a
                            className="btn btn-danger fw-semibold mt-2 mt-lg-0"
                            href="#encomendar"
                        >
                            Pedir Agora
                        </a>
                    </li>

                </ul>

            </div>

        </nav>

    )
}

export default Header