import { Link, Outlet} from 'react-router-dom'

export const Home=()=>{
    return(
        <>
        <div>
            <nav>
            <Link to='thesis'>Mythesis</Link>
            </nav>
            <hr></hr>
        
        <Outlet/>
        MYHomepage<br></br>

            
        </div>
        
        </>
        
    )
}

//export default Home