import { useState } from "react";
import axios from "axios";
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
        setForm({...form, [e.target.name]: e.target.value})
    }

    async function handleSubmit(e){
        e.preventDefault()

        try {
            const response = await axios.post("http://localhost:5000/register", form)
            console.log("Resposta ao backend: ", response.data)
            if(response.status === 201){
                window.location.href = "/login";
            }
        } catch(err){
            console.error("Erro ao enviar:", err)
        }
    }

    return (
        <div className="min-h-screen flex flex-col bg-gray-100">
            <Header_login />
            
            <main className="flex-grow flex items-center justify-center py-12 px-4">
                {/* Card de Registro ampliado para comportar mais campos */}
                <div className="w-full max-w-lg bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 p-8">
                    <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
                        Crie sua conta
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Grid para Nome e Setor (lado a lado em telas maiores) */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex flex-col">
                                <label htmlFor="name" className="text-sm font-semibold text-gray-600 mb-1">
                                    Nome Completo
                                </label>
                                <input 
                                    id="name" name="name" type="text" required 
                                    onChange={handleChange}
                                    placeholder="Seu nome"
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent transition"
                                />
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="sector" className="text-sm font-semibold text-gray-600 mb-1">
                                    Setor
                                </label>
                                <input 
                                    id="sector" name="sector" type="text" required 
                                    onChange={handleChange}
                                    placeholder="Ex: T.I."
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent transition"
                                />
                            </div>
                        </div>

                        {/* Campo de E-mail */}
                        <div className="flex flex-col">
                            <label htmlFor="email" className="text-sm font-semibold text-gray-600 mb-1">
                                E-mail Corporativo
                            </label>
                            <input 
                                id="email" name="email" type="email" required 
                                onChange={handleChange}
                                placeholder="exemplo@empresa.com"
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent transition"
                            />
                        </div>

                        {/* Campos de Senha */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex flex-col">
                                <label htmlFor="password" className="text-sm font-semibold text-gray-600 mb-1">
                                    Senha
                                </label>
                                <input 
                                    id="password" name="password" type="password" required minLength={6}
                                    onChange={handleChange}
                                    placeholder="••••••••"
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent transition"
                                />
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="confirmPassword" className="text-sm font-semibold text-gray-600 mb-1">
                                    Confirmar Senha
                                </label>
                                <input 
                                    id="confirmPassword" name="confirmPassword" type="password" required minLength={6}
                                    onChange={handleChange}
                                    placeholder="••••••••"
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent transition"
                                />
                            </div>
                        </div>

                        {/* Botão de Enviar */}
                        <div className="pt-4">
                            <button
                                type="submit"
                                className="w-full bg-[#1976d2] hover:bg-[#1565c0] text-white font-bold py-3 rounded-lg transition duration-300 transform active:scale-[0.98] shadow-sm"
                            >
                                Criar conta
                            </button>
                        </div>
                    </form>

                    {/* Divisor Visual */}
                    <div className="relative flex items-center py-6">
                        <div className="flex-grow border-t border-gray-300"></div>
                    </div>

                    <p className="text-center text-sm text-gray-600">
                        Já tem uma conta?{" "}
                        <a href="/login" className="text-[#1976d2] font-bold hover:underline">
                            Fazer login
                        </a>
                    </p>
                </div>
            </main>

            <Footer />
        </div>
    );
}