import { useLocation } from "react-router-dom"
import { Link } from "react-router-dom";

export default function PopularDish(){
    const location = useLocation()
    const {dish} = location.state
  
    function renderInstructions(instructions){
        const div = document.createElement("div")
        div.innerHTML = instructions
      instructions = div.textContent.split("\n");
    const howTo = instructions.map((inst,index)=>{
              return <li key={index}>{inst}</li>
        })
        return howTo
    }
    return (
        
        <section className="single-dish">
            {window.scroll(0,0)}
            <Link className="go-back"  to=".." relative="path">Go Back</Link>

            <img src={dish.image} alt="" />
            <article>
                <h3>{dish.title}</h3>
                <p>{dish.vegan ? "Veg" : "Non-veg"}</p>
                  <p >Likes: {dish.aggregateLikes}</p>
                  <p>Ready In: {dish.readyInMinutes} min</p>
                  <p>Servings: {dish.servings}</p>
                  <h4 className="making">Making Process</h4>
                  <ol className="steps">{renderInstructions(dish.instructions)}</ol>
            </article>

        </section>
    )
}