import { Link } from "react-router-dom"
export default function Error(){
    return (
        <header className="error">
        <h1>An Error Occured!</h1>
        <Link to="/">Go to Home</Link>
        </header>
    )
    
}