import {
  Link,
  defer,
  Await,
  useLoaderData
} from "react-router-dom";
import { Suspense} from "react";
import { getData } from "../api";

export function loader({ params }) {
  const url =
    `https://api.spoonacular.com//recipes/complexSearch?query=${params.dish}&number=100&apiKey=bc1a614b3d344f36b186c6851f1db31d`;
  return defer({ dishes: getData(url,params.dish) });
}

export default function DishesList() {
  const dataPromise = useLoaderData();
  function renderResults(dishes) {
   
     const allDishes = dishes.map(dish=>{
      return   <Link to={`details?id=${dish.id}`} key={dish.id} className="cat-dishes" state={{dish}}>
        <article  key={dish.id}>
            <img src={dish.image} alt="image" />
            <h3>{dish.title}</h3>
        </article>
        </Link>

     })
    return allDishes;
  }
  return (
    <section style={{margin:"1em 1em"}}>
      {window.scroll(0,0)}
      <Link to=".."  className="go-back" >Go Back</Link>
        <h1 style={{margin: "1em 0 0 1em"}}>Top Results</h1>
      <Suspense
        fallback={<h2 style={{ margin: "1em 0 0 2em" }}>Loading....</h2>}
      >

        <Await resolve={dataPromise.dishes}>
          {(dishes) => renderResults(dishes)}
        </Await>
      </Suspense>
    </section>
  );
}
