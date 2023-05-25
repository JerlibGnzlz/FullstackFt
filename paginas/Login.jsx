import { Link } from "react-router-dom";

const Login = () => {
    return (
        <>

            <div>
                <h1 className="text-indigo-800 font-black text-6xl">Inicia sesion y administra tus {""}<span className="text-black">pacientes</span></h1>
            </div>


            <div className="mt-20 shadow-lg py-10 px-5 rounded-lg md:mt-5 bg-white">
                <form>
                    <div>
                        <label className="uppercase text-gray-600 block text-xl font-bold">
                            Email
                        </label>
                        <input className="rounded-xl border w-full mt-2 my-4 p-3 bg-gray-50" type="email" placeholder="Email de Registro" />
                    </div>
                    <div>
                        <label className="uppercase text-gray-600 block text-xl font-bold">
                            Password
                        </label>
                        <input className="rounded-xl border w-full mt-2 p-3 my-5 bg-gray-50" type="password" placeholder="Ingresa la contraseña" />
                    </div>
                    <input className="py-3 bg-indigo-700 w-full rounded-xl font-bold  mt-5 uppercase hover:cursor-pointer hover:bg-indigo-900 md:w-auto px-10  text-white text-center" type="submit" value="Iniciar Seccion" />

                </form>
                <nav className="mt-10 lg:flex lg:justify-between ">
                    <Link className="block text-center my-5 text-gray-500" to="/registrar">No tienes una cuenta? registrate</Link>
                    <Link className="block text-center my-5 text-gray-500" to="/olvidePassword">Olvide mi password</Link>
                </nav>
            </div >


        </>
    );
};

export default Login;
