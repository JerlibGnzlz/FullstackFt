import { useState } from "react";
import { Link } from "react-router-dom";
import Alerta from "../components/Alerta";
import { clienteAxios } from "../config/axios";



const Registrar = () => {

    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repetirPassword, setRepetirPassword] = useState('');

    const [alerta, setAlerta] = useState({});



    const handleSubmit = async (e) => {
        e.preventDefault();

        if ([nombre, email, password, repetirPassword].includes("")) {

            setAlerta({ msg: "Los campos son requeridos", error: true });
            return;
        }
        if (password !== repetirPassword) {
            setAlerta({ msg: "Los password son diferente", error: true });

            return;
        }
        if (password.length < 6) {
            setAlerta({ msg: 'El Password es muy corto, minimo 6 caracteres', error: true });

            return;
        }


        setAlerta({});

        try {
            // const url = `/veterinarios`;

            await clienteAxios.post("/veterinarios", { nombre, password, email });
            setAlerta({
                msg: "Creado Correctamente revisa tu email",
                error: false
            });
        } catch (error) {
            setAlerta({
                msg: error.response.data.msg,
                error: true
            });
        }
    };
    const { msg } = alerta;




    return (
        <>
            <div>
                <h1 className="text-indigo-800 font-black text-6xl">Crea tu cuenta y Administra {""}
                    <span className="text-black">tus Pacientes</span>
                </h1>
            </div >


            <div className="mt-20 shadow-lg py-10 px-5 rounded-lg md:mt-5 bg-white">


                {msg && <Alerta alerta={alerta} />}


                <form onSubmit={handleSubmit} >
                    <div>
                        <label className="uppercase text-gray-600 block text-xl font-bold">
                            Nombre
                        </label>
                        <input className="rounded-xl border w-full mt-2 my-4 p-3 bg-gray-50" type="text" placeholder="Ingresar nombre"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)} />

                    </div>
                    <div>
                        <label className="uppercase text-gray-600 block text-xl font-bold">
                            Email
                        </label>
                        <input className="rounded-xl border w-full mt-2 my-4 p-3 bg-gray-50" type="email" placeholder="Email de Registro"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} />

                    </div>
                    <div>
                        <label className="uppercase text-gray-600 block text-xl font-bold">
                            Password
                        </label>
                        <input className="rounded-xl border w-full mt-2 my-4 p-3 bg-gray-50" type="password" placeholder="Ingresar tu password "
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div>
                        <label className="uppercase text-gray-600 block text-xl font-bold">
                            Repetir Password
                        </label>
                        <input className="rounded-xl border w-full mt-2 my-4 p-3 bg-gray-50" type="password" placeholder="Repite tu password "
                            value={repetirPassword}
                            onChange={(e) => setRepetirPassword(e.target.value)} />
                    </div>
                    <input className="py-3 bg-indigo-700 w-full rounded-xl font-bold  mt-5 uppercase hover:cursor-pointer hover:bg-indigo-900 md:w-auto px-10  text-white text-center" type="submit" value="Crear cuenta" />
                    <nav className="mt-10 lg:flex lg:justify-between ">
                        <Link className="block text-center my-5 text-gray-500" to="/">ya tienes una cuenta? Inicia session</Link>
                        <Link className="block text-center my-5 text-gray-500" to="/olvidePassword">Olvide mi password</Link>
                    </nav>
                </form>
            </div>

        </>



    );
};

export default Registrar;
