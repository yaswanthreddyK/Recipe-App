import { useState } from "react"
import searchIcon from "../assets/search.png"
import {getDishData} from "../api"
import { Link, useNavigate } from "react-router-dom"
export default function Search(){
    const [result, setResult] = useState("")
   const navigate = useNavigate()
    async function  handleChange(value){
        const url = `https://api.spoonacular.com/recipes/autocomplete?number=10&query=${value}&apiKey=bc1a614b3d344f36b186c6851f1db31d`
        const data = await getDishData(url)
         setResult( data.map(dish=>{
        return (
            <Link to={`/${dish.title}`} key={dish.id} className="search-result">
                <p>{dish.title}</p>
            </Link>
        )
       }))
    }

    function handleSubmit(e){
        e.preventDefault()
       navigate(`/${e.target.input.value}`)
        
    }

    return (
        <section className="search-section" >
            <form id="form" className="search-form" onSubmit={(e)=> handleSubmit(e)}>
                <input name="input" type="text" className="search-input" onChange={(e)=>{handleChange(e.target.value)}}/>
                <button className="search-btn"><img src={searchIcon} alt="search" /></button>
            </form>
                <h2>Search Results</h2>
                <div className="results">{result}</div>
        </section>
    )
}