import { BsStarFill } from 'react-icons/bs'
import { BsStar } from 'react-icons/bs'

function Testemunhas() {

    const pessoas = [

        { nome: "Ana Júlia", tempo: "2 meses atrás", testemunha: "Pizza absolutamente deliciosa! A massa estava perfeitamente crocante e os ingredientes frescos e saborosos. Recomendo muito!", imagem: "./anajulia.png" },

        { nome: "Marcos", tempo: "3 meses atrás", testemunha: "A pizza estava ótima, mas a entrega demorou um pouco mais do que o esperado. Mesmo assim, o sabor compensou.", imagem: "./marcos.png" },

        { nome: "Sofia", tempo: "1 semana atrás", testemunha: "A melhor pizza que já comi! Os ingredientes eram de primeira qualidade e o atendimento foi excelente. Com certeza pedirei novamente.", imagem: "./sofia.png" }

    ]

    return (

        <div className="d-flex flex-column gap-4" id="testemunhas">

            <h2 className="mt-5 mb-2">Avaliações</h2>

            {pessoas.map((pessoa, index) =>

                <div className='d-flex flex-column gap-2' key={index}>

                    <div className='d-flex align-items-center justify-content-start w-100 h-100 gap-2'>
                        <img src={pessoa.imagem} alt="" className='' />

                        <div>

                            <p className='m-0 fs-5 fw-semibold'>{pessoa.nome}</p>
                            <p className='m-0 text-secondary'>{pessoa.tempo}</p>

                        </div>

                    </div>

                    <div className="d-flex gap-1">

                        <BsStarFill />
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarFill />
                        <BsStar />

                    </div>

                    <p className='fw-semibold'>"{pessoa.testemunha}"</p>

                </div>

            )}

        </div>

    )
}

export default Testemunhas