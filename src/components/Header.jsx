import logo from "../assets/logo.png"
import searchIcon from "../assets/search.png"
import { Link } from "react-router-dom"

export default function Header(){
    return(
        <header>
            <nav>
                <div className="logo">
                    <Link to="/">
                    <img src={logo} alt="" />
                    </Link>
                </div>

                
                <div className="form">
                <Link to="search" className="search-button">
                    <img src={searchIcon} alt="search" />
                </Link>
                </div>
                
               
               
            </nav>
        </header>
    )
}