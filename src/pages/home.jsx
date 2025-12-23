import Footer from '../components/Footer'
import Header from '../components/Header'
import { Link } from 'react-router-dom'

function Home(){
    return(
        <>
        <Header/>
        <h1 className='m-3'>Seja bem vindo!</h1>
        <div className='flex justify-between m-4 items-center'>
            <Link to="/estoque">Estoque</Link>
            <Link to="/center">Central de chamados</Link>
        </div>
        <h2>Historico de Chamadas</h2>
        <textarea 
            name="historico" className="w-full h-40 p-3 border rounded" readOnly>
        {/* {seuHistoricoAqui} */}
        </textarea>
        <Footer/>
        </>
    )
}

export default Home