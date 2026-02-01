function Localizacao(){

    return(

        <div id="localizacao" className="d-flex flex-column gap-2 mb-5">

            <h2 className="mt-5 mb-2">Localização</h2>


            <picture>

                <source srcSet="./localizacao.png" type="image/png"/>
                <img src="./localizacao.png" className="img-fluid img-thumbnail" alt="" />

            </picture>

            <ul className="list-group gap-1">

                <li className="list-group-item bg-danger text-white">

                    <strong>Endereço: </strong>
                    Rua do Orégano, nº 88, esquina com a Avenida

                </li>

                <li className="list-group-item bg-danger text-white">

                    <strong>Telefone: </strong>
                    11 5555-1234

                </li>

                <li className="list-group-item bg-danger text-white">

                    <strong>Email: </strong>
                    contato@pizzariadelicia.com.br

                </li>

            </ul>

        </div>

    )

}

export default Localizacao