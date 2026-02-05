import { useState } from "react"

function Form() {

    const [cep, setCEP] = useState("")
    const [endereco, setEndereco] = useState("")
    const [celular, setCelular] = useState("")

    const formatarCelular = (value) => {

        return value
            .replace(/\D/g, "")
            .replace(/^(\d{2})(\d)/, "($1) $2")
            .replace(/(\d{5})(\d)/, "$1-$2")
            .slice(0, 15)

    }

    const handleFormatarCEP = (value) => {

        return value
            .replace(/\D/g, "")
            .replace(/^(\d{5})(\d)/, "$1-$2")
            .slice(0, 9)

    }

    const handleBuscarCEP = async (valorCEP) => {

        const ceplimpo = valorCEP.replace(/\D/g, '')

        if (ceplimpo.length !== 8) return

        try {
            const response = await fetch(`https://viacep.com.br/ws/${ceplimpo}/json/`)
            const data = await response.json()

            if (!data.erro) {
                setEndereco(`${data.logradouro} - ${data.bairro}, ${data.localidade}/${data.uf}`)
            }

        }
        catch (error) {
            console.log("Erro ao buscar CEP", error)
        }

    }

    const handleSubmit = (e) => {

        e.preventDefault()

        alert("Pedido feito com SUCESSO!")

    }

    return (

        <div className="d-flex flex-column align-items-center justify-content-center gap-2 m-auto" id="encomendar">

            <h2 className="mt-5 mb-2">Fazer pedido</h2>

            <form onSubmit={handleSubmit} className="d-flex flex-column align-items-center justify-content-center gap-4">

                <div className="d-flex flex-column flex-md-row gap-3 align-items-center justify-content-center">

                    <div className="d-flex flex-column gap-2 align-items-start justify-content-center form-floating">

                        <input type="text" name="nome" id="nome" className="bg-light border-0 outlined-0 form-control" style={{ width: '300px' }} placeholder="Digite seu nome" required />
                        <label htmlFor="nome" className="fw-semibold">Nome</label>

                    </div>

                    <div className="d-flex flex-column gap-2 align-items-start justify-content-center form-floating">

                        <input
                            type="text"
                            className="bg-light border-0 outlined-0 form-control"
                            style={{ width: '300px' }}
                            placeholder="Digite seu número de celular"
                            required
                            name="celular"
                            id="celular"
                            value={celular}
                            onChange={(e) => setCelular(formatarCelular(e.target.value))}
                        />
                        <label htmlFor="celular" className="fw-semibold">Celular</label>

                    </div>

                </div>

                <div className="d-flex flex-column flex-md-row gap-3 align-items-center justify-content-center">

                    <div className="d-flex flex-column gap-2 align-items-start justify-content-center form-floating">

                        <input
                            type="text"
                            name="cep"
                            id="cep"
                            className="bg-light border-0 outlined-0 form-control"
                            value={cep}
                            onChange={(e) => setCEP(handleFormatarCEP(e.target.value))}
                            onBlur={(e) => handleBuscarCEP(e.target.value)}
                            style={{ width: '300px' }}
                            placeholder="Digite seu CEP"
                        />

                        <label htmlFor="cep" className="fw-semibold">CEP</label>

                    </div>

                    <div className="d-flex flex-column gap-2 align-items-start justify-content-center form-floating">

                        <input
                            type="text"
                            name="endereco"
                            id="endereco"
                            className="bg-light border-0 outlined-0 form-control"
                            style={{ width: '300px' }}
                            placeholder="Digite seu endereço"
                            value={endereco}
                            onChange={(e) => setEndereco(e.target.value)}
                            required
                        />

                        <label htmlFor="endereco" className="fw-semibold">Endereço</label>

                    </div>

                </div>

                <div className="d-flex flex-column flex-md-row gap-3 align-items-end justify-content-center">

                    <div className="d-flex flex-column gap-2 align-items-start justify-content-center">

                        <label htmlFor="tamanho" className="fw-semibold">Tamanho</label>
                        <select name="tamanho" id="tamanho" className="form-select" style={{ width: '300px' }} required>

                            <option defaultValue="disabled">Selecione o tamanho</option>
                            <option defaultValue="pequena">Pequena</option>
                            <option defaultValue="media">Média</option>
                            <option defaultValue="grande">Grande</option>

                        </select>

                    </div>

                    <div className="d-flex flex-column gap-2 align-items-start justify-content-center form-floating">

                        <input min={0} type="number" name="quantidade" id="quantidade" className="bg-light border-0 outlined-0 form-control" style={{ width: '300px' }} placeholder="Digite a quantidade" required />
                        <label htmlFor="quantidade" className="fw-semibold">Quantidade</label>

                    </div>

                </div>

                <button type="submit" className="btn btn-danger m-auto mt-5">Enviar Pedido</button>

            </form>

        </div>

    )
}

export default Form