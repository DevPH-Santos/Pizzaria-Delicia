import './menu.css'

function Menu() {

    const pizzas = [

        { nome: "Margarita", descricao: "Classic tomato sauce, fresh mozzarella, basil", imagem: "./margarita.png" },

        { nome: "Pepperoni", descricao: "Pepperoni, mozzarella, molho de tomate", imagem: "./peperoni.png" },

        { nome: "Hawaiana", descricao: "Presunto, abacaxi, mozzarella, molho de tomate", imagem: "./havaiana.png" },

        { nome: "Vegetariana", descricao: "Legumes variados, mozzarella, molho de tomate", imagem: "./vegetariana.png" },

        { nome: "Amantes de Carne", descricao: "Pepperoni, salsicha, bacon, mozzarella, molho de tomate", imagem: "./amantes-carne.png" },

        { nome: "Frango grelhado", descricao: "Frango grelhado, molho barbecue, mussarela, cebola roxa", imagem: "./frango-grelhado.png" }

    ];

    return (

        <div id='menu'>

            <h2 className='mt-5 mb-2 fw-bold fs-3'>Nosso Menu</h2>

            <div className='pizza-container'>

                {pizzas.map((pizza, index) => (

                    <div key={index} className="pizza">

                        <img src={pizza.imagem} alt={pizza.nome} />

                        <div>

                            <h5>{pizza.nome}</h5>
                            <p>{pizza.descricao}</p>

                        </div>

                    </div>

                ))}

            </div>

        </div>

    )

}

export default Menu