import React from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { Link } from 'react-router-dom'
import './home.css' 

function Home(){
    return(
        <div className="page-wrapper">
            <Header/>
            
            <main className="home-content">
                <h1 className="title">Seja bem vindo!</h1>
                
                <div className="button-group">
                    {/* Botão*/}
                    <Link to="/estoque">
                        <button className="btn-home">Estoque</button>
                    </Link>

                    <Link to="/center">
                        <button className="btn-home">Central de chamados</button>
                    </Link>
                </div>

                <h2 className="subtitle">Histórico de Chamadas</h2>
                
                <textarea 
                    name="historico" 
                    className="history-box" 
                    readOnly 
                    placeholder="Sem chamados no momento...">
                </textarea>
            </main>

            <Footer/>
        </div>
    )
}

export default Home