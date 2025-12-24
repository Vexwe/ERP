import Header_login from "../../components/layout/Header_login";
import Footer from "../../components/layout/Footer"
import { Link } from "react-router-dom";

function Login(){
    return (
      <div> <Header_login/>
        <div className="min-h-[80vh] flex items-center justify-center bg-gray-50">
          {/* Card */}
          <div className="w-full max-w-sm bg-white border rounded-lg shadow-lg p-6">
            <h2 className="text-center text-xl font-medium mb-4">Entrar</h2>
    
            <form className="flex flex-col gap-4" action="link do formulario" method="post">
              <div className="flex flex-col">
                <label htmlFor="login" className="mb-1 text-sm">Login</label>
                <input id="login" name="login" type="text" className="border rounded px-3 py-2" />
              </div>
    
              <div className="flex flex-col">
                <label htmlFor="senha" className="mb-1 text-sm">Senha</label>
                <input id="senha" name="senha" type="password" className="border rounded px-3 py-2" />
              </div>
    
              <input
                type="submit"
                value="Entrar"
                className="self-center mt-2 text-white bg-blue-950 px-4 py-2 rounded cursor-pointer"
              />
              
              <Link to="/forget">Esqueci a senha</Link>
              <Link to="/register">Cadastre-se</Link>
              
            </form>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
  
  export default Login;
  