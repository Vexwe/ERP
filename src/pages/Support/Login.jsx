import Header_login from "../../components/layout/Header_login";
import Footer from "../../components/layout/Footer";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header_login />
      
      {/* Container Principal com Background Suave */}
      <main className="flex-grow flex items-center justify-center bg-gray-100 px-4 py-12">
        
        {/* Card de Login */}
        <div className="w-full max-w-md bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
          <div className="p-8">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
              Acesse sua conta
            </h2>
    
            <form className="space-y-5" action="link do formulario" method="post">
              {/* Campo de Login */}
              <div className="flex flex-col">
                <label htmlFor="login" className="text-sm font-semibold text-gray-600 mb-1">
                  E-mail ou Usuário
                </label>
                <input 
                  id="login" 
                  name="login" 
                  type="text" 
                  placeholder="Digite seu e-mail ou usuário"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent transition"
                  required
                />
              </div>
    
              {/* Campo de Senha */}
              <div className="flex flex-col">
                <div className="flex justify-between items-center mb-1">
                  <label htmlFor="senha" className="text-sm font-semibold text-gray-600">
                    Senha
                  </label>
                  <Link to="/forget" className="text-xs text-blue-800 hover:underline">
                    Esqueceu a senha?
                  </Link>
                </div>
                <input 
                  id="senha" 
                  name="senha" 
                  type="password" 
                  placeholder="••••••••"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent transition"
                  required
                />
              </div>
    
              {/* Botão de Enviar */}
              <button
                type="submit"
                className="w-full bg-[#1976d2] hover:bg-[#1565c0] text-white font-bold py-3 rounded-lg transition duration-300 transform active:scale-[0.98] shadow-sm"
              >
                Entrar
              </button>
              
              {/* Divisor Visual */}
              <div className="relative flex items-center py-2">
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="flex-shrink mx-4 text-gray-400 text-sm">ou</span>
                <div className="flex-grow border-t border-gray-300"></div>
              </div>

              {/* Link de Cadastro */}
              <p className="text-center text-sm text-gray-600">
                Ainda não tem conta?{" "}
                <Link to="/register" className="text-[#1976d2] font-bold hover:underline">
                  Cadastre-se agora
                </Link>
              </p>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Login;