import { useNavigate } from 'react-router-dom'

function Landing(){
    const navigate = useNavigate()
    
    return (
        <>
        <div className="flex justify-center items-center min-h-screen min-w-screen bg-white " >

            <div className="w-[90vw] h-[90vh] bg-violet-100 rounded-2xl p-2 border-2 border-blue-400 flex flex-col  items-center justify-center text-center">

                <p className="text-blue-700 font-bold text-4xl px-10">Nodo Logístico Altamira Smart Hub</p>

                <p className="px-10 py-7">Infraestructura logística sostenible para el comercio internacional</p>


                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border-2 border-blue-700 rounded my-3" onClick={() => navigate('/proyecto')} >Ver Proyecto</button>
            </div>
            
        </div>
        </>
    )

}

export default Landing
