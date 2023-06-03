import { Link } from "react-router-dom"
import logo from "../../img/brasao.png"

function Navbar(){
    return(
        <nav>
            <ul className='bg-blue-950 p-4 text-white flex flex-row justify-around text-2xl'>
            <>
               <Link to="/" className='hover:text-red-600 p-2 '><img src={logo} className="max-h-16 mr-80"/></Link>
            </>
            <>
               <Link to="/" className='hover:text-red-600 p-6'>Home</Link>
            </>
            <>
               <Link to="/explore" className='hover:text-red-600 p-6'>Explorar</Link>
            </>
            <>
               <Link to="/explore" className='hover:text-red-600 p-6'>Eventos</Link>
            </>
            <>
               <Link to="/routes_app" className='hover:text-red-600 p-6'>Rotas</Link>
            </>
            </ul>
        </nav>
        
    )
}

export default Navbar