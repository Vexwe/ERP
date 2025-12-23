import { useState } from "react";
import  axios  from "axios"
import Footer from "../../components/layout/Footer";
import Header_login from "../../components/layout/Header_login";

export default function Register() {
    const [form, setForm] = useState({
        name: "",
        sector: "", 
        email: "", 
        password: "", 
        confirmPassword: ""
    })

    function handleChange(e){
        setForm({... form, [e.target.name]: e.target.value})
    }

    async function handleSubmit(e){
        e.preventDefault()

    try{
        const response = await axios.post("http://localhost:5000/register", form)

        console.log("Resposta ao backend: ", response.data)
        if(response.status ===201){
            window.location.href = "/login";
        }
    } catch(err){
        console.error("Erro ao enviar:", err)
    }
    }
    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <Header_login />
            <main className="flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8">
                    <h1 className="text-2xl font-semibold text-gray-800 text-center mb-6">Criar conta</h1>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                Nome
                            </label>
                            <input id="name" name="name" type="text" required onChange={handleChange} className="appearance-none block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"/>
                        </div>
                        <div>
                            <label htmlFor="sector" className="block text-sm font-medium text-gray-700 mb-1">
                                Setor
                            </label>
                            <input id="sector"  name="sector" type="text" required onChange={handleChange} className="appearance-none block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"/>
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                E-mail
                            </label>
                            <input id="email" name="email" type="email" required onChange={handleChange} className="appearance-none block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                                Senha
                            </label>
                            <input id="password" name="password"  type="password" required minLength={6} onChange={handleChange} className="appearance-none block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"/>
                        </div>
                        <div>
                            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                                Confirmar senha
                            </label>
                            <input id="confirmPassword" name="confirmPassword" type="password" required  minLength={6} onChange={handleChange} className="appearance-none block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"/>
                        </div>
                        <div className="pt-2">
                            <button type="submit" className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Enviar
                            </button>
                        </div>
                    </form>
                    <p className="mt-4 text-center text-sm text-gray-500">
                        Já tem conta? <a href="/login" className="text-indigo-600 hover:underline">Entrar</a>
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    );
}
