import {Link} from "react-router-dom"

export default function NavBar(){
    return(
        <nav>
            <Link to='/'>Angelina Chen</Link>
            <Link to='/software'>Software Engineer</Link>
            <Link to='/actress'>Actress</Link>
        </nav>
    )
}