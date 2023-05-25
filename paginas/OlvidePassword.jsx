import { Link } from "react-router-dom";

const OlvidePassword = () => {
    return (
        <>
            <div>
                <h1 className="text-indigo-800 font-black text-6xl">Recupera tu acceso y no Pierdas {""}<span className="text-black">tus pacientes</span></h1>
            </div>

            <div className="mt-20 shadow-lg py-10 px-5 rounded-lg md:mt-5 bg-white">
                <form>
                    <div>
                        <label className="uppercase text-gray-600 block text-xl font-bold">
                            Email
                        </label>
                        <input className="rounded-xl border w-full mt-2 my-4 p-3 bg-gray-50" type="email" placeholder="Email de Registro" />
                        <input className="py-3 bg-indigo-700 w-full rounded-xl font-bold  mt-5 uppercase hover:cursor-pointer hover:bg-indigo-900 md:w-auto px-10  text-white text-center" type="submit" value="Enviar instrucciones" />
                    </div>
                </form>
                <nav className="mt-10 lg:flex lg:justify-between ">
                    <Link className="block text-center my-5 text-gray-500" to="/">ya tienes una cuenta? Inicia session</Link>
                    <Link className="block text-center my-5 text-gray-500" to="/registrar">No tienes una cuenta? registrate</Link>
                </nav>
            </div>

        </>
    );
};

export default OlvidePassword

