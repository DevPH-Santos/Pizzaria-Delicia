import './hero.css'

function Hero() {
    return (

        <div className="hero">

            <img
                src="./heroPizza.png"
                alt=""
                className='w-100 rounded'
            />

            <div className="d-flex align-items-center justify-content-center flex-column text-white fw-semibold">
                <h1>A melhor pizzaria da cidade</h1>

                <p className="w-75 text-center">
                    Experimente o sabor mais autêntico da Itália com nossas pizzas assadas fresquinhas.
                    Faça seu pedido agora e prove o melhor sabor!
                </p>

                <a className="bg-danger p-2 text-white rounded-3 text-decoration-none fw-semibold" href="#encomendar">Fazer Pedido</a>
            </div>

        </div>

    )
}

export default Hero
