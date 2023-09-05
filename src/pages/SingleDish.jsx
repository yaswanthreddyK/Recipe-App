import {
  Link,
  defer,
  Await,
  useLoaderData,
} from "react-router-dom";
import { Suspense } from "react";
import { getDishData } from "../api";

export function loader({ request }) {
  const id = new URL(request.url).searchParams.get("id");
  const url = `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=bc1a614b3d344f36b186c6851f1db31d`;
  return defer({ dish: getDishData(url) });
}

export default function SingleDish() {
  const dataPromise = useLoaderData();

  function renderData(dish) {
    let instructions = dish.instructions
    const div = document.createElement("div");
    div.innerHTML = instructions;
    instructions = div.textContent.split("\n");
    const howTo = instructions.map((inst, index) => {
      return <li key={index}>{inst}</li>;
    });
    return (
      <>
        <Link className="go-back" to=".." relative="path">
          Go Back
        </Link>

        <img src={dish.image} alt="" />
        <article>
          <h3>{dish.title}</h3>
          <p>{dish.vegan ? "Veg" : "Non-veg"}</p>
          <p>Likes: {dish.aggregateLikes}</p>
          <p>Ready In: {dish.readyInMinutes} min</p>
          <p>Servings: {dish.servings}</p>
          <h4 className="making">Making Process</h4>
          <ol className="steps">{howTo}</ol>
        </article>
      </>
    );
  }
  return <section className="single-dish">
    {window.scroll(0, 0)}
    <Suspense fallback={<h2  style={{ margin: "1em 0 0 2em" }}>Loading...</h2>}>
        <Await resolve={dataPromise.dish}>
            {(dish)=> renderData(dish)}
        </Await>
    </Suspense>
    </section>;
}
