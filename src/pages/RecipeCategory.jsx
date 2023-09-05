import { Link } from "react-router-dom"
import pasta from "../assets/FoodImages/pasta.jpg"
import biryani from "../assets/FoodImages/biryani.jpg"
import steak from "../assets/FoodImages/steak.jpg"
import cake from "../assets/FoodImages/cake.webp"
import curry from "../assets/FoodImages/curry.webp"
import paneer from "../assets/FoodImages/paneer.jpeg"
import MostPopular from "./MostPopular"

export default function RecipeCategory(){
    return (
        <>
        <section className="categories">
            <h1>Recipes on</h1>
            <div>
             <Link to="pasta">
              <article>
                <img src={pasta} alt="pasta" />
                <h4>Pasta</h4>
              </article>
             </Link>
             <Link to="biryani">
              <article>
                <img src={biryani} alt="biryani" />
                <h4>Biryani</h4>
              </article>
             </Link>
             <Link to="paneer">
              <article>
                <img src={paneer} alt="paneer" />
                <h4>Paneer</h4>
              </article>
             </Link>
             <Link to="curry">
              <article>
                <img src={curry} alt="curry" />
                <h4>curry</h4>
              </article>
             </Link>
             <Link to="steak">
              <article>
                <img src={steak} alt="steak" />
                <h4>Steak</h4>
              </article>
             </Link>
             <Link to="cake">
              <article>
                <img src={cake} alt="cake" />
                <h4>Cake</h4>
              </article>
             </Link>
                             
            </div>
        </section>
      <MostPopular />
        </>
    )
}

