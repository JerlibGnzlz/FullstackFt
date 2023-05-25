

const Alerta = ({ alerta }) => {
    return (
        <div className={
            `${alerta.error ? ' from-red-400 to-red-600'
                : 'from-indigo-400 to-indigo-600'}
            bg-gradient-to-r text-center font-black text-white  mb-4 uppercase p-2 rounded-3xl`}>
            {alerta.msg}
        </div>
    );
};


export default Alerta;
