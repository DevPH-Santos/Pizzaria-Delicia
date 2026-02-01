import Header from "./components/header"
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from "./components/hero";
import Menu from "./components/menu";
import './index.css'
import Form from "./components/form";
import Testemunhas from "./components/testemunhas";
import Localizacao from "./components/localizacao";

function App() {

  return (
    <>
      <Header/>

      <div className="d-flex flex-column container align-items-center justify-content-center">

        <Hero/>
        <Menu/>
        <Form/>
        <Testemunhas/>
        <Localizacao/>

      </div>

    </>
  )
}

export default App
